import { Request, Response } from "express";
import { getTasks, createTask } from "../services/task.service";
import { successResponse } from "../utils/response";
import { prisma } from "../prisma/client";

export const listTasks = async (req: Request, res: Response) => {

  const userId = (req as any).user.userId;

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;

  const status = req.query.status as string;

  const tasks = await getTasks(userId, page, limit, status);

  res.json(successResponse(tasks));

};

export const addTask = async (req: Request, res: Response) => {

  const userId = (req as any).user.userId;

  const task = await createTask({
    ...req.body,
    userId
  });

  res.json(successResponse(task));

};

export const getTaskById = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const taskId = Number(req.params.id);

  const task = await prisma.task.findFirst({
    where: {
      id: taskId,
      userId: userId,
    },
  });

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
};

export const updateTask = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const taskId = Number(req.params.id);

  const { title, description, status } = req.body;

  const task = await prisma.task.findFirst({
    where: {
      id: taskId,
      userId: userId,
    },
  });

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  const updatedTask = await prisma.task.update({
    where: {
      id: taskId,
    },
    data: {
      title,
      description,
      status,
    },
  });

  res.json(updatedTask);
};

export const deleteTask = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const taskId = Number(req.params.id);

  const task = await prisma.task.findFirst({
    where: {
      id: taskId,
      userId: userId,
    },
  });

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  await prisma.task.delete({
    where: {
      id: taskId,
    },
  });

  res.json({ message: "Task deleted successfully" });
};
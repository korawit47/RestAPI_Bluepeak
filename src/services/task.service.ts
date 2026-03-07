import { prisma } from "../prisma/client";

export const getTasks = async (
  userId: number,
  page: number,
  limit: number,
  status?: string
) => {

  const skip = (page - 1) * limit;

  const [tasks, total] = await Promise.all([
    prisma.task.findMany({
      where: { userId, status },
      skip,
      take: limit
    }),
    prisma.task.count({
      where: { userId, status }
    })
  ]);

  return {
    tasks,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    }
  };
};

export const createTask = async (data: any) => {

  return prisma.task.create({
    data
  });

};
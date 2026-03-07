import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/auth.service";
import { successResponse } from "../utils/response";

export const register = async (req: Request, res: Response) => {

  const user = await registerUser(req.body);

  res.json(
    successResponse(user, "User registered")
  );
};

export const login = async (req: Request, res: Response) => {

  const { email, password } = req.body;

  const token = await loginUser(email, password);

  res.json(
    successResponse(token, "Login success")
  );
};
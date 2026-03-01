import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { asyncHandler } from "../utils/asyncHandler";

const userService = new UserService();

export const getUserByEmail = asyncHandler(async (req: Request<{ email: string }>, resp: Response) => {
    const user = await userService.getUserByEmail(req.params.email);
    resp.status(200).json(user);
});
export const getUsers = asyncHandler(async (req: Request<{ email: string }>, resp: Response) => {
    const user = await userService.getUsers();
    resp.status(200).json(user);
});
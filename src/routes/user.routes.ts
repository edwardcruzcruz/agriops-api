import { Router } from "express";
import { getUserByEmail, getUsers } from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.get("/:email",getUserByEmail)
userRoutes.get("",getUsers)

export default userRoutes;
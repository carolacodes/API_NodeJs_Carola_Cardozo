import express from "express";
import { userController } from "./controller";

const userRouter = express.Router();

const {getUsers, getUser, createUser, login, deleteUser, updateUser} = userController; //importamos los controladores

userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
userRouter.post("/register", createUser);
userRouter.post("/login", login);
userRouter.delete("/deleteUser/:id", deleteUser);
userRouter.put("editUser/:id", updateUser);

export default userRouter;
import express from "express";
import { userController } from "./controller";

const userRouter = express.Router();

const {getUsers, getUser, createUser, loginUser, deleteUser, editUser} = userController; //importamos los controladores

userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
userRouter.post("/register", createUser);
userRouter.post("/login", loginUser);
userRouter.delete("/deleteUser/:id", deleteUser);
userRouter.put("editUser/:id", editUser);

export default userRouter;
//import { compare } from "bcrypt"; //compare es un metodo que compara lo que tenemos hasheado
import { Request, Response } from "express";
//import { sign } from "jsonwebtoken";
import User from "./model";
import { userServices } from "./service";

const {getUsers, getUser, loginUser, deleteUser, editUser, createUser} = userServices
class UserController {
    async getUsers(req: Request, res: Response) {
            try {
            const users = await getUsers();
            if(!users){
                return res.status(400).json({ error: "Users not found" });
            }
            return res.status(200).json(users);
            } catch (error) {
            return res.status(400).json({ error: "Users not found" });
            }
        }
    async getUser(req: Request, res: Response) {
            try {
            const id = req.params.id;
            const user = await getUser(id);
            if(!user){
                return res.status(400).json({ error: "User not found" });
            }
            return res.status(200).json(user);
            } catch (error) {
            return res.status(400).json({ error: "User not found" });
            }
    }
        async createUser(req: Request, res: Response) {
            try {
            const user = await createUser(req.body);
            return res.status(201).json(user);
            } catch (error) {
            return res.status(400).json({ error: (error as Error).message });
            }
        }
        async loginUser(req: Request, res: Response) {
            try {
            const token = await loginUser(req.body);
            return res.header("authtoken", token).status(200).json("Login successful");
            } catch (error) {
            return res.status(400).json({ error: (error as Error).message });
            }
        }

        async deleteUser(req: Request, res: Response) {
            try {
            const id = req.params.id
            const user = await deleteUser(id)
            if(!user){
                return res.status(400).json({ error: "User not found" });
            }
            return res.status(200).json(user);
            } catch (error) {
            return res.status(400).json({ error: "User not found" });
            }
        }

        async editUser(req: Request, res: Response) {
            try {
            const id = req.params.id
            const userData = req.body
            const user = await editUser(id, userData)
            if(!user){
                return res.status(400).json({ error: "User not found" });
            }
            return res.status(200).json(user);
            } catch (error) {
            return res.status(400).json({ error: "User not found" });
            }
        }
}

export const userController = new UserController();//exportamos una instancia del objeto


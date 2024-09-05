//aca manejamos la logica de negocio
import { compare } from "bcrypt"; //compare es un metodo que compara lo que tenemos hasheado
import { sign } from "jsonwebtoken";
import { IUser } from "../../types";
import { userDao } from "./dao";

const {getAllUsers, getUserById, editUser, deleteUser, createUser, getUserByMail} = userDao

class UserServices {
    async loginUser(user: { email: string; password: string }) {
            try {
                const { email, password } = user;
                const existingUser = await getUserByMail(email);
                if (!existingUser) {
                throw new Error("Invalid email");
                }
                const isPasswordValid = await compare(password, existingUser.password!);
                if (!isPasswordValid) {
                throw new Error("Invalid password");
                }
                const token = sign(
                {
                    userId: existingUser._id,
                    email: existingUser.email,
                    role: existingUser.role,
                },
                process.env.JWT_SECRET!,
                { expiresIn: "1h" }
                );
        
                return token;
            } catch (error) {
                throw new Error((error as Error).message);
            }
}

    async getUser(id: string) {
            try {
            const user = await getUserById(id);
            return user;
            } catch (error) {
            throw Error((error as Error).message);
            }
    }

    async getUsers() {
            try {
            const users = await getAllUsers();
            return users;
            } catch (error) {
            throw Error((error as Error).message);
            }
    }

    async createUser(user: IUser) {
            try {
            const newUser = await createUser(user);
            return newUser;
            } catch (error) {
            throw Error((error as Error).message);
            }
    }

    async deleteUser(userId: string){
        try {
            const userDelete = await deleteUser(userId)
            return userDelete
        } catch (error){
            throw Error((error as Error).message);
        }
    }

    async editUser(userId: string, userData: IUser){
        try {
            const userEdit = await editUser(userId, userData)
            return userEdit
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
}

export const userServices = new UserServices();//exportamos una instancia del objeto


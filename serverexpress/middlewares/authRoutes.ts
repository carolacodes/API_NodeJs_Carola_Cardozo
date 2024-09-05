import { config } from "dotenv";
import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
config();

export function authRoutes(req: Request, res: Response, next: Function) {
    const token = req.header("authtoken")
    if(!token) return res.status(401).json("Access denied");
    try {
        const verified = verify(token, process.env.JWT_SECRET!) as {userId: string;}
        const {userId} = verified;
        if(!verified) return res.status(401).json("You need to be logged in to te access this route");
        else{
            req.body.userId = userId;
            next();
        }
    } catch (error) {
        res.status(400).json("invalid token");
    }
}
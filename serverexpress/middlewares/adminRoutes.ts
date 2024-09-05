import { config } from "dotenv";
import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
config();

export function adminRoutes(req: Request, res: Response, next: Function){
    const token = req.header("authtoken");
    if(!token) return res.status(401).json("Acces denied");
    try {
        const verified = verify(token, process.env.JW_SECRET!) as {role: string};
        if(!verified) return res.status(401).json("Access denied");
        const isAdmin = verified.role === "admin";
        if(!isAdmin) res.status(401).json("You do not have permissions to access this route");
        if(isAdmin){
            next();
        }
    } catch (error) {
        res.status(400).json("Invalid token");
    }
}

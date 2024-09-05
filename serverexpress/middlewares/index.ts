import { config } from "dotenv";
import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
config();

export function isAdmin(req: Request, res: Response, next: Function) {
    const token = req.headers; //traemos el token del header
    try{
        if(token){
            const isTokenValid = verify(
                token["token"] as string,
                process.env.JWT_SECRET!
            );
            console.log(isTokenValid);
            if(isTokenValid){
                if(JSON.parse(isTokenValid as string).is_admin){
                    next();
                }
                else{
                    res.status(401).send("You are not admin");
                }
            }else{
                res.status(401).send("Unauthorized user")
            }
        }
    }catch(error){
        res.status(500).send(error)
    }
}


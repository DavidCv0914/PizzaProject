import conexion from "../database/database";
import { Request,Response } from "express";

class User {
    
    public async createUser(req:Request, res:Response){
        const [result]=await conexion.query("SELECT 1 + 1 as Result")
        res.send(result)
    }

}

export const user = new User();
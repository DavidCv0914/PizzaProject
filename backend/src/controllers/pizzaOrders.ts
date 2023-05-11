import conexion from "../database/database";
import { Request,Response } from "express";

class PizzaOrder {
    constructor() {
        
    }

    public async generateOrder(req:Request,res:Response) {
        try {
            
        } catch (error) {
            res.json("error");
            console.log("error");
            
        }
    }

}
import conexion from "../database/database";
import { Request,Response } from "express";

class PizzaOrder {
    constructor() {
        
    }

    public async generateOrder(req:Request,res:Response) {
        try {
            const {ingredient1,ingredient2,ingredient3,ingredient4,ingredient5} = req.body
            const ingredient6 = req.body.ingredient6 || "no hay"
            const ingredient7 = req.body.ingredient7 || "no hay"
            const ingredient8 = req.body.ingredient8 || "no hay"
            const ingredient9 = req.body.ingredient9 || "no hay"
            const {size,cost} = req.body
            console.log(req.body);
            console.log(ingredient6);
            
            const response:any[]=await conexion.query("INSERT INTO ingredientes(ingrediente1, ingrediente2, ingrediente3, ingrediente4, ingrediente5, ingrediente6, ingrediente7, ingrediente8, ingrediente9) VALUES (?,?,?,?,?,?,?,?,?)",[ingredient1,ingredient2,ingredient3,ingredient4,ingredient5,ingredient6,ingredient7,ingredient8,ingredient9])

            console.log(response);
            if (response[0].affectedRows != 0) {
                const responsePizza:any[] = await conexion.query("INSERT INTO pizza(tamaño,precio) VALUES (?,?)",[size,cost]) 
                
            }
            
            res.json("entro")
        } catch (error) {
            res.json("error");
            console.log("error");
            
        }
    }

}

export const pizzasOrder = new PizzaOrder();

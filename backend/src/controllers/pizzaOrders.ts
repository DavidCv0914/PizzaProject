import conexion from "../database/database";
import { Request,Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config";
import dotenv from "dotenv";

class PizzaOrder {
    constructor() {
        dotenv.config();
    }

    public async generateOrder(req:Request,res:Response) {
        try {
            const token = req.header("token")
            const {ingredient1,ingredient2,ingredient3,ingredient4,ingredient5,size,cost,address} = req.body
            const ingredient6 = req.body.ingredient6 || "no hay"
            const ingredient7 = req.body.ingredient7 || "no hay"
            const ingredient8 = req.body.ingredient8 || "no hay"
            const ingredient9 = req.body.ingredient9 || "no hay"
            console.log(req.body);

            if (token) {
                let emailVerify = jwt.verify(token,process.env.TOKEN_SECRET || config.TOKEN_SECRET);
                let {email}:any = emailVerify;
                
                const response:any[]=await conexion.query("INSERT INTO ingredientes(ingrediente1, ingrediente2, ingrediente3, ingrediente4, ingrediente5, ingrediente6, ingrediente7, ingrediente8, ingrediente9) VALUES (?,?,?,?,?,?,?,?,?)",[ingredient1,ingredient2,ingredient3,ingredient4,ingredient5,ingredient6,ingredient7,ingredient8,ingredient9]);

                console.log("-----------------------------------");
                if (response[0].affectedRows != 0) {
                    const responsePizza:any[] = await conexion.query("INSERT INTO pizza(tamaño,precio) VALUES (?,?)",[size,cost]);
                    if (responsePizza[0].affectedRows !=0) {
                        const responseIngredients: any[] = await conexion.query("SELECT * FROM ingredientes WHERE id_lista = LAST_INSERT_ID()");
                        const responseRecipePizza: any[] = await conexion.query("SELECT * FROM pizza WHERE id_pizza = LAST_INSERT_ID()");

                        if (responseIngredients[0].length > 0 && responseRecipePizza[0].length > 0) {
                            const insertRecipe:any[] = await conexion.query("INSERT INTO receta(id_pizza2,id_lista1) VALUES (?,?)",[responseRecipePizza[0][0].id_pizza,responseIngredients[0][0].id_lista]);
                            if (insertRecipe[0].affectedRows != 0) {
                                const order : any[] = await conexion.query("INSERT INTO pedido(id_pizza1,email_profile,direccion) VALUES (?,?,?)",[responseRecipePizza[0][0].id_pizza,email,address]);
                                if (order[0].affectedRows != 0) {
                                    res.json("Generate order");
                                }
                            }
                            
                        } 
                    } 
                }
            }else{
                res.json("no loged")
            }
        } catch (error) {
            res.json("error");
            console.log(error);
            
        }
    }

}

export const pizzasOrder = new PizzaOrder();

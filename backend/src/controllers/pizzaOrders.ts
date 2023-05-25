import conexion from "../database/database";
import { Request,Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config";
import dotenv from "dotenv";

class PizzaOrder {
    constructor() {
        dotenv.config();
    }

    public async generatePizza(req:Request,res:Response) {
        try {
            const token = req.header("token")
            const {ingredient1,ingredient2,ingredient3,ingredient4,ingredient5,size,cost,address} = req.body || "no hay"
            const ingredient6 = req.body.ingredient6 || "no hay"
            const ingredient7 = req.body.ingredient7 || "no hay"
            const ingredient8 = req.body.ingredient8 || "no hay"
            const ingredient9 = req.body.ingredient9 || "no hay"
            console.log(req.body);

            if (token) {
                let emailVerify = jwt.verify(token,process.env.TOKEN_SECRET || config.TOKEN_SECRET);
                let {email}:any = emailVerify;
                
                const response:any[]=await conexion.query("INSERT INTO ingredientes(ingrediente1, ingrediente2, ingrediente3, ingrediente4, ingrediente5, ingrediente6, ingrediente7, ingrediente8, ingrediente9) VALUES (?,?,?,?,?,?,?,?,?)",[ingredient1,ingredient2,ingredient3,ingredient4,ingredient5,ingredient6,ingredient7,ingredient8,ingredient9]);
                const responseIngredients: any[] = await conexion.query("SELECT * FROM ingredientes WHERE id_lista = LAST_INSERT_ID()");
                console.log("-----------------------------------");

                if (response[0].affectedRows != 0) {

                    const pedido : any[] = await conexion.query("INSERT INTO pedido(email_profile,direccion) VALUES (?,?)",[email,address]);

                    if (pedido[0].affectedRows != 0) {
                        
                        const responsePedido : any[] = await conexion.query("SELECT * FROM pedido WHERE id_pedido = LAST_INSERT_ID()");
                        console.log(responseIngredients[0]);
                        
                        if (responseIngredients[0].length > 0 && responsePedido[0].length > 0) {
                            const responsePizza:any[] = await conexion.query("INSERT INTO pizza(tamaño,precio,id_pedido1) VALUES (?,?,?)",[size,cost,responsePedido[0][0].id_pedido]);
                            if (responsePizza[0].affectedRows !=0) {
                                const responseRecipePizza: any[] = await conexion.query("SELECT * FROM pizza WHERE id_pizza = LAST_INSERT_ID()");
                                const insertRecipe:any[] = await conexion.query("INSERT INTO receta(id_pizza1,id_lista1) VALUES (?,?)",[responseRecipePizza[0][0].id_pizza,responseIngredients[0][0].id_lista]);
                                if (insertRecipe[0].affectedRows != 0) {
                                    res.json("generate order")
                                }else{
                                    res.json("no generate")
                                }
                            }else{
                                res.json("no generate")
                            }
                        }else{
                            res.json("no generate")
                        }
                    }else{
                        res.json("no generate")
                    }
                }else{
                    res.json("no generate")
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

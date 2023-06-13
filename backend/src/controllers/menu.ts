import conexion from "../database/database";
import { Request,Response } from "express";

class MenuPizzas{
    
    public async generatePizzas(req:Request,res:Response) {
        try {
            const result:any[] =await conexion.query("SELECT * FROM pizza");
            res.json(result[0]);
            
        } catch (error) {
            res.json(error)
        }
    }

    public async generatePizzasSize(req:Request,res:Response) {
        try {
            const {size} =req.params
            console.log(size);
            
            const result:any[] =await conexion.query("SELECT * FROM pizza WHERE tamaño = ?",[size]);
            res.json(result[0]);
            
        } catch (error) {
            res.json(error)
        }
    }

}

export const menuPizzas = new MenuPizzas()
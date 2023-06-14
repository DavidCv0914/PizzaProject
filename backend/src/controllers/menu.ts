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
            
            const result:any[] =await conexion.query("SELECT * FROM pizza WHERE tamaño = ?",[size]);
            res.json(result[0]);
            
        } catch (error) {
            res.json(error)
        }
    }

    public async generateSodas(req:Request,res:Response) {
        try {
            const result:any[] = await conexion.query("SELECT * FROM bebida");

            res.json(result[0])
        } catch (error) {
            res.json(error)
        }
    }

    public async generateSodasSize(req:Request,res:Response) {
        try {
            const {size} = req.params

            const result:any[] = await conexion.query("SELECT * FROM bebida WHERE tamaño = ?",[size]);

            res.json(result[0])
        } catch (error) {
            res.json(error)
        }
    }

    public async generateSodasType(req:Request,res:Response) {
        try {
            const {type} = req.params

            const result:any[] = await conexion.query("SELECT * FROM bebida WHERE tipo = ?",[type]);

            res.json(result[0])
        } catch (error) {
            res.json(error)
        }
    }

    public async generateSodasAll(req:Request,res:Response) {
        try {
            const {type,size} = req.params

            const result:any[] = await conexion.query("SELECT * FROM bebida WHERE tipo = ? AND tamaño = ?",[type,size]);

            res.json(result[0])
        } catch (error) {
            res.json(error)
        }
    }


}

export const menuPizzas = new MenuPizzas()
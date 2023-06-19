import mercadopago from "mercadopago";
import { Request,Response } from "express";

class Payment {
    
    public async createOrder(req:Request,res:Response) {
        mercadopago.configure({
            access_token: "TEST-6464245044840654-061916-572f90a2234035e8c28676c44eecefb7-1402568565"
        });

        const result = await mercadopago.preferences.create({
            items:[
                {
                    title: "pedido",
                    unit_price: 10000,
                    currency_id: "COP",
                    quantity: 1
                }
            ]
        });
    }
}

export const payment = new Payment();
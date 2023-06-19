import { Router } from "express";
import { menuPizzas } from "../controllers/menu";

class RoutesOrder {

    paymentRoute = Router();

    constructor() {
        this.config();
    }

    config():void{
       this.paymentRoute.get('/createOrderPayment',(req,res) =>{res.send("payment")});
       this.paymentRoute.get('/succes',(req,res) =>{res.send("succes")});
       this.paymentRoute.get('/webHook',(req,res) =>{res.send("webHook")});
    }
}

const paymentRoutes = new RoutesOrder();
export default paymentRoutes.paymentRoute;
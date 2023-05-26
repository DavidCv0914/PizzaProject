import { Router } from "express";
import { pizzasOrder } from "../controllers/pizzaOrders";

class RoutesOrder {

    orderRoute = Router();

    constructor() {
        this.config();
    }

    config():void{
       this.orderRoute.post('/generateOrder',pizzasOrder.generateOrder);
     
    }
}

const orderRoutes = new RoutesOrder();
export default orderRoutes.orderRoute;
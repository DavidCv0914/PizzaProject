import { Router } from "express";
import { pizzasOrder } from "../controllers/pizzaOrders";

class RoutesOrder {

    orderRoute = Router();

    constructor() {
        this.config();
    }

    config():void{
       this.orderRoute.post('/generatePizza',pizzasOrder.generatePizza);
     
    }
}

const orderRoutes = new RoutesOrder();
export default orderRoutes.orderRoute;
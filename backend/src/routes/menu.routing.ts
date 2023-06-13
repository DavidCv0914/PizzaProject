import { Router } from "express";
import { menuPizzas } from "../controllers/menu";

class RoutesOrder {

    menuRoute = Router();

    constructor() {
        this.config();
    }

    config():void{
       this.menuRoute.get('/getPizzas',menuPizzas.generatePizzas);
       this.menuRoute.get('/getPizzas/:size',menuPizzas.generatePizzasSize);
     
    }
}

const menuRoutes = new RoutesOrder();
export default menuRoutes.menuRoute;
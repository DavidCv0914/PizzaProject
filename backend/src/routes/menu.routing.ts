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
       this.menuRoute.get('/getSodas',menuPizzas.generateSodas);
       this.menuRoute.get('/getSodas/:size',menuPizzas.generateSodasSize);
       this.menuRoute.get('/getSodasType/:type',menuPizzas.generateSodasType);
       this.menuRoute.get('/getSodasType/:type/:size',menuPizzas.generateSodasAll);
    }
}

const menuRoutes = new RoutesOrder();
export default menuRoutes.menuRoute;
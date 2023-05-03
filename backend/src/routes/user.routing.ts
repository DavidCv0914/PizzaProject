import { Router } from "express";
import { user } from "../controllers/userController";

class RoutesUser {

    userRoute = Router();

    constructor() {
        this.config();
    }

    config():void{
       this.userRoute.get('/',user.createUser);
    }
}

const usersRoutes = new RoutesUser();
export default usersRoutes.userRoute;
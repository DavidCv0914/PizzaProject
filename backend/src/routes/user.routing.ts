import { Router } from "express";
import { user } from "../controllers/userController";

class RoutesUser {

    userRoute = Router();

    constructor() {
        this.config();
    }

    config():void{
       this.userRoute.post('/createUser',user.createUser);
       this.userRoute.post('/login',user.loginUser);
       this.userRoute.post('/createAdmin',user.createAdmin)
       this.userRoute.get('/dataUser',user.dataUser)
    }
}

const usersRoutes = new RoutesUser();
export default usersRoutes.userRoute;
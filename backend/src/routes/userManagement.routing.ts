import { Router } from "express";
import { userManagement } from "../controllers/userManagement";

class RoutesUser {

    userRoute = Router();

    constructor() {
        this.config();
    }

    config():void{
       this.userRoute.post('/updateUser',userManagement.updateUser);
       this.userRoute.get('/dataUser',userManagement.dataUser);
       this.userRoute.post('/sendEmail',userManagement.senEmail);
       this.userRoute.post('/validateCode/:codeVerify',userManagement.verifyCode);
       this.userRoute.post('/updatePassword/:email',userManagement.updatePassword)
    }
}

const usersMagaments = new RoutesUser();
export default usersMagaments.userRoute;
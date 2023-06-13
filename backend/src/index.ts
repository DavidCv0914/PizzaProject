import express,{Application} from "express";
import cors from "cors";
import userRouting from "./routes/user.routing";
import userManagement from "./routes/userManagement.routing";
import pizzaOrdersRouting from "./routes/pizzaOrders.routing";
import menuRouting from "./routes/menu.routing"; 

class Server{

    app:Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config():void{
        this.app.set('port',4000);
        this.app.use(cors());
        this.app.use(express.json());
    }
    routes():void{
        this.app.use('/auths',userRouting);
        this.app.use(userManagement);
        this.app.use(pizzaOrdersRouting);
        this.app.use(menuRouting);
    }
    
    start():void{
        this.app.listen(this.app.get('port'),() => {
            console.log("Server runing on port ",this.app.get('port'));
        })
    }

}

const services = new Server();
services.start();
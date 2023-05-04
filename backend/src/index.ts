import express,{Application} from "express";
import cors from "cors";
import userRouting from "./routes/user.routing";

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
    }
    
    start():void{
        this.app.listen(this.app.get('port'),() => {
            console.log("Server runing on port ",this.app.get('port'));
            
        })
    }

}

const services = new Server();
services.start();
import conexion from "../database/database";
import { sendNodemailer } from "../helpers/nodemailer";
import { numberRandom } from "../helpers/getRandomInt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Request,Response,NextFunction} from "express";
import config from "../config";

class UserManagement {

    constructor(){
        dotenv.config();
    }


    public async updateUser(req:Request,res:Response,next:NextFunction) {
        try {
            const token = req.header("token")
            
            if (token) {
                let emailVerify = jwt.verify(token,process.env.TOKEN_SECRET || config.TOKEN_SECRET);
                let {email}:any = emailVerify;
                let {name,surname,cellphone} = req.body;
                
                const response:any[] = await conexion.query("UPDATE profile SET name=?,surname=?,cellphone=? WHERE email = ?",[name,surname,cellphone,email])
                console.log(response[0].affectedRows);
                if (response[0].affectedRows != 0) {
                    res.json("successful update");
                }else{
                    res.json("update failed");
                }
                next();
            } else {
                res.json("no logued")
            }
        } catch (error) {
            res.json(error);
            console.log(error);
        }
    }

    public async dataUser(req:Request, res:Response, next:NextFunction) {
        
        const token = req.header("token")
        
        if (token) {
            let emailVerify = jwt.verify(token,process.env.TOKEN_SECRET || config.TOKEN_SECRET);
            let {email}:any = emailVerify;
            const response:any[]=await conexion.query("SELECT * FROM admin WHERE email = ?",[email]);
            const response2:any[]=await conexion.query("SELECT * FROM profile WHERE email = ?",[email]);
            
            if (response[0].length > 0) {
                res.json({data:response[0][0], rol:"admin"})
            }else if(response2[0].length > 0){
                res.json({data:response2[0][0], rol:"user"})
            }else{
                res.json("error")
            }
            next();
        } else {
            res.json("no token")
        }

    }

    public async senEmail(req:Request, res:Response) {
        try {
            let {email} = req.body

            const validateEmail : any[] = await conexion.query("SELECT email FROM profile WHERE email = ?",[email])
            if (validateEmail[0].length > 0) {
                let numberRandomGenerate=numberRandom.getRandomInt(0)

            const emailEnviado =await sendNodemailer.sendEmail(email, numberRandomGenerate, 1);

            if (emailEnviado.accepted) {
                res.json(numberRandomGenerate);
            } else {
                res.json("repeat procedure")
            }
            } else {
                res.json("email does not exist")
            }

        } catch (error) {
            res.json(error)
            console.log(error);
        }

    }

    public async verifyCode(req:Request,res:Response) {
        try {
            let {codeVerify}=req.params
            let {code} = req.body
           

            if (code == codeVerify) {
                res.json("correct code")
            } else {
                res.json("Incorrect code")
            }
            
        } catch (error) {
            res.json(error);
            console.log(error);
            
        }
    }

    public async updatePassword(req:Request,res:Response) {
        try {
            let {email} = req.params
            let {password} = req.body
            const saltRounds:number = 10;
            const salt:string = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(password, salt);

            const response:any[] = await conexion.query("UPDATE profile SET password = ? WHERE email = ?",[hash,email])
            
            if (response[0].affectedRows != 0) {
                res.json("successful update password");
            }else{
                res.json("update failed password");
            }

        } catch(error){
            res.json(error)
            console.log(error);
        }
    }

}

export const userManagement = new UserManagement(); 
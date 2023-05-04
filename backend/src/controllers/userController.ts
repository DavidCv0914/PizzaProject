import conexion from "../database/database";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request,Response,NextFunction } from "express";
import config from "../config";

class User {

    constructor(){
        dotenv.config();
    }

    public async createUser(req:Request, res:Response){
        try {
            let {email,name,surname,cellphone,password}=req.body
            let iconUser:string = "https://res.cloudinary.com/de2sdukuk/image/upload/v1682083366/usericon_eqm409.jpg"
            const saltRounds:number = 10;
            const salt:string = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(password, salt);
            
            const response:any[]=await conexion.query("SELECT email FROM admin WHERE email = ?",[email])
            const response2:any[]=await conexion.query("SELECT email FROM profile WHERE email = ?",[email])
        
            if (response[0].length > 0 || response2[0].length > 0) {
                res.json("Ya existe")
            }else{
                const result:any[]=await conexion.query("INSERT INTO profile(email, name, surname, cellphone, iconUser, password) VALUES(?,?,?,?,?,?)",[email,name,surname,cellphone,iconUser,hash])
                
                if (result[0].affectedRow != 0) { 
                    res.json("INSERT_OK");
                } else {
                    res.json("Error found");
                }
            }
            
        } catch (error) {
            res.json(error)
            console.log(error);
        }
        
    }

    public async createAdmin(req:Request,res:Response) {
        
        try {
            let {email,id,name,surname,cellphone,password}=req.body
            let iconUser:string = "https://res.cloudinary.com/de2sdukuk/image/upload/v1682083366/usericon_eqm409.jpg"
            const saltRounds:number = 10;
            const salt:string = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(password, salt);
            
            const response:any[]=await conexion.query("SELECT email FROM admin WHERE email = ?",[email])
            const response2:any[]=await conexion.query("SELECT email FROM profile WHERE email = ?",[email])

            if (response[0].length > 0 || response2[0].length > 0) {
                res.json("Ya existe")
            }else{
                const result:any[]=await conexion.query("INSERT INTO admin(email, id, name, surname, cellphone, iconUser, password) VALUES(?,?,?,?,?,?,?)",[email,id,name,surname,cellphone,iconUser,hash])
                
                if (result[0].affectedRow != 0) { 
                    res.json("INSERT_OK");
                } else {
                    res.json("Error found");
                }
            }
        } catch (error) {
            res.json(error);
            console.log(error);
            
        }

    }

    public async loginUser(req:Request, res:Response) {
        try {
            let {email,password} = req.body

            const validateEmail:any[]= await conexion.query("SELECT * FROM profile WHERE email = ?",[email]);
            const validateEmailAdmin:any[]= await conexion.query("SELECT * FROM admin WHERE email = ?",[email]);
            
            if (validateEmail[0].length > 0) {
                const passwordHash: string = validateEmail[0][0].password;
                const isValidPassword: boolean = await bcrypt.compare(password, passwordHash);
                
                if (!isValidPassword) {
                    res.json("Incorrect email or password");
                } else {
                    const token = jwt.sign({email},process.env.TOKEN_SECRET || "tokenSecret" ,{expiresIn:60*60*24})
                    res.header("token",token).json({data:"Login successful", rol:"user"});
                }
            }else if(validateEmailAdmin[0].length > 0) {
                const passwordHash: string = validateEmailAdmin[0][0].password;
                const isValidPassword: boolean = await bcrypt.compare(password, passwordHash);
                
                if (!isValidPassword) {
                    res.json("Incorrect email or password");
                } else {
                    const token = jwt.sign({email},process.env.TOKEN_SECRET || "tokenSecret" ,{expiresIn:60*60*24})
                    res.header("token",token).json({data:"Login successful", rol:"admin"});
                }
            }else {
                res.json("User does not exist")
            }

        } catch (error) {
            res.json(error)
            console.log(error);
        }
    }

    public async dataUser(req:Request, res:Response, next:NextFunction) {
        
        const token = req.header("token")
        
        if (token) {
            let emailVerify = jwt.verify(token,process.env.TOKEN_SECRET || config.TOKEN_SECRET);
            let {email}:any = emailVerify
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

}

export const user = new User();
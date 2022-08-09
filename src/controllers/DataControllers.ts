import {Request, Response} from 'express';
import {connect} from "../db/mysqli";
import bcrypt from "bcrypt"
import nodemailer from "nodemailer"
import {uploadImage} from "../utils/cloudinary"

import fsEstract from "fs-extra"
class DataControllers
{
    public async  postData(req: Request, res: Response) {

        try {
        const { email, password } = req.body;
            
        const conenct = await connect();
        conenct.query("SELECT * FROM usuario", (error, rows) => {
                for (let i = 0; i < rows.length; i++) {
                    if (rows[i].correo == email) {
                        return res.send("EXISTEMAIL")
                    } 
            }
            const rangeRounds = 10;
            const encriptar = bcrypt.genSaltSync(rangeRounds);
            const hasEncriptamiento = bcrypt.hashSync(password, encriptar)
            conenct.query("INSERT INTO usuario(correo,password) VALUES(?, ?)",
            [email, hasEncriptamiento], async (error, rows) => {
            if (rows) {
          return  res.send("SAVEDATA")
          } else {
               return res.send("ERRDATA")
            }                        
              })        
        })
        } catch (error) {
            return res.sendStatus(301).json({message: error})
        }
    }

    public async loginAuthentication(req: Request, res: Response) {
        
        try {
        const { email, password } = req.body;   
        
        const conn = await connect();
        conn.query("SELECT password, id FROM usuario WHERE correo = ?", [email], async (error, rows) => {
            if (error) {

            console.log("el usuario no existe", error);
             return res.send("ERRORDATALOGIN");
              
            } 
            if (rows.length > 0) {
                    
                    const passwAuthent = await rows[0].password;
                    const passw =  await bcrypt.compare(password, passwAuthent);
                if (passw) {

               let sessions = req.session!;
                    sessions.idUser = rows[0].id;
                  
                   
                    return  res.send("LOGIN")
                  }
                } 
                return res.send("ERRORDATALOGIN")

        })
        } catch (error) {
            console.log("error dane",error)
            
        }
        
    }

    public async updateData(req: Request, res: Response) {


        try {
                 const {nombre, apellido, telefono, coreo, edad} = req.body;
            res.send("receved")
            console.log("receved", req.body);
            
             } catch (error) {
                
             }
         
        
            
        }

    

}
export const dataControllers = new DataControllers()
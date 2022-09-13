import { Request, Response } from "express";
import { conexion, Conexion } from "../class/Conexion";
import bcrypt from "bcrypt";
import { uploadImage } from "../utils/cloudinary";
import { deleteImage } from "../utils/cloudinary";
import {  uploadPublicImagen } from "../utils/cloudinary";
import {Post} from "../interfaces/Post";
import fs from "fs-extra";
class DataControllers extends Conexion { 

 

    public   async postData(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const conenct = await conexion.connect();
      conenct.query("SELECT * FROM usuario", (error, rows) => {
        for (let i = 0; i < rows.length; i++) {
          if (rows[i].correo == email) {
            return res.send("EXISTEMAIL");
          }
        }
        const rangeRounds = 10;
        const encriptar = bcrypt.genSaltSync(rangeRounds);
        const hasEncriptamiento = bcrypt.hashSync(password, encriptar);
        conenct.query(
          "INSERT INTO usuario(correo,password) VALUES(?, ?)",
          [email, hasEncriptamiento],
          async (error, rows) => {
            if (rows) {
              return res.send("SAVEDATA");
            } else {
              return res.send("ERRDATA");
            }
          }
        );
      });
    } catch (error) {
      return res.sendStatus(301).json({ message: error });
    }
  }

  public  async loginAuthentication(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const conn = await conexion.connect();
      conn.query(
        "SELECT password, id FROM usuario WHERE correo = ?",
        [email],
        async (error, rows) => {
          if (error) {
            console.log("el usuario no existe", error);
            return res.send("ERRORDATALOGIN");
          }
          if (rows.length > 0) {
            const passwAuthent = await rows[0].password;
            const passw = await bcrypt.compare(password, passwAuthent);         
            if (passw) {
              let sessions = req.session!;
              sessions.idUser = rows[0].id;

              return res.send("LOGIN");
            }
          }
          return res.send("ERRORDATALOGIN");
        }
      );
    } catch (error) {
      console.log("error dane", error);
    }
  }

  public async updateData(req: Request, res: Response) {
    try {
      let session = req.session!;
      if (session?.idUser) {
        
        let idUser = session.idUser;
        const conn = await conexion.connect();
        const { nombre, apellido, telefono, correo, edad } = req.body;
        conn.query(
          "SELECT * FROM usuario WHERE id = ?",
          [idUser],
          async (error, rows) => {
            if (error) {
              return res.send("ERRORUpdate");
              
            }
            if (rows) {
              const idImage = rows[0].image_id;
              deleteImage(idImage);
              const resultImage = await uploadImage(req.file?.path);
              const public_id = resultImage.public_id;
              const url = resultImage.url;
              conn.query(
                `UPDATE usuario SET name = ?, apellido = ?, telefono = ?,
                correo = ?, edad = ?, image_id = ?, url_image = ? WHERE id = ?`,
                [
                  nombre,
                  apellido,
                  telefono,
                  correo,
                  edad,
                  public_id,
                  url,
                  idUser,
                ],
                async (error, rows) => {
                  if (rows) {
                  
                    return  res.redirect("/perfill");
                  } else {
                    return res.send("ERRORUpdate");
                  }
                }
              );
            }
           
          }
        );
      }
    } catch (error) {
      return  res.json({ message: error });
    }
  }

  public logoutCount(req: Request, res: Response) {
    req.session!.destroy(() => {
      return res.redirect("/");
    });
  }

  public async newPasswordData(req: Request, res: Response) {
    try {
      const { password, email } = req.body;
      /*const rangeRounds = 10;
      const encriptar =await bcrypt.genSalt(rangeRounds);
      const hasEncriptamiento = await bcrypt.hash(password, encriptar);
      */
      console.log(req.body, req.params);
      res.send("Hola")
      
      
    } catch (error) {
      return res.sendStatus(301).json({ message: error });
    }
  }
  public async newPublication(req: Request, res: Response) {
    try {
      let session = req.session!;
      
      if (session?.idUser) {
        
        const conn = await conexion.connect();
        const resultImagen = await uploadPublicImagen(req.file?.path);
        const public_id = resultImagen.public_id;
        const url = resultImagen.url;
        const { nombreC, artistaC, boletasC, realizacionC, precioC, fechaC, horaC } = req.body;
        
        conn.query(`INSERT INTO publicaciones(idUsuario,nombreC, artistaC, numeroBoleta, realizacionC, precioC, fechaC, horaC, url_image, id_image)
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?) `,
          [session.idUser, nombreC, artistaC, boletasC, realizacionC, precioC, fechaC, horaC, url, public_id],
          (error, rows) => {
            if (error) {
              
              console.log(error);
              return res.send("ERRORUpdate");
              
            }
            if (rows) {
              return res.redirect("/publicaciones");
            } else {
              return res.send("ERRDATA");
            }
        })

      } else {
        return res.redirect("/login");
      }
    } catch (error) {
      return res.sendStatus(301).json({ message: error });
    }
  }

  public async publicationDataUser(req: Request, res: Response) {

       let session = req.session!;
      if (session.idUser) {
         
         let idUser = session.idUser;      
         const conn = await conexion.connect();
         conn.query("SELECT * FROM publicaciones WHERE idUsuario = ?", [idUser], (error, rows) => {
               if (error) {
                  
                  return res.json({data: rows});
               }
            if (rows.length > 0) {
                
                  return res.json({data: rows});
                } else {
              return res.json({message: error});
              
            }

          })
      }else{

         res.redirect("/login");
      }
  }

  
  
  }
  
  
  

export const dataControllers = new DataControllers();

import { Request, Response } from "express";
import { connect } from "../db/mysqli";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import { uploadImage } from "../utils/cloudinary";
import { deleteImage } from "../utils/cloudinary";
import {Post} from "../interfaces/Post";
import fs from "fs-extra";
class DataControllers {
  public async postData(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const conenct = await connect();
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

  public async loginAuthentication(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const conn = await connect();
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
        const conn = await connect();
        const { nombre, apellido, telefono, correo, edad } = req.body;

        conn.query(
          "SELECT * FROM usuario WHERE id = ?",
          [idUser],
          async (error, rows) => {
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
                  req.session!.idUser,
                ],
                async (error, rows) => {
                  if (rows) {
                    await fs.unlink(req.file?.path);
                    return res.redirect("/perfil");
                  } else {
                    return res.send("ERRORUpdate");
                  }
                }
              );
            }
            if (error) {
              console.log("errorLLLLLLLLL", error);
            }
          }
        );
      }
    } catch (error) {
      return res.sendStatus(301).json({ message: error });
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
}
export const dataControllers = new DataControllers();

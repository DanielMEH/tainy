import { conexion, Conexion} from "../class/Conexion";
import { Person } from "../class/Person";
import { Request, Response } from "express";

import bcrypt from "bcrypt";
export   class User extends Person

{
    private readonly edad: string | any;
    private readonly apellido: string | any;
    private readonly url_Imagen: string | any;
    private readonly numero: string | any;
    private readonly identificacion: string | any;
    constructor(email: string, password: string)
    {
        super(email, password)

    }

   async   RegisterUsuario(emailUser: string, passwordUser: string) {   
        try {
      const conenct = await conexion.connect();
      conenct.query("SELECT * FROM usuario", (error, rows) => {
        for (let i = 0; i < rows.length; i++) {
          if (rows[i].correo == emailUser) {
            return "EXISTEMAIL";
          }
        }
        const rangeRounds = 10;
        const encriptar = bcrypt.genSaltSync(rangeRounds);
        const hasEncriptamiento = bcrypt.hashSync(passwordUser, encriptar);
        conenct.query(
          "INSERT INTO usuario(correo,password) VALUES(?, ?)",
          [emailUser, hasEncriptamiento],
          async (error, rows) => {
            if (rows) {
              return "SAVEDATA";
            } else {
              return "ERRDATA";
            }
          }
        );
      });
    } catch (error) {
      return error;
    }
        
    }
    
    
}

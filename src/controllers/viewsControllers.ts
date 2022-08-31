import {Request, Response} from 'express';
import {connect} from "../db/mysqli";

 class Indexviews 
{
   
    public  userVista(req: Request, res: Response): void {
    res.render("viwsUser/index");
    } 

   public async userPerfil(req: Request, res: Response) {

      let session = req.session!;
      if (session.idUser) {
         let idUser = session.idUser;      
         const conn = await connect();
         conn.query("SELECT * FROM usuario WHERE id = ?", [idUser], (error, rows) => {
               if (error) {
                  
                  return res.send("ERROSDB");
               }
            if (rows.length > 0) {
                return  res.render("viwsUser/perfil", {user: rows[0]});
            }

          })
      }else{

         res.redirect("/login");
      }
         
      };
    
   public userPublicacion(req: Request, res: Response): void {

    res.send("<h1>✔<h1>")
    }
    
   public UseLogin(req: Request, res: Response): void {
    
       res.render("viwsUser/login");
    }
    
   public async recoveryUser(req: Request, res: Response) {
      
      try {
         
       const conn = await connect();
      conn.query("SELECT * FROM usuario WHERE correo = ?", [req.params.email],
         (error, rows) => {
            if (error) {
              
               return res.json({message:"ERROR_DATAMYSQLI"});
            }
            if (rows.length > 0) {
               return res.json({message: "DATA_SUCCESSFUL"});
             } 
            return res.json({ message: "ERROR_DATAMYSQLI" });   
            
       })
      } catch (error) {
          return res.sendStatus(301).json({ message: error });
      }
        
   }
      
    public recoveryPasswordUser(req: Request, res: Response) {
       
       res.render("viwsUser/authentication/recoverypassword");
       
    }
    public authenticationRecovery(req: Request, res: Response): void {
      res.render("viwsUser/authentication/autenthication");
    }
      public viewsDasboard(req: Request, res: Response): void {
      
        res.render("viwsUser/dasboard");
    }
    public async perfilUsuario(req: Request, res: Response) {
         
       res.render("viwsUser/perfil");
    }
     public async perfilUsuarioData(req: Request, res: Response) {
         
        try {
          
           let session = req.session!;
         
           if (session?.idUser) {
             
              let idUser = session.idUser;
          const conn = await connect();
      conn.query("SELECT * FROM usuario WHERE id = ?", [idUser],
         (error, rows) => {
            if (error) {
              
               return res.json({message:"ERROR_DATAMYSQLI"});
            }
            if (rows.length > 0) {
               return res.json({data: rows});
             } 
            return res.json({ message: "ERROR_DATAMYSQLI" });   
            
       })
      }
      } catch (error) {
          return res.sendStatus(301).json({ message: error });
      }
    }
    public  async publicacionesUsuario(req: Request, res: Response) {
         let session = req.session!;
      if (session.idUser) {
         res.render("viwsUser/publicaciones");
         
      }else{

         res.redirect("/login");
      }
    }
    public publicacionesUsuarioDestacadas(req: Request, res: Response): void {
          
          res.render("viwsUser/publicDestacadas");
    }
    
}

export const  indexviews  = new Indexviews();

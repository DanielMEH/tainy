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
                  
                  return res.send("ERROSDB   ");
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
    
   public publicaionViews(req: Request, res:Response){
      
    }
    
}

export const  indexviews  = new Indexviews();

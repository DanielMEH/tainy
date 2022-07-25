import {Request, Response} from 'express';


 class Indexviews 
{
   

 userVista(req: Request, res: Response): void{
    res.render("viwsUser/index");
    
    } 

 public userPerfil(req: Request, res: Response): void{

    res.send("<h1>User prfil</h1>")

    }

 public userPublicacion(req: Request, res: Response): void {

    res.send("<h1>✔<h1>")
 }
    
}

export const  indexviews  = new Indexviews();

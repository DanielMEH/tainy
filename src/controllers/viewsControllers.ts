import {Request, Response} from 'express';


 class Indexviews 
{
   

 public userVista(req: Request, res: Response): void {

    res.send("<h1>Hola mundo</h1>");
    
    }

 public userPerfil(req: Request, res: Response): void{

    res.send("<h1>User prfil</h1>")

    }

 public userPublicacion(req: Request, res: Response): void {

    res.send("<h1><h1>")
 }
    
}

export const  indexviews  = new Indexviews();

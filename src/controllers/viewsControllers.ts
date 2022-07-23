import {Request, Response} from 'express';


 class Indexviews 
{

 public userVista(req: Request, res: Response): void {

    res.send("<h1>Hola mundo</h1>");
    }
    
}

export const  indexviews  = new Indexviews();

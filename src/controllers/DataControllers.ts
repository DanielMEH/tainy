import {Request, Response} from 'express';


class DataControllers
{
    public postData(req: Request, res: Response): void {

        res.send("hello world")
    }

}


export const dataControllers = new DataControllers()
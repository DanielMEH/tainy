import { createPool } from "mysql";

 export class Conexion 
{
    public readonly host:string | any = "localhost";
    private readonly user:string | any = "root";
    private readonly password:string | any = "";
    protected readonly database:string | any  = "conciertos";
    private readonly charset:string | any  = "utf8";
    private readonly port:Number | string |any = 3306;

     public async connect() {
   const conenct = await createPool({
        
            host: this.host, 
            user: this.user,
            password: this.password,
            database: this.database,
            charset: this.charset,
            port: this.port
        })
        return conenct;
}
}

export const conexion = new Conexion() 



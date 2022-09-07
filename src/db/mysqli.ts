import { createPool} from "mysql";

export async function connect() {
    
   const conenct = await createPool({
        
            host: "localhost", 
            user: "root",
            password: "",
            database: "conciertos",
            charset: "utf8"
            
        })
        return conenct;
       
}
    

    



 
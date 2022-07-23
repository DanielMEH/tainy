import express from 'express';
import path from 'path';
import router from './routers/router';
import morgan from 'morgan';
import * as dotenv from "dotenv"
const appServer: express.Application = express();

dotenv.config();
appServer.set("views", path.join(__dirname, "views"));
appServer.set("view engine", "ejs");
appServer.use(morgan("dev"))
appServer.use(express.json());
appServer.use(express.urlencoded({ extended: true }));
appServer.use(express.static(path.join(__dirname, 'public')));
appServer.use(router)

appServer.listen(process.env.PORT, (): void => {

    console.log(`🧩 Server is running on port ${ process.env.PORT} ❤️`);   


})
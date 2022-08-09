import express from 'express';
import path from 'path';
import router from './routers/router';
import morgan from 'morgan';
import sessions from "express-session";
import cookieParser from "cookie-parser";
import * as dotenv from "dotenv"
import cors from "cors";
const appServer: express.Application = express();

dotenv.config();
const timeEXp = 1000 * 60 * 60 * 24;
appServer.use(
  sessions({
    secret: "rfghf66a76ythggi87au7td",
    saveUninitialized: true,
    cookie: { maxAge: timeEXp },
    resave: false,
  })
);

appServer?.use(cors());
appServer?.use(cookieParser());
appServer?.set("views", path.join(__dirname, "views"));
appServer?.set("view engine", "ejs");
appServer?.use(morgan("dev"))
appServer?.use(express.json());
appServer?.use(express.urlencoded({ extended: true }));
appServer?.use(express.static(path.join(__dirname, 'public')));
appServer.use(router)

appServer.listen(process.env.PORT, (): void => {

    console.log(`✔ Server is running on port ${ process.env.PORT} `);   
})
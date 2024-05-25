import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import sequelize from "./Config/database";
import { default as routes } from './Routes/index';
import "./Models";

const server = express();
server.use(cors({
    origin: process.env.ORIGIN
}));


server.use(bodyParser.json());

server.use(routes);

(async function startServer(){

    try {
        await sequelize.sync({force:false});
        server.listen(process.env.PORT, () => console.log('server is running on 4000'))
    } 
    catch (error) {
        console.log(error as string);
    }
})()

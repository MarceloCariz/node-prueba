import express from "express";
import conectarDB from "./config/db.js";
import dotenv from 'dotenv'
import examenRoutes from './routes/examenRoutes.js'
import cors from 'cors'
const app  = express();

app.use(express.json());
dotenv.config();
conectarDB();

const whitelist =[process.env.FRONTED_URL];

const corsOptions ={
    origin: function(origin, callback){
        if(whitelist.includes(origin)){
            //puede consultar la api
            callback(null, true)
        }else{
            callback(new Error("Error de cors"))
        }
    }
}

app.use(cors(corsOptions))
app.use('/api/examenes',examenRoutes)

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto: ${PORT}`)
})
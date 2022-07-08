import { response } from "express";
import Examen from "../models/Examen.js"
// import cors from 'cors';

const obtenerExamenes = async (req, resp)=>{
    const {rut} = req.params;
    const examenes = await  Examen.find().where('RUT').equals(rut);
    resp.json(examenes)
}


export { obtenerExamenes}
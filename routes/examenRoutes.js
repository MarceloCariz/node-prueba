import express from "express";
import { obtenerExamenes } from "../controllers/examenController.js";



const router = express.Router();


router.get('/:rut', obtenerExamenes)





export default router;
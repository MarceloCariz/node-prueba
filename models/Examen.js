import mongoose from "mongoose";

const ExamenesSchema = mongoose.Schema({
    RUT:{
        type: String
    },
    NOMBRE_DE_ASIGNATURA:{
        type: String
    },
    SECCION:{
        type: String
    },
    FECHA_EXAMENES:{
        type: String
    },
    DOCENTE_QUE_TOMA_EXAMEN:{
        type: String
    },
    HORA_INICIO:{
        type: String
    },
    SALA:{
        type: String
    }
})
const Examen = mongoose.model('Examenes', ExamenesSchema);


export default Examen;
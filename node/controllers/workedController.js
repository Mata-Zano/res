import UserModel from "../models/LoginModel.js";
import workerModel from "../models/workerModel.js";

// Metodos para el crud


// Mostrar todos los usuarios
export const getWorkerAll = async (req, res)=>{
    try {
        const users = await workerModel.findAll()
        res.json(users)
    } catch (error) {
        res.json({mensaje: error.mensaje})
    }
}
// Mostrar un  usuarios
export const getWorker = async (req, res) =>{
    try {
        const user = await workerModel.findAll({
            where :{ rut: req.params.rut,
            nombre_completo: req.query.contrato,
            hh: req.query.hh}
        })
        if (user.length > 0) {
            res.json(user[0]);
        } else {
            res.json({mensaje: "No se encontró un Trabajador con ese Nombre o Rut."});
        }
    } catch (error) {
        res.json({mensaje: error.message})
    }
}


// Crear un registro
export const createWorker = async (req, res) =>{
    try {
        await workerModel.create(req.body)
        res.json({
            "mensaje":"Trabajador creado correctamente"
        })
    } catch (error) {
        res.json({mensaje: error.mensaje})
    }
}
// Actualizar un registro 
export const updateWorker = async (req, res) =>{
    try {
        await workerModel.update(req.body,{
            where :{ rut: req.params.rut }
        })
        res.json({
            "mensaje":"Usuario modificado correctamente"
        })
    } catch (error) {
        res.json({mensaje: error.mensaje})
    }
}
// Eliminar un registro 

export const deleteWorker = async(req, res) =>{
    try {
        await workerModel.destroy({
            where :{ rut: req.params.rut }
        })
        res.json({
            "mensaje":"Tabajador eliminado correctamente"
        })
    } catch (error) {
        res.json({mensaje: error.mensaje})
    }
} 
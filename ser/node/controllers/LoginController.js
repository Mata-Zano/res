import UserModel from "../models/LoginModel.js";
// Metodos para el crud


// Mostrar todos los usuarios
export const getAllUsers = async (req, res)=>{
    try {
        const users = await UserModel.findAll()
        res.json(users)
    } catch (error) {
        res.json({mensaje: error.mensaje})
    }
}
// Mostrar un  usuarios
export const getUser = async (req, res) =>{
    try {
        const user = await UserModel.findAll({
            where :{ id: req.params.id}
        })
        res.json(user[0])
    } catch (error) {
        res.json({mensaje: error.mensaje})
    }
}

// Crear un registro
export const createUser = async (req, res) =>{
    try {
        await UserModel.create(req.body)
        res.json({
            "mensaje":"Usuario creado correctamente"
        })
    } catch (error) {
        res.json({mensaje: error.mensaje})
    }
}
// Actualizar un registro 
export const updateUser = async (req, res) =>{
    try {
        await UserModel.update(req.body,{
            where :{ id: req.params.id }
        })
        res.json({
            "mensaje":"Usuario modificado correctamente"
        })
    } catch (error) {
        res.json({mensaje: error.mensaje})
    }
}
// Eliminar un registro 

export const deleteUser = async(req, res) =>{
    try {
        await UserModel.destroy({
            where :{ id: req.params.id }
        })
        res.json({
            "mensaje":"Usuario eliminado correctamente"
        })
    } catch (error) {
        res.json({mensaje: error.mensaje})
    }
} 
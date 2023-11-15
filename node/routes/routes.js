import express from 'express'
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controllers/LoginController.js'
import { createWorker, deleteWorker, getWorker, getWorkerAll, updateWorker } from '../controllers/workedController.js'
const router = express.Router()

// Obtener  todos los resultados
router.get('/', getAllUsers)
// Obtener resultados por id 
router.get('/:rut', getUser)
// Crear un usuario
router.post('/', createUser)
// Actualizar usuario
router.put('/:id', updateUser)
// Eliminar
router.delete('/:id', deleteUser)


export default router
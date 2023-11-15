import express from 'express'
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controllers/LoginController.js'
import { createWorker, deleteWorker, getWorker, getWorkerAll, updateWorker } from '../controllers/workedController.js'
const routerWorker = express.Router()

// TRABAJADORES
// Obtener  todos los resultados
routerWorker.get('/', getWorkerAll)
// Obtener resultados por id 
routerWorker.get('/:rut', getWorker)
// Crear un usuario
routerWorker.post('/', createWorker)
// Actualizar usuario
routerWorker.put('/:rut', updateWorker)
// Eliminar
routerWorker.delete('/:rut', deleteWorker)

export default routerWorker
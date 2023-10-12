import  express  from 'express';
import cors from 'cors'
// importamos la conexión a la DB
import db from './database/db.js'
// importamos el enrutador
import userRoutes from './routes/routes.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/users',userRoutes)

try {
    await db.authenticate()
    console.log( 'conexión exitosa a la DB ')
} catch (error) {
    console.log( `conexión Erronea a la DB : ${error}`)
    }
        // app.get('/',(req,res)=>{
        // res.send('HOLA MUNDO')
        // })
app.listen(8000,()=>{
    console.log('Server UP running in http://localhost:8000/')
})
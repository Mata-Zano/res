// importar coneccion bd
import db from "../database/db.js";

// importamos sequelize
import { DataTypes } from "sequelize";

const workerModel = db.define('trabajadores',{
    rut : { type : DataTypes.STRING },
    nombre_completo : { type : DataTypes.STRING },
    hh :{type: DataTypes.INTEGER}

})

export default workerModel
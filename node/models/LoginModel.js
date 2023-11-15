// importar coneccion bd
import db from "../database/db.js";

// importamos sequelize
import { DataTypes } from "sequelize";

const UserModel = db.define('users',{
    rut : { type : DataTypes.STRING },
    contrato : { type : DataTypes.STRING },

})

export default UserModel
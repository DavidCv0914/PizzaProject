import { createPool } from "mysql2/promise";
import config from "../config";

const conexion = createPool({
    host:config.HOST,
    port:config.PORT,
    user:config.USER,
    password:config.PASSWORD,
    database:config.DATABASE
})

export default conexion;
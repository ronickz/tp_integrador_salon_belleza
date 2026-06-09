import express from "express"
import environments from "./config/environments.js"
import connection from "./database/db.js";
import cors from "cors"

const app = express();

app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hola desde la api');
})


app.get('/api/productos',async(req,res)=>{
    try {
        const sql = "SELECT * FROM productos";
        const [rows] = await connection.query(sql);

        res.status(200).json({
            payload:rows
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
})


app.listen(environments.port,()=>{
    console.log(`Corriendo servidor en puerto ${environments.port}`);
})
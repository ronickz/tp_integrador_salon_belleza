import express from "express";
import environments from "./src/api/config/environments.js";
import {join, __dirname } from "./src/api/utils/index.js"

import connection from "./src/api/database/db.js";
import { setupDatabase } from "./src/api/database/setup.js";


import cors from "cors";
import { loggerURL } from "./src/api/middlewares/index.js";


import { productRoutes, salesRoutes, viewRoutes } from "./src/api/routes/index.js";

const app = express();


// middlwares

app.use(loggerURL);
app.use(cors());

app.use(express.json());
// Transforma los datos del form en objetos
app.use(express.urlencoded({
    extended: true
}))
// Todo lo que se ve en el sig directorio, se sirve directamente al navegador como archivo estatico
// Transformando backend/src/public/css/styles.css
// En http://localhost:3000/css/styles.css
app.use(express.static(join(__dirname,"src/public")))

// Configuracion para saber donde tiene que buscar las vistas
app.set("view engine","ejs")
app.set("views",join(__dirname,"src/views"))

// routes

app.get('/',(req,res)=>{
    res.send('Hola desde la api');
});

app.use("/api", productRoutes);
app.use("/api", salesRoutes);
app.use("/dashboard", viewRoutes);


setupDatabase(connection)
    .then(() => {
        app.listen(environments.port,()=>{
            console.log(`Corriendo servidor en puerto ${environments.port}`);
        });
    })
    .catch((error) => {
        console.log("Error preparando la database:", error.message);
    });

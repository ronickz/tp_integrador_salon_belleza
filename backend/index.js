import express from "express";
import environments from "./src/api/config/environments.js";

import connection from "./src/api/database/db.js";
import { setupDatabase } from "./src/api/database/setup.js";


import cors from "cors";
import { loggerURL } from "./src/api/middlewares/index.js";


import { productRoutes, salesRoutes } from "./src/api/routes/index.js";

const app = express();


// middlwares

app.use(loggerURL);
app.use(cors());

app.use(express.json());
// Transforma los datos del form en objetos
app.use(express.urlencoded({
    extended: true
}))


// routes

app.get('/',(req,res)=>{
    res.send('Hola desde la api');
});

app.use("/api", productRoutes);
app.use("/api", salesRoutes);


setupDatabase(connection)
    .then(() => {
        app.listen(environments.port,()=>{
            console.log(`Corriendo servidor en puerto ${environments.port}`);
        });
    })
    .catch((error) => {
        console.log("Error preparando la database:", error.message);
    });

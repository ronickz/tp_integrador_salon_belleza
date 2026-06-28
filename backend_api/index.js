import express from "express";
import environments from "./src/config/environments.js";

import connection from "./src/database/db.js";
import { setupDatabase } from "./src/database/setup.js";


import cors from "cors";
import { loggerURL } from "./src/middlewares/index.js";


import { productRoutes, salesRoutes } from "./src/routes/index.js";

const app = express();


// middlwares

app.use(loggerURL);
app.use(cors());
app.use(express.json());



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

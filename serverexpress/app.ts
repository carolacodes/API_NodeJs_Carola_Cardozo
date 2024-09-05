import express from 'express';
        //instancia - tipos - de express

import dbConnect from "./db/dbConnect";

import { config } from "dotenv";
import router from "./routes";

config(); //ejecutamos dotenv

const PORT = parseInt(process.env.PORT ?? "6000", 10)
const HOST = process.env.HOST ?? "localhost";

const app = express();

app.use(express.json());

app.use("/api", router);

dbConnect();

app.listen(PORT, HOST, () => {
    console.log(`Server is running in http://${HOST}:${PORT}`);
})


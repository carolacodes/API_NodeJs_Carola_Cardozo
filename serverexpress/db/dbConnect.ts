import { config } from "dotenv"; //nos traemos las variables de entorno privadas
import mongoose from 'mongoose';

config(); //ejecutamos

export default async function dbConnect(){ //es por DEFAULT para que sea la funcion que llame cuando importamos en otros archivos 
    if(mongoose.connection.readyState >= 1) return; //(readyState sig conexion activa)
    try {
        //dbURI no deberia estar aca sino en una VE por seguridad
        const dbURI = process.env.DB_URI!//traemos el db_uri del archivo env | con el signo (!)decimos que nunca va a ser undefined
        await mongoose.connect(dbURI);
        console.log('Database connected 🥳');
    }catch(error){
        console.log("Error connecting to the database");
    }
}
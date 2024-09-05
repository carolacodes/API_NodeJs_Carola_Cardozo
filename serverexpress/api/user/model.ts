import { Schema, model } from 'mongoose'; //mongoose nos ayuda a crear esquemas->(tablas) y modelos
//Schema: son clases, que una vez instanciados podemos acceder a los datos y metodos
import bcrypt from "bcrypt";

const UserSchema = new Schema({ //realizamos un esquema de tipo usuario
    //creamos las propiedades de esta entidad
    first_name: { //caracteristicas de las prop del campo del objeto
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        requiered: true,
    },
    user_name: {
        type: String,
        requiered: true,
        unique: true,
    },
    email: {
        type: String,
        requiered: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address"], //indica los caracteres que debe cumplir, en caso de que no lo cumpla manda una mensaje
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin", "comprador", "vendedor"],
        default: "comprador",
    },
    avatar: {
        type: String,
        default: "",
    }, //is_admin eliminar
    is_admin: {
        type: Boolean,
        default: false,
    }
});

UserSchema.pre("save", async function (next) { //realizamos una funcion antes del guardado
    try {
        const hashedPassword = await bcrypt.hash(this.password ?? "", 10);//10 indica la long del SALT del HASH
        this.password = hashedPassword; //en el objeto password guardamos la contraseña hasheada
        next();
    }catch(error){
        console.log(error)
    }
})

//generamos el modelo, instanciamos con el metodo model de moongose
const User = model("User", UserSchema);
        //"nombre del documento", referencia para poder difinir el modelo(UserScrema)
export default User; //exportamos para poder usarlo en los controladores
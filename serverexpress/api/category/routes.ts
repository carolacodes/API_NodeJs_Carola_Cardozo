import express from "express";
import { adminRoutes } from "../../middlewares/adminRoutes";
import { categoryController } from "./controller";

const { getCategories, createCategory, updateCategory, deleteCategory} = categoryController;

const categoryRouter = express.Router();

categoryRouter.get("/", getCategories);// no requiere que sea admin para mostrar las categorias

categoryRouter.use(adminRoutes); //que solo las sig rutas pueden tener acceso a las rutas de category si es admin
categoryRouter.post("/addCategory", createCategory);
categoryRouter.put("/updateCategory/:id", updateCategory);
categoryRouter.delete("deleteCategory/:id", deleteCategory);

export default categoryRouter;
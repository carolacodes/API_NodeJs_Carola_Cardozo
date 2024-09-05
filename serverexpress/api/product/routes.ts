import express from "express";
import { productController } from "./controller";

const productRouter = express.Router();

const {getProducts, getProductById, createProduct, deleteProduct, editProduct} = productController; //importamos los controladores

productRouter.get("/", getProducts);
productRouter.get("/:id", getProductById);
productRouter.post("/register", createProduct);
productRouter.delete("/deleteUser/:id", deleteProduct);
productRouter.put("editUser/:id", editProduct);

export default productRouter;
import express from "express";
import { orderController } from "./controller";

const orderRouter = express.Router();
const {createOrder, getOrdersByUserId, getOrderById} = orderController;

orderRouter.get("/:id", getOrderById); //buscamos una sola order
orderRouter.get("/orderHistory/:id", getOrdersByUserId); //historial de compras de usuario
orderRouter.post("/confirmOrder", createOrder); //confirmamos un carrito

export default orderRouter;
import express from "express";
import { authRoutes } from "../../middlewares/authRoutes";
import { orderController } from "../orderHistory/controller";
import { cartController } from "./controller";

//const {createOrder} = orderController

const {addCart, getCarts, updateCart, deleteCart, confirmCart} = cartController

const cartRouter = express.Router();

cartRouter.use(authRoutes);

cartRouter.get("/getCarts", getCarts);
//cartRouter.get("/getCart/:id", (req, res) => {});
cartRouter.post("/addCart", addCart);
cartRouter.post("/confirmCart", confirmCart);
cartRouter.put("/updateCart/:id", updateCart);
cartRouter.delete("deleteCart/:id", deleteCart);

export default cartRouter;
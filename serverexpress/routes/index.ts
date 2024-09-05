import express from "express";
import cartRouter from "../api/cart/routes";
import categoryRouter from "../api/category/routes";
import orderRouter from "../api/orderHistory/routes";
import productRouter from "../api/product/routes";
import userRouter from "../api/user/routes";

const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/cart", cartRouter);
router.use("/category", categoryRouter)
router.use("/order", orderRouter)

export default router;



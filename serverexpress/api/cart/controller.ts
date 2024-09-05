import { Request, Response } from "express";
import { cartService } from "./service";
import { orderService } from "../orderHistory/service";

const { createOrder } = orderService

const { addCart, getCarts, updateCart, deleteCart} = cartService;

class CartController {
    async addCart(req: Request, res: Response) {
        const cart = req.body;
        try {
            const newCart = await addCart(cart);
            return res.status(200).json(newCart);
        } catch (error) {
            return res.status(500).json({error});
        }
    }

    async getCarts(req: Request, res: Response) {
        try {
            const carts = await getCarts();
            return res.status(200).json(carts);
        } catch (error) {
            return res.status(500).json({error});
        }
    }

    async updateCart(req: Request, res: Response){
        try{
            const cartId = req.params.id
            const cartBody = req.body
            const cartUpdate = await updateCart(cartId, cartBody)
            return res.status(200).json(cartUpdate)
        } catch (error) {
            return res.status(500).json({error});
        }
    }

    async deleteCart(req: Request, res: Response){
        try {
            const cartId = req.params.id
            const cartBody = req.body
            const cartUpdate = await deleteCart(cartId, cartBody)
            return res.status(200).json(cartUpdate)
        } catch (error){
            return res.status(500).json({error});
        }
    }

    async confirmCart(req: Request, res: Response){
        try {
            const cart = req.body
            const newOrder = await createOrder(cart)
            return res.status(200).json(newOrder)
        } catch (error) {
            return res.status(500).json({error});
        }
    }
}

export const cartController = new CartController();
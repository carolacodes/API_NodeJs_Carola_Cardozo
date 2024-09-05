import { IOrder } from "./types";
import { orderService } from "./service";
import { Request, Response, response } from "express";

const {createOrder, getOrdersByUserId, getOrderById} = orderService;

class OrderController {
    async getOrdersByUserId(req: Request, res: Response){
        try{
            const user_id = req.params.user_id
            const orders = await orderService.getOrdersByUserId(user_id)
            res.status(200).json(orders);
        } catch (error) {
            res.status(400).json((error as Error).message);
        }
    }
    async getOrderById(req: Request, res: Response) {
        try{
            const user_id = req.params.user_id
            const order = await orderService.getOrderById(user_id)
            res.status(200).json(order);
        } catch (error) {
            res.status(400).json((error as Error).message);
        }
    }

    async createOrder(req: Request, res: Response) {
        try {
            const order: IOrder = req.body;
            const newOrder = await createOrder(order);
            res.status(200).json(newOrder);
        } catch (error) {
            res.status(400).json({message: (error as Error).message});
        }
        
    }
}

export const orderController = new OrderController();
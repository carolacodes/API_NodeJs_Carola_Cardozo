import Order from "./model";
import { IOrder } from "./types";

class OrderDao {
    async createOrder(order: IOrder){
        try {
            const newOrder = Order.create(order);
            return newOrder;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }

    async getOrderById(id: string) {
        try{
            const orderById = Order.findById(id);
            return orderById;
        } catch (error){
            throw Error((error as Error).message);
        }
    }
    async getOrdersByUserId(userId: string){
        try {
            const ordersByUserId = Order.findById({user_id: userId})
            return ordersByUserId
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
}

export const orderDao = new OrderDao();
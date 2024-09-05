//import { IProduct } from "../../types";
import { productDao } from "../product/dao";
import { orderDao } from "./dao";
import { IOrder, IOrderProduct } from "./types";
const {createOrder, getOrderById, getOrdersByUserId} = orderDao;
const {editProduct, getProductById} = productDao;

class OrderService {
    async getOrdersByUserId(userId: string){
        try {
            const orderHistory = await getOrdersByUserId(userId);
            return orderHistory;
        } catch (error){
            throw Error((error as Error).message);
        }
    }

    async getOrderById(id: string){
        try {
            const order = await this.getOrderById(id);
            return order;
        } catch (error){
            throw Error((error as Error).message);
        }
    }

    async createOrder(order: IOrder){
        const { products } = order; //recibe un array de productos
        try {
            const newOrder = await createOrder(order);
            products.forEach(async (product: IOrderProduct) => {
                const productData = await getProductById(product.product_id)
                if(!productData){
                    throw Error("Product not found");
                }
                await editProduct(product.product_id, {
                    stock: productData.stock! - product.quantity!,
                });
            });
            return newOrder;
        } catch (error){
            throw Error((error as Error).message);
        }
    }
}

export const orderService = new OrderService();
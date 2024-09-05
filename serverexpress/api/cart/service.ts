import { ICart } from "../../types";
import { cartDao } from "./dao";

const {addCart, getCarts, updateCart, deleteCart} = cartDao

class CartService {
    async addCart(cart: ICart) {
        try {
            const newCart = await addCart(cart);
            return newCart;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }

    async getCarts() {
        try {
            const carts = await getCarts();
            return carts;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }

    async updateCart(id: string, cart: ICart){
        try {
            const cartUpdate = await updateCart(id, cart);
            return cartUpdate;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }

    async deleteCart(id: string, cart: ICart){
        try{
            const cartDelete = await deleteCart(id, cart)
            return cartDelete
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
}

export const cartService = new CartService();
import { ICart } from "../../types";
import Cart from "./model";

class CartDao {
    async addCart(cart: ICart) {
        try {
            const newCart = await Cart.create(cart);
            return newCart;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async getCarts() {
        try {
            const carts = await Cart.find()
            return carts
        } catch (error) {
            throw Error((error as Error).message);
        }
    }

    async updateCart(id: string, cart: ICart){
        try {
            const userCart = await Cart.findOne({ user_id: id}); //buscamos el usuario con el id
            if(userCart) {
                const updateCart = await Cart.findOneAndUpdate(userCart._id, cart, {new: true});
                return updateCart;
            }
        } catch (error) {
            throw Error((error as Error).message);
        }
    }

    async deleteCart(id: string, cart: ICart){
        try {
            const deleteCart = await Cart.findByIdAndDelete(cart);
            return deleteCart;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
}

export const cartDao = new CartDao();
import { Schema, model } from "mongoose";

const orderHistoryScheme = new Schema ({
        //array de carts p/ tener una instancia de comprar finalizadas existosas
        // carts: [
        //     {
        //         cart: {//array de referencias
        //             type: Schema.Types.ObjectId, //hacemos referencia atraves de su ID
        //             ref: "Cart",
        //             required: true,//required quiere decir que ese cart fue comprado (finalizado)
        //         },
        //     }
        // ],
        products: [
            {
                product_id: {
                    type: Schema.Types.ObjectId,
                    ref: "Product",
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                    default: 1,
                },
                sub_total: {
                    type: Number,
                    required: true,
                },
            },
        ],
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        total_price: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);



const Order = model("Order", orderHistoryScheme);
export default Order;
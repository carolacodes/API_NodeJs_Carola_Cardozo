import { Schema, model } from "mongoose";

const cartSchema = new Schema ({
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
        },
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
                }
            },
        ],
        total_price: {
            type: Number,
            require: true,
        },
        // created_at: {
        //     type: Date,
        //     default: Date.now,
        // },
        // expires_at: {
        //     type: Date,
        //     default: new Date().setDate(new Date().getDate() + 2),
        // },
    },
    { timestamps: true } //
);

cartSchema.index({ createdAt: 1}, {expireAfterSeconds: 60 * 60 * 24});

const Cart = model("Cart", cartSchema);

export default Cart;


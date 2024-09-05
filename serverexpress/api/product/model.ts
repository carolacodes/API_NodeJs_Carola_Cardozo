import { Schema, model } from 'mongoose';

const ProductScheme = new Schema ({
    name: {
        type: String,
        requiered: true,
    },
    description: {
        type: String,
        requiered: true,
    },
    price: {
        type: Number,
        requiered: true,
    },
    stock: {
        type: Number,
        requiered: true,
    },
    category_id: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        requeired: true,
    },
    salers_id: { //ident para buscar prod por vendedor
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    image: {
        type: String,
        default: "",
    },
    status: {
        type: Boolean,
        requiered: true,
    },
});

const Product = model("Product", ProductScheme);
export default Product;
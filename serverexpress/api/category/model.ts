import { Schema, model } from "mongoose";

const CategorySchema = new Schema ({
    name: {
        type: String,
        require: true,
    },
    // visible: {
    //     type: Boolean,
    //     default: true,
    // },
});

const Category = model("Category", CategorySchema);
export default Category;



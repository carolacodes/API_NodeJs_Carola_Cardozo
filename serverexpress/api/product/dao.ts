import { IProduct } from "../../types";
import Product from "./model";

class ProductDao {
    async getAllProducts(category: string | undefined, salersId: string | undefined, priceStart:number | undefined, priceEnd: number | undefined, sort: -1 | 1 | undefined, page: string, limit: string, keyword: string | undefined){
        try {
            const skip = (Number(page) - 1) * Number(limit);
            if(!sort) {
                const products = await Product.find(
                    {
                        stock: {$gt:0}, //traiga stock mayor que 0
                        ...(category ? {category} : {}),
                        ...(salersId ? {salersId} : {}),
                        ...(priceStart && priceEnd ? {price: { $gte: priceStart, $lte: priceEnd }} : {}),
                        ...(keyword ? {name: {$regex: keyword, $options: "i"}} : {}),
                    }
                ).sort(sort && {price: sort}).skip(skip).limit(Number(limit));
                return products;
            }
            //else {
            //     const products = await Product.find(
            //         {
            //             ...(category ? {category} : {}),
            //             ...(salersId ? {salersId} : {}),
            //             ...(priceStart && priceEnd ? {price: { $gte: priceStart, $lte: priceEnd }} : {}),
            //         }
            //     ).sort({price: sort});
            //     return products;
            // }
            
        }catch (error) {
            throw Error((error as Error).message);
        }
    }

    async editProduct(productId: string, product: Partial<IProduct>){
        try {
            const updateProduct = await Product.findByIdAndUpdate(productId, product, {new: true})
            return updateProduct;
        } catch (error){
            throw Error((error as Error).message);
        }
    }

    async getProductById(productId: string){
        try {
            const product = await Product.findById(productId);
            return product;
        } catch (error){
            throw Error((error as Error).message);
        }
    }

    async createProduct(product: IProduct){
        try {
            const productCreate = await Product.create(product)
            return productCreate
        } catch (error){
            throw Error((error as Error).message);
        }
    }

    async deleteProduct(id_product: string){
        try{
            const productDelete = await Product.findByIdAndDelete(id_product)
            return productDelete;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
}

export const productDao = new ProductDao();
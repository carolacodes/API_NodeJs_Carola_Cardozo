import { Request, Response } from "express";
import { productService } from "./service";
import { ISearchParams } from "./types";

const {getProducts, createProduct, deleteProduct, editProduct,  getProductById} = productService

class ProductController {
        async getProductById(req: Request, res: Response) {
            try {
                const { id } = req.params;
                const product = await getProductById(id);
                if(!product){
                    return res.status(400).json({ error: "Product not found "});
                }
                return res.status(200).json(product);
            } catch (error) {
                return res.status(400).json({ error });
            }
        }
        async getProducts(req: Request, res: Response) {
            try {
                const searchParams: ISearchParams = req.query; //capturo los query del cliente
                const products = await getProducts(searchParams);
                if(!products){
                    return res.status(400).json({ error: "Products not found "});
                }
                return res.status(200).json(products);
            } catch (error) {
                return res.status(400).json({ error });
            }
        }
        async createProduct(req: Request, res: Response) {
            const product = req.body;
            try {
                const newProduct = await createProduct(product);
                return res.status(200).json(newProduct);
            } catch (error) {
                return res.status(500).json({ error });
            }
        }
        async deleteProduct(req: Request, res: Response) {
            try {
                const { id } = req.params;
                const deletedProduct = await deleteProduct(id);
                if(!deleteProduct){
                    return res.status(400).json({ error: "Product not found "});
                }
                return res.status(200).json(deletedProduct);
            } catch (error) {
                return res.status(400).json({ error });
            }
        }
        async editProduct(req: Request, res: Response) {
            try {
                const { id } = req.params;
                const editedProductBody = req.body;
                const editedProduct = await editProduct(id, editedProductBody);
                if(!editedProduct){
                    return res.status(400).json({ error: "Product not found "});
                }
                return res.status(200).json(editedProduct);
            } catch (error) {
                return res.status(400).json({ error });
            }
        }
}

export const productController = new ProductController();
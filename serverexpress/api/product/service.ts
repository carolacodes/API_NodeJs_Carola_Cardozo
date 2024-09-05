// aca manejamos la logica de negocio
import { IProduct } from "../../types";
import { productDao } from "./dao";
import { ISearchParams } from "./types";

const {
    getAllProducts,
    getProductById,
    createProduct,
    editProduct,
    deleteProduct,
} = productDao;
class ProductController {
    async createProduct(product: IProduct) {
        try {
            const newProduct = await createProduct(product);
            return newProduct
        }catch (error) {
            throw Error((error as Error).message);
        }
    }

    async deleteProduct(id_product: string) {
        try {
            const productDelete = await deleteProduct(id_product);
            return productDelete;
        }catch (error) {
            throw Error((error as Error).message);
        }
    }

    async getProducts(searchParams: ISearchParams){
            const {
                category,
                salersId,
                filterByPrice,
                priceRange,
                page = "1",
                limit = "10",
                keyword
            } = searchParams;
            let priceStart: number | undefined;
            let priceEnd: number | undefined;
            let sort: -1 | 1 | undefined;
            if (filterByPrice) {
                sort = filterByPrice === "lower" ? 1 : -1;
            }
            if (priceRange) {
                const [start, end] = priceRange.split(",");
                priceStart = Number(start);
                priceEnd = Number(end);
            }
            try {
                const products = await getAllProducts(
                category,
                salersId,
                priceStart,
                priceEnd,
                sort,
                page,
                limit,
                keyword
                );
        
                return products;
            } catch (error) {
                throw Error((error as Error).message);
            }
    }

    async getProductById(id_product: string){
        try{
            const productById = await getProductById(id_product);
            return productById;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }

    async editProduct(id_product: string, productData: Partial<IProduct>){
        try{
            const updatedProduct = await editProduct(id_product, productData);
            return updatedProduct;
        }catch (error) {
            throw Error((error as Error).message);

        }
    }
    
}

export const productService = new ProductController();
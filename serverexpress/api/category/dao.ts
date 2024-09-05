import { ICategory } from "../../types";
import Category from "./model";

class CategoryDao {
    async getCategories() {
        try {
            const categories = Category.find() //traigo todas
            return categories
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    
    async createCategory(category: ICategory) {
        try {
            const newCategory = Category.create(category);
            return newCategory
        } catch (error) {
            throw Error((error as Error).message);
        }
    }

    async updateCategory(id: string, category: Partial<ICategory>) {
        try {
            const updateCategory = Category.findByIdAndUpdate(id, category, {new: true})
            if(!updateCategory){
                throw new Error("Category not found");
            }
            return updateCategory
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    
    async deleteCategory(id: string) {
        try {
            const categoryDelete = Category.findByIdAndDelete(id)
            if(!categoryDelete){
                throw new Error("Category not found");
            }
            return categoryDelete
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
}

export const categoryDao = new CategoryDao();

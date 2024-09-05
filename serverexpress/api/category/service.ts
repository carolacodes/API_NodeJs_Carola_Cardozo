import { ICategory } from "../../types";
import { categoryDao } from "./dao";

const {getCategories, createCategory, updateCategory, deleteCategory} = categoryDao

class CategoryService {
    async getCategories() {
        try{
            const categories = await getCategories()
            return categories
        } catch (error){
            throw Error((error as Error).message);
        }
    }
    
    async createCategory(category: ICategory) {
        try {
            const newCategory = await createCategory(category)
            return newCategory
        } catch (error) {
            throw Error((error as Error).message);
        }
    }

    async updateCategory(id: string, categoryData: Partial<ICategory>) {
        try {
            const updateCategoryBody = await updateCategory(id, categoryData)
            if(!updateCategoryBody){
                throw new Error("Category not found");
            }
            return updateCategory
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    
    async deleteCategory(id: string) {
        try {
            const categoryDelete = await deleteCategory(id)
            return categoryDelete
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
}

export const categoryService = new CategoryService();
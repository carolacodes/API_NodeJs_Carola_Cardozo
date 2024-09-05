import { Request, Response } from "express";
import { categoryService } from "./service";

const {getCategories, createCategory, updateCategory, deleteCategory} = categoryService

class CategoryController {
    async getCategories(req: Request, res: Response) {
        try {
            const categories = await getCategories()
            return res.status(200).json(categories)
        } catch (error) {
            return res.status(400).json((error as Error).message);
        }
    }
    
    async createCategory(req: Request, res: Response) {
        try {
            const category = req.body
            const newCategory = await createCategory(category)
            return res.status(200).json(newCategory);
        } catch (error){
            return res.status(400).json((error as Error).message);
        }
    }

    async updateCategory(req: Request, res: Response) {
        const id = req.params.id
        const categoryUpdateBody = req.body
        try {
            const categoryUpdate = await updateCategory(id, categoryUpdateBody)
            return res.status(200).json(categoryUpdate)
        } catch (error) {
            return res.status(400).json((error as Error).message);
        }
    }
    
    async deleteCategory(req: Request, res: Response) {
        const id = req.params.id
        try {
            const categoryDelete = await deleteCategory(id)
            return res.status(200).json(categoryDelete)
        } catch (error) {
            return res.status(400).json((error as Error).message);
        }
    }
}

export const categoryController = new CategoryController();
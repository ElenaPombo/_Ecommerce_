import { Request, Response } from 'express';
import CategoriesModel from '../models/mysql/CategoriesModel';


const CategoriesController = {
    getAllCategories: async (req, res) => {
        try {
            const categories = await CategoriesModel.getAllCategories();
            res.json(categories);
        } catch (error) {
            console.log(error)
        }
    },
    getCategory: async (req, res) => {
        try {
            const id = req.params.id;
            const category = await CategoriesModel.getCategory(id);
            if (!Array.isArray(product) || category.length === 0) {
                res.status(404).json({ message: `Category with id ${id} not found` });
                return;
            }
            res.json(category);
        } catch (error) {
            console.log(error)
        }
    },
    addCategory: async (req, res) => {
        const { name } = req.body;
        if (!name) {
            res.status(400).json({ message: 'Please complete the fields' });
            return;
        }
        await CategoriesModel.createCategory(name);

    },
    updateCategory: async (req, res) => {
        const id = req.params.id;
        const { name } = req.body;
        if (!name ) {
            res.status(400).json({ message: 'Please complete the fields' });
            return;
        }
        await CategoriesModel.updateCategories(name);

    },
    deleteCategory: async (req, res) => {
        try {
            const id = req.params.id;
            await CategoriesModel.deleteCategories(id);
        } catch (error) {
            console.log(error)
        }
    },
};

export default ProductsController;
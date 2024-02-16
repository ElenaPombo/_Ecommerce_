import { request, response } from 'express';
import CategoriesModel from '../models/CategoriesModel.js';


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
            if (!Array.isArray(category) || category.length === 0) {
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
            res.status(400).json({ message: 'Please fill the fields' });
            return;
        }
        await CategoriesModel.createCategory(name);
        res.status(201).json({ message: 'Category added successfully' });
    },
    updateCategory: async (req, res) => {
        const id = req.params.id;
        const { name } = req.body;
        if (!name) {
            res.status(400).json({ message: 'Please fill the fields' });
            return;
        }
        await CategoriesModel.updateCategory(id, name);
        res.status(200).json({ message: `Category with ID ${id} updated successfully` });
    },

    deleteCategory: async (req, res) => {
        try {
            const id = req.params.id;
            await CategoriesModel.deleteCategory(id);
            res.status(200).json({ message: `Category with ID ${id} deleted successfully` });
        } catch (error) {
            console.log(error)
        }
    },
};

export default CategoriesController;
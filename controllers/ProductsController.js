import { request, response } from 'express';
import ProductsModel from '../models/ProductsModel.js'


const ProductsController = {
    getAllProducts: async (req, res) => {
        try {
            const products = await ProductsModel.getAllProducts();
            res.json(products);
        } catch (error) {
            console.log(error)
        }
    },
    getProduct: async (req, res) => {
        try {
            const id = req.params.id;
            const product = await ProductsModel.getProduct(id);
            if (!Array.isArray(product) || product.length === 0) {
                res.status(404).json({ message: `Product with id ${id} not found` });
                return;
            }
            res.json(product);
        } catch (error) {
            console.log(error)
        }
    },

    addProduct: async (req, res) => {
        const { name, description, price, stock, user_id, category_id } = req.body;
        if (!name || !description || !price || !stock || !user_id || !category_id) {
            res.status(400).json({ message: 'Please fill all fields' });
            return;
        }
        await ProductsModel.createProduct(name, description, price, stock, user_id, category_id);
        res.status(201).json({ message: 'Product added successfully' });
    },

    updateProduct: async (req, res) => {
        const id = req.params.id;
        const { name, description, price, stock, user_id, category_id } = req.body;
        if (!name || !description || !price || !stock || !user_id || !category_id) {
            res.status(400).json({ message: 'Please fill all fields' });
            return;
        }
        await ProductsModel.updateProduct(id, name, description, price, stock, user_id, category_id);
        res.status(200).json({ message: `Product with ID ${id} updated successfully` });
    },

    deleteProduct: async (req, res) => {
        try {
            const id = req.params.id;
            await ProductsModel.deleteProduct(id);
            res.status(200).json({ message: `Product with ID ${id} deleted successfully`});
        } catch (error) {
            console.log(error)
        }
    },
};

export default ProductsController;
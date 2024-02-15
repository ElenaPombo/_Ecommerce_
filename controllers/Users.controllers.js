import { Request, Response } from 'express';
import UsersModel from '../models/mysql/UsersModel';


const UsersController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await UsersModel.getAllUsers();
            res.json(users);
        } catch (error) {
            console.log(error)
        }
    },
    getProduct: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await UsersModel.getUser(id);
            if (!Array.isArray(product) || product.length === 0) {
                res.status(404).json({ message: `User with id ${id} not found` });
                return;
            }
            res.json(product);
        } catch (error) {
            console.log(error)
        }
    },
    addUser: async (req, res) => {
        const { name, email, password, rol, status } = req.body;
        if (!name || email || !password || !rol || !status ) {
            res.status(400).json({ message: 'Please complete the fields' });
            return;
        }
        await UsersModel.createProduct(name, email, password, rol, status);

    },
    updateProduct: async (req, res) => {
        const id = req.params.id;
        const { name, email, password, rol, status } = req.body;
        if (!name || email || !password || !rol || !status) {
            res.status(400).json({ message: 'Please complete the fields' });
            return;
        }
        await UsersModel.updateUser(name, email, password, rol, status);

    },
    deleteUser: async (req, res) => {
        try {
            const id = req.params.id;
            await UsersModel.deleteUser(id);
        } catch (error) {
            console.log(error)
        }
    },
};

export default UsersController;
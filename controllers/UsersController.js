import { request, response } from 'express';
import UsersModel from '../models/UsersModel.js';


const UsersController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await UsersModel.getAllUsers();
            res.json(users);
        } catch (error) {
            console.log(error)
        }
    },
    getUser: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await UsersModel.getUser(id);
            if (!Array.isArray(user) || user.length === 0) {
                res.status(404).json({ message: `User with id ${id} not found` });
                return;
            }
            res.json(user);
        } catch (error) {
            console.log(error)
        }
    },
    addUser: async (req, res) => {
        const { name, email, password, rol, status } = req.body;
        if (!name || !email || !password || !rol || !status ) {
            res.status(400).json({ message: 'Please fill all the fields' });
            return;
        }
        await UsersModel.createUser(name, email, password, rol, status);
        res.status(201).json({ message: 'User added successfully' });
    },
    updateUser: async (req, res) => {
        const id = req.params.id;
        const { name, email, password, rol, status } = req.body;
        if (!name || !email || !password || !rol || !status) {
            res.status(400).json({ message: 'Please fill all the fields' });
            return;
        }
        await UsersModel.updateUser(id, name, email, password, rol, status);
        res.status(200).json({ message: `User with ID ${id} updated successfully` });
    },
    deleteUser: async (req, res) => {
        try {
            const id = req.params.id;
            await UsersModel.deleteUser(id);
            res.status(200).json({ message: `User with ID ${id} deleted successfully` });
        } catch (error) {
            console.log(error)
        }
    },
    loginUser: async (req, res) => {
                const { email, password, rol } = req.body;
        if (!email ||!password || !rol) {
            res.status(400).json({ message: 'Please fill the fields' });
            return;
        }
        try {
            const user = await UsersModel.login(email, password,rol);
            res.json(user);
        } catch (error) {
            console.log(error)
        }
    }
};

export default UsersController;
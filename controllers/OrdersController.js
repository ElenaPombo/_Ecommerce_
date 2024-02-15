import { Request, Response } from 'express';
import OrdersModel from '../models/mysql/OrdersModel';

const OrdersController = {
    getAllOrders: async (req, res) => {
        try {
            const orders = await OrdersModel.getAllOrders();
            res.json(orders);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    getOrder: async (req, res) => {
        try {
            const id = req.params.id;
            const order = await OrdersModel.getOrderById(id);
            if (!Array.isArray(order) || order.length === 0) {
                res.status(404).json({ message: `Order with id ${id} not found` });
                return;
            }
            res.json(order);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    addOrder: async (req, res) => {
        try {
            const { date, user_id } = req.body;
            if (!date || !user_id) {
                res.status(400).json({ message: 'Please provide date and user_id' });
                return;
            }
            await OrdersModel.createOrder(date, user_id);
            res.status(201).json({ message: 'Order created successfully' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    updateOrder: async (req, res) => {
        try {
            const id = req.params.id;
            const { date, user_id } = req.body;
            if (!date || !user_id) {
                res.status(400).json({ message: 'Please provide date and user_id' });
                return;
            }
            await OrdersModel.updateOrder(id, date, user_id);
            res.json({ message: `Order with id ${id} updated successfully` });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    deleteOrder: async (req, res) => {
        try {
            const id = req.params.id;
            await OrdersModel.deleteOrder(id);
            res.json({ message: `Order with id ${id} deleted successfully` });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};

export default OrdersController;
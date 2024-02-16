import { connection } from "../database/config.js";

const OrdersModel = {
    getAllOrders: async () => {
        const [result, metadata] = await connection.query('SELECT * FROM orders');
        return result;
    },
    getOrderById: async (id) => {
        const [result, metadata] = await connection.query(`SELECT * FROM orders WHERE id = ${id}`);
        return result;
    },
    createOrder: async (date, user_id) => {
        const [result, metadata] = await connection.query(`INSERT INTO orders (date, user_id) VALUES (?, ?), [date, user_id]`);
        return result;
    },
    updateOrder: async (id, date, user_id) => {
        const [result, metadata] = await connection.query(`UPDATE orders SET date = ?, user_id = ? WHERE id = ?, [date, user_id, id]`);
        return result;
    },
    deleteOrder: async (id) => {
        const [result, metadata] = await connection.query(`DELETE FROM orders WHERE id = ?, [id]`);
        return result;
    }
};

export default OrdersModel;
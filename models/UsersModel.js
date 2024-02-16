import { connection } from "../database/config.js";

const UsersModel = {
    getAllUsers: async () => {
        const [result, metadata] = await connection.query('SELECT * FROM users');
        return result;
    },
    getAllUser: async (id) => {
        const [result, metadata] = await connection.query(`SELECT * FROM users WHERE id = ${id}`);
        return result;
    },
    createUser: async (name, email, password, rol, status) => {
        const [result, metadata] = await connection.query(`INSERT INTO users (name, description, price, stock, user_id, category_id) VALUES ('${name}', '${description}', '${price}', '${stock}', '${user_id}', '${category_id}')`);
        return result;
    },
    updateUser: async (name, email, password, rol, status) => {
        const [result, metadata] = await connection.query(`UPDATE users SET name = '${name}', description = '${description}', price = '${price}', stock = '${stock}', user_id = '${user_id}', category_id = '${category_id}' WHERE id = ${id}`);
        return result;
    },
    deleteUser: async (id) => {
        const [result, metadata] = await connection.query(`DELETE FROM users WHERE id = ${id}`);
        return result;
    },

}

export default UsersModel;
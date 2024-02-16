import { connection } from '../database/config.js';

const UsersModel = {
    getAllUsers: async () => {
        const [result, metadata] = await connection.query('SELECT * FROM users');
        return result;
    },
    getUser: async (id) => {
        const [result, metadata] = await connection.query(`SELECT * FROM users WHERE id = ${id}`);
        return result;
    },
    createUser: async (name, email, password, rol, status) => {
        const [result, metadata] = await connection.query(`INSERT INTO users (name, email, password, rol, status) VALUES ('${name}', '${email}', '${password}', '${rol}', '${status}')`);
        return result;
    },
    updateUser: async (id, name, email, password, rol, status) => {
        const [result, metadata] = await connection.query(`UPDATE users SET name = '${name}', email = '${email}', password = '${password}', rol = '${rol}', status = '${status}' WHERE id = ${id}`);
        return result;
    },
    deleteUser: async (id) => {
        const [result, metadata] = await connection.query(`DELETE FROM users WHERE id = ${id}`);
        return result;
    },
    loginUser: async (email, password, rol) => {
        const [result, metadata] = await connection.query(`SELECT * FROM users WHERE email = '${email}' AND password = '${password}' and rol = '${rol}' `);
        return result;
    }

}

export default UsersModel;
import { connection } from '../database/config.js';

const ProductsModel = {
    getAllProducts: async () => {
        const [result, metadata] = await connection.query('SELECT * FROM products');
        return result;
    },
    getProduct: async (id) => {
        const [result, metadata] = await connection.query(`SELECT * FROM products WHERE id = ${id}`);
        return result;
    },
    createProduct: async (name, description, price, stock, user_id, category_id) => {
        const [result, metadata] = await connection.query(`INSERT INTO products (name, description, price, stock, user_id, category_id) VALUES ('${name}', '${description}', '${price}', '${stock}', '${user_id}', '${category_id}')`);
        return result;
    },
    updateProduct: async (name, description, price, stock, user_id, category_id) => {
        const [result, metadata] = await connection.query(`UPDATE products SET name = '${name}', description = '${description}', price = '${price}', stock = '${stock}', user_id = '${user_id}', category_id = '${category_id}' WHERE id = ${id}`);
        return result;
    },
    deleteProduct: async (id) => {
        const [result, metadata] = await connection.query(`DELETE FROM products WHERE id = ${id}`);
        return result;
    },

}

export default ProductsModel;

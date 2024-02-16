import { connection } from "../database/config.js";

const CategoriesModel = {
    getAllCategories: async () => {
        const [result, metadata] = await connection.query('SELECT * FROM categories');
        return result;
    },
    getCategory: async (id) => {
        const [result, metadata] = await connection.query(`SELECT * FROM categories WHERE id = ${id}`);
        return result;
    },
    createCategory: async (name) => {
        const [result, metadata] = await connection.query(`INSERT INTO categories (name) VALUES (?)` , [name]);
        return result;
    },
    updateCategory: async (id, name) => {
        const [result, metadata] = await connection.query(`UPDATE categories SET name = ? WHERE id = ?`, [name, id]);
        return result;
    },
    
    deleteCategory: async (id) => {
        const [result, metadata] = await connection.query(`DELETE FROM categories WHERE id = ${id}`);
        return result;
    },

}

export default CategoriesModel;
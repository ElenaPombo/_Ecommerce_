import { connection } from "../../database/config";

const CategoriesModel = {
    getAllCategories: async () => {
        const [result, metadata] = await connection.query('SELECT * FROM categories');
        return result;
    },
    getAllCategory: async (id) => {
        const [result, metadata] = await connection.query(`SELECT * FROM categories WHERE id = ${id}`);
        return result;
    },
    createCategory: async (name) => {
        const [result, metadata] = await connection.query(`INSERT INTO categories (name}')`);
        return result;
    },
    updateCategory: async (name, description, price, stock, user_id, category_id) => {
        const [result, metadata] = await connection.query(`INSERT INTO categories (name}')`);
        return result;
    },
    deleteCategory: async (id) => {
        const [result, metadata] = await connection.query(`DELETE FROM categories WHERE id = ${id}`);
        return result;
    },

}

export default CategoriesModel;
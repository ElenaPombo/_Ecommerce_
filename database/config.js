import { createPool } from 'mysql2/promise';

const CONFIG = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'ecommerce2'
};

export const connection = createPool(CONFIG);
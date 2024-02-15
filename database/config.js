import { createPool } from 'mysql2/promise';

const CONFIG = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Abaco2020',
    database: 'ecommerce'
};

export const connection = createPool(CONFIG);
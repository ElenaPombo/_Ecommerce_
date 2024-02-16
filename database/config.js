import { createPool } from 'mysql2/promise';

const CONFIG = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'BootcampFactoriaF5¡¡',
    database: 'ecommerce'
};

export const connection = createPool(CONFIG);
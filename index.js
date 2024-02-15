
import express from 'express';
import { connection } from './database/config.js';
import ProductsRouter from './routes/ProductsRouter.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use("/products/", ProductsRouter);
// app.use("/users/", UserRouter);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

import express from 'express';
import { connection } from './database/config.js';
import ProductsRouter from './routes/ProductsRouter.js';
import CategoriesRouter from './routes/CategoriesRouter.js';
import UsersRouter from './routes/UsersRouter.js';
const app = express();
const port = 3000;

app.use(express.json());

app.use("/products/", ProductsRouter);
app.use("/categories/", CategoriesRouter);
app.use("/users/", UsersRouter);

app.use((req, res, next) => {
  res.status(404).json({
      messaje: 'Not found'
  })
})
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
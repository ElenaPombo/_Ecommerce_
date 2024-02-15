// //import express from "express";
// import mysql from "mysql2/promise";

// const app = express();
// const PORT = 3012;

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// })

// app.listen(PORT, () => {
//     console.log(`Example app listening on port ${PORT}`)    
// }) 
import express from 'express';
import { connection } from './database/config.js';
import ProductsRouter from './routes/ProductsRouter.js';

const app = express();
const port = 3000;

app.use("/products/", ProductsRouter);
// app.use("/users/", UserRouter);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
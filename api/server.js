import express from "express";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";

import  productRoutes from "./routes/productRoutes.js";
import userRoutes from './routes/userRoutes.js'

dotenv.config();
const port = process.env.PORT;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

app.get('/', (req,res) => {
    res.send('API is running')
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () => console.log('App is running'));
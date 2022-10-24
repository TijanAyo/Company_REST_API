import express from "express";
import Company from "./routes/companies.js";
import connectDB from './config/mongoose.config.js';
import * as dotenv from 'dotenv'
dotenv.config();


const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.use('/api/v1', Company);

app.get('/', (_req, res) => {
    return res.status(200).json('pong')
});

export default app;
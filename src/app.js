import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import { connectMongoDB } from './config/mongoDb.config.js';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import dotenv from 'dotenv';
import setupSwagger from './utils/swagger.js';


dotenv.config(); 
const app =express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

setupSwagger(app);

const server=app.listen(process.env.PORT,()=>{
    console.log(`Server escuchando en puerto ${process.env.PORT}`);
});
connectMongoDB()


export default app;

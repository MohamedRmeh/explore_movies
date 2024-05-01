import express from 'express';
import mongoose from 'mongoose';
const app = express();
import authRoute from './routes/auth.js'
import movieRoute from './routes/movie.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';
const port = 3001;
dotenv.config()


// Connect DB
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to mongoDB.");
    } catch (err) {
        console.log(err)
    }
}



// midlleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());


app.use('/auth', authRoute)
app.use('/', movieRoute)
app.use('/movie', movieRoute)


app.listen(port, () => {
    connect()
    console.log(`server is conected in port ${port}`);
});
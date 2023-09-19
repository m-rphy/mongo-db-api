import 'dotenv/config';
import https from 'https';
import fs from 'fs';
import cors from 'cors';
import express, { Request, Response } from 'express';
import { todoRouter } from './routers/todoRouter';
import { Err } from './controllers/todoController';


const app = express();

app.use(express.json());
const allowedOrigins = ['https://127.0.0.1:3000', 'http://localhost:3000'];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
}));

app.use('/api/data', todoRouter);

app.use('/*', (_:Request, res: Response) => {
    return res.status(404).json('Page Not Found');
});

// Global Error Handler (do not put into production)
app.use((err: Err, _: Request, res: Response) => {
    const errorStatus: number = err.status || 500;
    return res.status(errorStatus).json(err);
});

const PORT = process.env.PORT || 4000;
https
    .createServer(
        {
            key: fs.readFileSync('./certs/key.pem'),
            cert: fs.readFileSync('./certs/cert.pem'),
        },
        app
    )
    .listen(PORT, () => {
        console.log(`Beep Boop: listening on port: ${PORT}`);
    });

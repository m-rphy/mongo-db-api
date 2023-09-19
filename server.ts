import 'dotenv/config';
import express, { Request, Response } from 'express';
import cors from 'cors';
import { todoRouter } from './routers/todoRouter';

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
    allowedHeaders: 'Content-Type,Authorization',
}));

app.use('/api/data', todoRouter);

app.use('/*', (_:Request, res: Response) => {
    return res.status(404).json('Page Not Found')
});

// Global Error Handler (do not put into production)
app.use((err: any, _: Request, res: Response) => {
    const errorStatus = err.status || 500;
    return res.status(errorStatus).json(err);
});

const PORT = process.env.PORT || 3031;
app.listen(PORT, () => {
    console.log(`Beep Boop: listening on port: ${PORT}`);
});

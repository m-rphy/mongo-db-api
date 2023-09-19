import express, { Request, Response } from 'express';
import { todoRouter } from './routers/todoRouter';

const app = express();
app.use(express.json());


app.use('/api/data', todoRouter);

app.use('/*', (_:Request, res: Response) => {
    return res.status(404).json('Page Not Found')
});

// Global Error Handler (do not put into production)
app.use((err: any, _: Request, res: Response) => {
    const errorStatus = err.status || 500;
    return res.status(errorStatus).json(err);
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Beep Boop: listening on port: ${PORT}`);
});

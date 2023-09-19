import express, {Response, Request, NextFunction} from "express";
import { router as todoRouter } from "./routes/todoRoute";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors<Request>());

/*
app.use('/', (_: Request, res: Response) => {
    res.status(200).json('Hello World');
})
*/

app.use('/api/data', todoRouter);

// 404 Error handler
app.use('/*', (_: Request, res:Response) => {
    res.status(404).json('Page not found: 404')
});

// Global Error Handler
app.use((err: any, _: Request, res: Response, __: NextFunction) => {
    console.log('We have entered the Gobal Error Handler!');
    console.log('Our error is: ', err);
    const errorStatus = err.status || 500;
    return res.status(errorStatus).send(err);
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Beep Boop: listening on port ${PORT}`);
});


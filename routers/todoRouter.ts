import express, { Request, Response } from 'express';
import { todoController } from '../controllers/todoController';

export const todoRouter = express.Router();

todoRouter.get('/get', 
    todoController.getWholeList,
    (_: Request, res: Response) => {
        return res.status(200).json(res.locals.todos);
    });

todoRouter.post('/post', 
    todoController.postTodo,
    (_: Request, res: Response) => {
        return res.status(200).json(res.locals.todos);
    });

todoRouter.patch('/update/:_id', 
    todoController.updateTodo,
    (_: Request, res: Response) => {
        return res.status(200).json({msg: 'Successfully Updated'});
    });

todoRouter.delete('/delete/:_id', 
    todoController.deleteTodo,
    (_: Request, res: Response) => {
        return res.status(200).json({msg: 'Successfully Deleted'});
    });

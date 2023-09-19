import { Request, Response, NextFunction } from 'express';
import { Todos } from '../models/schema';

export interface Err {
    status: number,
    msg: string,
    err: Error
}

const createErr = (err: Error, msg: string, status: number): Err => {
    return {
        err,
        msg,
        status,
    };
};

export const todoController = {
    
    getWholeList: async (_: Request, res: Response, next: NextFunction) => {
        
        try{
            const todos = await Todos.find();
            
            res.locals.todos = todos;
            return next();

        } catch(err) {
            return next(createErr(err, 'Error in getWholeList', 404));
        }
    },
    postTodo: async (req: Request, _: Response, next: NextFunction) => {
            
        try{
            const { name } = req.body;
            
            await Todos.create({ name, isDone: false});
            return next();

        } catch(err) {
            return next(createErr(err, 'Error in postTodo', 404));
        }
    },
    updateTodo: async (req: Request, _: Response, next: NextFunction) => {

        try{
            const { _id} = req.params;
            const { isDone } = req.body;

            await Todos.findOneAndUpdate({_id}, {isDone}, {returnNeDocument: true});
            return next();

        } catch(err) {
            return next(createErr(err, 'Error in updateTodo', 404));
        }
    },
    deleteTodo: async (req: Request, _: Response, next: NextFunction) => {

        try{
            
            const { _id} = req.params;

            await Todos.findOneAndDelete({_id});
            return next();

        } catch(err) {
            return next(createErr(err, 'Error in deleteTodo', 404));
        }
    }
};

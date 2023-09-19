import { Request, Response, NextFunction } from 'express';
import { Todos } from '../models/schema';

const createErr = (err: any, msg: string, status: number) => {
    return {
        err,
        msg,
        status,
    }
};


export const todoController = {
    
    getWholeList: async (_: Request, res: Response, next: NextFunction) => {
        
        try{
            const todos = await Todos.find();
            
            res.locals.todos = todos;
            return next();

        } catch(err) {
            return next(createErr(err, 'Error in getWholeList', 404))
        }
    },
    postTodo: async (req: Request, res: Response, next: NextFunction) => {
            
        try{
            const { name } = req.body;
            
            await Todos.create({ name, isDone: false});
            return next()

        } catch(err) {
            return next(createErr(err, 'Error in postTodo', 404))
        }
    },
    updateTodo: async (req: Request, res: Response, next: NextFunction) => {

        try{
            const { _id} = req.params;
            const { isDone } = req.body;

            const updatedTodo = await Todos.findOneAndUpdate({_id}, {isDone}, {returnNeDocument: true});
            return next();

        } catch(err) {
            return next(createErr(err, 'Error in updateTodo', 404))
        }
    },
    deleteTodo: async (req: Request, res: Response, next: NextFunction) => {

        try{
            
            const { _id} = req.params;

            await Todos.findOneAndDelete({_id});
            return next()

        } catch(err) {
            return next(createErr(err, 'Error in deleteTodo', 404))
        }
    }
}

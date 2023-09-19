import { NextFunction, Request, Response } from "express";
import { TodoList } from "../../database/schema";


export const todoListController = {
    
    getWholeList: async (_: Request, res: Response, next: NextFunction) => {
        try {
            const list = await TodoList.find( );
            res.locals.list = list;
            console.log(list);

            return next();

        } catch(err) {
            return next({
                err,
                message: 'Error getting todo list',
            });
        }
    },

    addListElement: async (req: Request, res: Response, next: NextFunction) => {
        
        const { name, isDone } = req.body;
        
        try {
            const newListElement = await TodoList.create( { name: name, isDone: isDone } );
            res.locals._id = newListElement; 
            return next();

        } catch(err) {
            return next({
                err,
                message: 'Error getting todo list',
            });
        }
    },
    updateListElement: async (req: Request, _: Response, next: NextFunction) => {
        
        const { _id } = req.params;
        const { isDone } = req.body;

        try {
            
            // Add validation for isDone
            const result = await TodoList.findOneAndUpdate({ _id }, { isDone }, {returnOriginal: false});
            // Add validation for result
            
            return next();

        } catch(err) {
            return next({
                err,
                message: 'Error getting todo list',
            });
        }
    },

    deleteListElement: async (req: Request, _: Response, next: NextFunction) => {
        
        const { _id } = req.params;
        try {
            await TodoList.findByIdAndDelete(_id);
            return next();

        } catch(err) {
            return next({
                err,
                message: 'Error deleting list element',
            });
        }
    }
}

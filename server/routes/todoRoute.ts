import express, {Response, Request } from "express";
import { todoListController } from "../controllers/todoListController";

export const router = express.Router();

router.get('/get', todoListController.getWholeList,
    (_: Request, res: Response) => {
        console.log('queried DB');
       res.setHeader('Cache-Controler', 'no-cache').status(200).json(res.locals.list); 
    });

router.post('/post', todoListController.addListElement,
    (_: Request, res: Response) => {
        res.status(200).json(res.locals._id);   
    }); 

router.patch('/update/:_id', todoListController.updateListElement,
    (_: Request, res: Response) => {
        res.status(200).json('Successfully Updated');   
    }); 

router.delete('/delete/:_id', todoListController.deleteListElement,
    (_: Request, res: Response) => {
        res.status(200).json('Successful Deleted');   
    });


import mongoose from 'mongoose';
import 'dotenv/config';

const MONGO_URI = process.env.DB || ''; 

mongoose.connect(MONGO_URI, {
    dbName: 'Todo_list_db'
    })
    .then(() => console.log('Connected to local db instance'))
    .catch(err => console.log('Local db err: ', err));

const TodosSchema = new mongoose.Schema({
    name: String,
    isDone: Boolean
});

export const Todos = mongoose.model('todos', TodosSchema);

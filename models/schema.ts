import mongoose from 'mongoose';

const MONGO_URI = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1';

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

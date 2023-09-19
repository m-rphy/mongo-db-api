import mongoose from 'mongoose';
import { ConnectOptions } from 'mongoose';

const MONGO_URI = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Todo-List-DB'
    } as ConnectOptions)
    .then(()=> console.log('Connect to local DB instance'))
    .catch(err => console.log('Error: ', err));

const TodoElementSchema = new mongoose.Schema({
    name: String,
    isDone: Boolean
});

export const TodoList = mongoose.model('todo-list', TodoElementSchema);

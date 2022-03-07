import { app } from './Controller/app';
import { TaskController } from './Controller/taskController';
import { UserController } from './Controller/userController';

const userCt = new UserController();
const taskCt = new TaskController();

app.post('/signup', userCt.signup);
app.post('/login', userCt.login);

app.put('/task', taskCt.createTask);

app.get('/all', userCt.getAllUsers);
app.get('/task/:id', taskCt.getTaskById);

app.delete('/:id', userCt.deleteUserById);

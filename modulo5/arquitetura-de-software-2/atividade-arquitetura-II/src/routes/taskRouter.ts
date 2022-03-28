import express from 'express';
import { TaskController } from '../controller/taskController';

export const taskRouter = express.Router();

const taskController = new TaskController();

taskRouter.put('/task', taskController.createTask);
taskRouter.get('/task/:id', taskController.getTaskById);

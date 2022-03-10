import express from 'express';
import { UserControler } from '../Controller/UserController';

export const userRouter = express.Router();
const userControlller = new UserControler();

userRouter.post('/users/signup', userControlller.signUp);
userRouter.post('/users/login', userControlller.login);

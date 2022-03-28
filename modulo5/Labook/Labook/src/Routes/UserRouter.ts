import express from 'express';
import { UserControler } from '../Controller/UserController';

export const userRouter = express.Router();
const userControlller = new UserControler();

userRouter.post('/signup', userControlller.signUp);
userRouter.post('/login', userControlller.login);

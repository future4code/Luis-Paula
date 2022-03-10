import express from 'express';
import { PostController } from '../Controller/PostController';

export const postRouter = express.Router();
const postControlller = new PostController();

postRouter.post('/posts/create', postControlller.createPost);
postRouter.get('/posts/:id', postControlller.getPostById);

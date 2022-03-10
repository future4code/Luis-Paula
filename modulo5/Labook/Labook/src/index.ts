import { app } from './Controller/app';
import { postRouter } from './Routes/PostRouter';
import { userRouter } from './Routes/UserRouter';

app.use('/users', userRouter);
app.use('/posts', postRouter);

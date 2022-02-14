import { app } from './app';
import { allVerifications } from './endpoints/getAllVerifications';
import { getAllUsers } from './endpoints/getAllUsers';
import { getUsersByType } from './endpoints/getUserByType';
import { getUsersByName } from './endpoints/getUsersByName';
import { orderUsers } from './endpoints/getOderUsers';
import { pagingUsers } from './endpoints/getFiveUsers';

app.get('/users', getAllUsers);
app.get('/user', getUsersByName);
app.get('/order', orderUsers);
app.get('/page', pagingUsers);
app.get('/verifications', allVerifications);
app.get('/users/:type', getUsersByType);

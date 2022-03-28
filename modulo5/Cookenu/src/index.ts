import { app } from './app';
import { recipe } from './endpoints/createRecipe';
import { getOtherProfile } from './endpoints/getOtherProfile';
import { getRecipe } from './endpoints/getRecipe';
import { getUserProfile } from './endpoints/getUserProfile';
import { login } from './endpoints/login';
import { signup } from './endpoints/signUp';

app.post('/signup', signup);
app.post('/login', login);
app.post('/recipe', recipe);

app.get('/user/profile', getUserProfile);
app.get('/user/:id', getOtherProfile);
app.get('/recipe/:id', getRecipe);

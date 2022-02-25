import { app } from './app';
import { recipe } from './endpoints/createRecipe';
import { getUserProfile } from './endpoints/getUserProfile';
import { login } from './endpoints/login';
import { signup } from './endpoints/signUp';

app.post('/signup', signup);
app.post('/login', login);
app.post('/recipe', recipe);

app.get('/user/profile', getUserProfile);

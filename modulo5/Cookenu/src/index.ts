import { app } from './app';
import { recipe } from './endpoints/createRecipe';
import { login } from './endpoints/login';
import { signup } from './endpoints/signUp';

app.post('/signup', signup);
app.post('/login', login);
app.post('/recipe', recipe);

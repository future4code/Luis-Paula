import { app } from './app';
import { addNewProduct } from './endpoints/addNewProduct';
import { addNewUser } from './endpoints/addNewUser';
import { getAllProducts } from './endpoints/getAllProducts';
import { getAllUsers } from './endpoints/getAllUsers';

app.post('/users', addNewUser);
app.post('/products', addNewProduct);

app.get('/users', getAllUsers);
app.get('/products', getAllProducts);

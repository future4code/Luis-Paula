import { app } from './app';
import { addNewProduct } from './endpoints/products/addNewProduct';
import { addNewUser } from './endpoints/user/addNewUser';
import { addPurchase } from './endpoints/addPurchase';
import { getAllProducts } from './endpoints/products/getAllProducts';
import { getAllUsers } from './endpoints/user/getAllUsers';

app.post('/users', addNewUser);
app.post('/products', addNewProduct);
app.post('/purchases', addPurchase);

app.get('/users', getAllUsers);
app.get('/products', getAllProducts);

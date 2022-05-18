import express from 'express';
import { PizzaController } from '../Controller/PizzaController';

export const pizzaRouter = express.Router();

const pizzaController = new PizzaController();

pizzaRouter.get('/pizzas', pizzaController.getPizzas);
pizzaRouter.post('/order', pizzaController.addOrder);
pizzaRouter.get('/order', pizzaController.getOrders);
pizzaRouter.get('/order/:id', pizzaController.getOrderById);

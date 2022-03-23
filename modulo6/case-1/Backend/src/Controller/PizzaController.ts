import { Request, Response } from 'express';
import { BaseDatabase } from '../Data/BaseDataBase';
import { PizzaDataBase } from '../Data/PizzaDataBase';
import { IdGenerator } from '../Services/IdGenerator';
const pizzaDB = new PizzaDataBase();
const idGenerator = new IdGenerator();
export class PizzaController {
  public async getPizzas(req: Request, res: Response) {
    try {
      const pizzas = await pizzaDB.getPiza();
      res.status(200).send({ pizzas });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }

  public async addOrder(req: Request, res: Response) {
    try {
      const { id, quantity, pizzaId } = req.body;
      const order = await pizzaDB.addOrder(id, quantity, pizzaId);
      res.status(200).send({ message: 'Pedido adicionado' });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
    await BaseDatabase.destroyConnection();
  }

  public async getOrders(req: Request, res: Response) {
    try {
      const orders = await pizzaDB.getOrders();
      res.status(200).send({ orders });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }

  public async getOrderById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const pizzas = await pizzaDB.getOrderById(id);
      res.status(200).send({ pizzas });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }
}

import { Request, Response } from 'express';
import { PizzaBusiness } from '../Business/PizzaBusiness';
import { BaseDatabase } from '../Data/BaseDataBase';
import { PizzaDataBase } from '../Data/PizzaDataBase';
import { OrderDTO } from '../Model/Pizza';
import { IdGenerator } from '../Services/IdGenerator';

const businessDB = new PizzaBusiness(new IdGenerator(), new PizzaDataBase());
export class PizzaController {
  public async getPizzas(req: Request, res: Response) {
    try {
      const result = await businessDB.getPizzas();
      res.status(200).send({ result });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }

  public async addOrder(req: Request, res: Response) {
    try {
      const input: OrderDTO = {
        quantity: req.body.quantity,
        pizza_id: req.body.pizzaId,
      };
      const result = await businessDB.addOrder(input);
      res.status(200).send({ result });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
    await BaseDatabase.destroyConnection();
  }

  public async getOrders(req: Request, res: Response) {
    try {
      const result = await businessDB.getOrders();
      res.status(200).send({ result });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }

  public async getOrderById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const result = await businessDB.getOrderById(id);
      res.status(200).send({ result });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }
}

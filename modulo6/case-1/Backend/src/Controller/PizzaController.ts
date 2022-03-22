import { Request, Response } from 'express';
import { BaseDatabase } from '../Data/BaseDataBase';
import { PizzaDataBase } from '../Data/PizzaDataBase';
const pizzaDB = new PizzaDataBase();
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
}

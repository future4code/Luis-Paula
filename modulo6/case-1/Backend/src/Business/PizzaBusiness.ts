import { PizzaDataBase } from '../Data/PizzaDataBase';
import { CustomError } from '../Error/CustomError';
import { OrderDTO } from '../Model/Pizza';
import { IdGenerator } from '../Services/IdGenerator';

export class PizzaBusiness {
  constructor(
    private idGenerator: IdGenerator,
    private pizzaDB: PizzaDataBase
  ) {}

  public async getPizzas() {
    try {
      const pizzas = await this.pizzaDB.getPizza();
      if (!pizzas) {
        return new CustomError('Bad Request', 400);
      }
      return pizzas;
    } catch (error) {
      if (error instanceof CustomError) {
        throw new CustomError(error.message, error.code);
      }
    }
  }

  public async addOrder(input: OrderDTO) {
    try {
      if (!input.pizza_id || !input.quantity) {
        throw new CustomError('Missing Input', 422);
      }
      const id = this.idGenerator.generate();

      await this.pizzaDB.addOrder(id, input.quantity, input.pizza_id);
      return { message: 'Pedido adicionado' };
    } catch (error) {
      if (error instanceof CustomError) {
        throw new CustomError(error.message, error.code);
      }
    }
  }

  public async getOrders() {
    try {
      const orders = await this.pizzaDB.getOrders();
      if (!orders) {
        return new CustomError('Bad Request', 400);
      }
      return orders;
    } catch (error) {
      if (error instanceof CustomError) {
        throw new CustomError(error.message, error.code);
      }
    }
  }

  public async getOrderById(id: string) {
    try {
      const orders = await this.pizzaDB.getOrderById(id);

      if (!orders) {
        return new CustomError('Bad Request', 400);
      }

      return orders;
    } catch (error) {
      if (error instanceof CustomError) {
        throw new CustomError(error.message, error.code);
      }
    }
  }
}

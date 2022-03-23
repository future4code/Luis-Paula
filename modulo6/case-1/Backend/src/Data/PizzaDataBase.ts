import { Pizza } from '../Model/Pizza';
import { BaseDatabase } from './BaseDataBase';

export class PizzaDataBase extends BaseDatabase {
  private static TABLE_NAME_1 = 'Pizzas';
  private static TABLE_NAME_2 = 'Orders';

  public async getPiza(): Promise<Pizza> {
    const result = await this.getConnection()
      .select('*')
      .from(PizzaDataBase.TABLE_NAME_1);

    return result;
  }

  public async addOrder(
    order_id: string,
    quantity: number,
    pizza_id: number
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({ order_id, quantity, pizza_id })
        .into(PizzaDataBase.TABLE_NAME_2);
    } catch (error: any) {
      console.log(error);
    }
  }

  public async getOrders() {
    const result = await this.getConnection()
      .select('*')
      .from(PizzaDataBase.TABLE_NAME_2)
      .join(PizzaDataBase.TABLE_NAME_1, 'Orders.pizza_id', '=', 'Pizzas.id');

    return result;
  }

  public async getOrderById(id: string) {
    const result = await this.getConnection()
      .select('*')
      .from(PizzaDataBase.TABLE_NAME_2)
      .join(PizzaDataBase.TABLE_NAME_1, 'Orders.pizza_id', '=', 'Pizzas.id')
      .where({ 'Orders.id': id });

    return result[0];
  }
}

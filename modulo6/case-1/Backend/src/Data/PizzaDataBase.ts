import { Pizza } from '../Model/Pizza';
import { BaseDatabase } from './BaseDataBase';

export class PizzaDataBase extends BaseDatabase {
  private static TABLE_NAME = 'Pizzas';

  public async getPiza(): Promise<Pizza> {
    const result = await this.getConnection()
      .select('*')
      .from(PizzaDataBase.TABLE_NAME);

    return result;
  }
}

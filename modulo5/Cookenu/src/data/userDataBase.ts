import { User } from '../entities/User';
import { Connection } from './connection';

export class UserDataBase extends Connection {
  public async createUser(user: User) {
    try {
      await Connection.connection('Cookenu_user').insert({
        id: user.getId(),
        email: user.getEmail(),
        name: user.getName(),
        password: user.getPassword(),
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async findUserByEmail(email: string): Promise<User> {
    try {
      const user = await Connection.connection('Cookenu_user')
        .select('*')
        .where({ email });

      return user[0] && User.toUserModel(user[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public async findUserById(id: string): Promise<User> {
    try {
      const user = await Connection.connection('Cookenu_user')
        .select('*')
        .where({ id });

      return user[0] && User.toUserModel(user[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}

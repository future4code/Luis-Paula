import { user } from '../model/user';
import { BaseDataBase } from './baseDataBase';

export class UserDataBase extends BaseDataBase {
  insertUser = async (user: user) => {
    await BaseDataBase.connection.insert(user).into('to_do_list_users');
  };

  selectUserByEmail = async (email: string): Promise<user> => {
    try {
      const result = await BaseDataBase.connection('to_do_list_users')
        .select('*')
        .where({ email });

      return {
        id: result[0].id,
        name: result[0].name,
        nickname: result[0].nickname,
        email: result[0].email,
        password: result[0].password,
        role: result[0].role,
      };
    } catch (error: any) {
      throw new Error(error.slqMessage || error.message);
    }
  };
}

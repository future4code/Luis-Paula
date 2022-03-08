import { user } from '../types/user';
import { BaseDataBase } from './baseDataBase';

export class UserDataBase extends BaseDataBase {
  selectUserByEmail = async (email: string): Promise<user> => {
    try {
      const result = await BaseDataBase.connection('To_Do_List_User')
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

  insertUser = async (user: user) => {
    await BaseDataBase.connection
      .insert({
        id: user.id,
        name: user.name,
        nickname: user.nickname,
        email: user.email,
        password: user.password,
        role: user.role,
      })
      .into('To_Do_List_User');
  };

  getAllUsers = async (): Promise<any> => {
    try {
      const users = [];
      const result = await BaseDataBase.connection('To_Do_List_User').select(
        '*'
      );

      for (let user of result) {
        users.push(user);
      }
    } catch (error: any) {
      throw new Error(error.slqMessage || error.message);
    }
  };

  deleteUserById = async (id: string): Promise<void> => {
    try {
      await BaseDataBase.connection('To_Do_List_User').where({ id }).del();
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}

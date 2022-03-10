import { user } from '../Model/User';
import { BaseDataBase } from './BaseDataBase';

export class UserDataBase extends BaseDataBase {
  signupUser = async (user: user) => {
    await BaseDataBase.connection('labook_users').insert({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  };

  selectUserByEmail = async (email: string) => {
    const queryResult: any = await BaseDataBase.connection('labook_users')
      .select('*')
      .where({ email });

    const user: user = {
      id: queryResult[0].id,
      name: queryResult[0].name,
      email: queryResult[0].email,
      password: queryResult[0].password,
    };

    return user;
  };
}

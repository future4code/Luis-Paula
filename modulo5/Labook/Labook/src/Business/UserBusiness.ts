import { UserDataBase } from '../Data/UserDataBase';
import { user, userData } from '../Model/User';
import { Authenticator } from '../Services/Authenticator';
import { HashManager } from '../Services/HashManager';
import { IdGenerator } from '../Services/IdGenerator';

const hash = new HashManager();
const idGenerator = new IdGenerator();
const auth = new Authenticator();
const userDB = new UserDataBase();

export class UserBusiness {
  signUp = async (user: userData) => {
    let message = 'Success!';
    if (!user.name || !user.email || !user.password) {
      message = '"name", "email" and "password" must be provided';
      throw new Error(message);
    }

    const cypherPassword = await hash.hash(user.password);
    const id: string = idGenerator.generateId();

    const newUser = {
      ...user,
      password: cypherPassword,
      id,
    };

    const token: string = auth.generateToken({ id: newUser.id });

    return token;
  };

  login = async (email: string, password: string) => {
    let message = 'Success!';
    const result: user = await userDB.selectUserByEmail(email);

    if (!email || !password) {
      message = '"email" and "password" must be provided';
      throw new Error(message);
    }

    if (!result) {
      message = 'Email não encontrado';
      throw new Error(message);
    }

    const passwordIsCorrect: boolean = await hash.compare(
      password,
      result.password
    );

    if (!passwordIsCorrect) {
      message = 'Password incorreto';
      throw new Error(message);
    }

    const token: string = auth.generateToken({ id: result.id });

    return { message, token };
  };
}

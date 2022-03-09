import { user } from '../Model/User';
import { Authenticator } from '../Services/Authenticator';
import { HashManager } from '../Services/HashManager';
import { IdGenerator } from '../Services/IdGenerator';

const hash = new HashManager();
const idGenerator = new IdGenerator();
const auth = new Authenticator();

export class UserBusiness {
  signUp = async (user: user): Promise<string | undefined> => {
    try {
      let message = 'Success!';
      if (!user.name || !user.email || !user.password) {
        message = '"name", "email" and "password" must be provided';
        throw new Error(message);
      }

      const id: string = idGenerator.generateId();

      const cypherPassword = await hash.hash(user.password);

      const token: string = auth.generateToken({ id });

      return token;
    } catch (error) {}
  };

  login = async (user: user): Promise<any> => {
    try {
      let message = 'Success!';

      if (!user.email || !user.password) {
        message = '"email" and "password" must be provided';
        throw new Error(message);
      }

      const passwordIsCorrect: boolean = await hash.compare(
        password,
        user.password
      );

      if (!passwordIsCorrect) {
        message = 'Invalid credentials';
        throw new Error(message);
      }

      const token: string = auth.generateToken({
        id: user.id,
      });

      return { message, token };
    } catch (error) {}
  };
}

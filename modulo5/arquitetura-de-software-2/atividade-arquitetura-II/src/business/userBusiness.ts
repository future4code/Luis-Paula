import { UserDataBase } from '../data/userDataBase';
import { signupInputDTO, user, userData } from '../model/user';
import { Authenticator } from '../services/authenticator';
import { HashManager } from '../services/hashManager';
import { GenerateId } from '../services/idGenerator';

const userDB = new UserDataBase();
const generateId = new GenerateId();
const hash = new HashManager();
const auth = new Authenticator();

export class UserBusiness {
  signupBusiness = async (userData: signupInputDTO): Promise<string> => {
    if (
      !userData.name ||
      !userData.nickname ||
      !userData.email ||
      !userData.password ||
      !userData.role
    ) {
      throw new Error(
        'Preencha os campos "name","nickname", "email" e "password"'
      );
    }

    const cypherPassword = await hash.hash(userData.password);

    const newUser = {
      ...userData,
      password: cypherPassword,
      id: generateId.generateId(),
    };

    await userDB.insertUser(newUser);

    const token: string = auth.generateToken({
      id: newUser.id,
      role: userData.role,
    });

    return token;
  };

  loginBusiness = async (email: string, password: string) => {
    if (!email || !password) {
      throw new Error("'email' e 'senha' são obrigatórios");
    }

    const user: user = await userDB.selectUserByEmail(email);

    if (!user) {
      throw new Error('Usuário não encontrado ou senha incorreta');
    }

    const passwordIsCorrect: boolean = await hash.compare(
      password,
      user.password
    );

    if (!passwordIsCorrect) {
      throw new Error('Usuário não encontrado ou senha incorreta');
    }

    const token: string = auth.generateToken({
      id: user.id,
      role: user.role,
    });

    return token;
  };
}

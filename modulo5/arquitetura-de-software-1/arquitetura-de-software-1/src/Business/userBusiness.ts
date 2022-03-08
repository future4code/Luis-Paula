import { Authenticator } from '../services/authenticator';
import { HashManager } from '../services/hashManager';
import { user, USER_ROLES } from '../types/user';
import { GenerateId } from '../services/idGenerator';
import { UserDataBase } from '../data/userDataBase';

const userDB = new UserDataBase();
const hash = new HashManager();
const authenticator = new Authenticator();
const idGenerator = new GenerateId();

export class UserBusiness {
  login = async (email: string, password: string) => {
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

    const token: string = authenticator.generateToken({
      id: user.id,
      role: user.role,
    });

    return token;
  };

  signup = async (
    name: string,
    nickname: string,
    email: string,
    password: string,
    role: USER_ROLES
  ) => {
    if (!name || !nickname || !email || !password || !role) {
      throw new Error(
        'Preencha os campos "name","nickname", "email" e "password"'
      );
    }

    const id: string = idGenerator.generateId();

    const cypherPassword = await hash.hash(password);

    await userDB.insertUser({
      id,
      name,
      nickname,
      email,
      password: cypherPassword,
      role,
    });

    const token: string = authenticator.generateToken({
      id,
      role: role,
    });

    return token;
  };

  getAllUsers = async (token: string) => {
    authenticator.getTokenData(token);

    return await userDB.getAllUsers();
  };

  deleteUserById = async (id: string, token: string) => {
    const verifiedToken = authenticator.getTokenData(token);

    if (verifiedToken.role !== 'ADMIN') {
      throw new Error('Apenas administradores podem deletar usuários!');
    }

    return await userDB.deleteUserById(id);
  };
}

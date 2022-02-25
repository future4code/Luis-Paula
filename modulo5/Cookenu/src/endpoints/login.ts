import { Request, Response } from 'express';
import { UserDataBase } from '../data/userDataBase';
import { Authenticator } from '../services/authenticator';
import { HashManager } from '../services/hashManager';

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.statusCode = 422;
      throw new Error(`Não foi passado 'email' e/ou 'password'`);
    }

    const userDataBase = new UserDataBase();
    const user = await userDataBase.findUserByEmail(email);

    const hashCompare = new HashManager();
    const compare = await hashCompare.Compare(password, user.getPassword());

    if (!compare) {
      res.statusCode = 401;
      throw new Error('Senha inválida');
    }

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({ id: user.getId() });

    res.status(200).send({ user, token });
  } catch (error: any) {
    res.send({ message: error.message });
  }
};

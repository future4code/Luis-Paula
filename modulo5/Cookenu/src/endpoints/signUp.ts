import { Request, Response } from 'express';
import { UserDataBase } from '../data/userDataBase';
import { User } from '../entities/User';
import { Authenticator } from '../services/authenticator';
import { HashManager } from '../services/hashManager';
import { IdGenerator } from '../services/idGenerator';

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.statusCode = 422;
      throw new Error(`Não foi passado 'name', 'email' e/ou 'password'`);
    }

    const userDataBase = new UserDataBase();
    const user = await userDataBase.findUserByEmail(email);

    if (user) {
      res.statusCode = 409;
      throw new Error('Email já cadastrado');
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generateUserId();

    const hashManager = new HashManager();
    const hashPassword = await hashManager.Hash(password);

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({ id });

    const newUser = new User(id, email, name, hashPassword);
    await userDataBase.createUser(newUser);

    res.status(201).send({ message: 'Usuário criado com sucesso', token });
  } catch (error: any) {
    res.send({ message: error.message });
  }
};

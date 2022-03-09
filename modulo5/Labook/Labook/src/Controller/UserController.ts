import { Request, Response } from 'express';
import { BaseDataBase } from '../Data/BaseDataBase';
import { user } from '../Model/User';

export class UserControler extends BaseDataBase {
  signUp = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      await BaseDataBase.connection('labook_users').insert({
        id,
        name,
        email,
        password: cypherPassword,
      });

      res.status(201).send({ message, token });
    } catch (error: any) {
      res.statusCode = 400;
      let message = error.sqlMessage || error.message;

      res.send({ message });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const queryResult: any = await BaseDataBase.connection('labook_users')
        .select('*')
        .where({ email });

      if (!queryResult[0]) {
        res.statusCode = 401;
        message = 'Invalid credentials';
        throw new Error(message);
      }

      const user: user = {
        id: queryResult[0].id,
        name: queryResult[0].name,
        email: queryResult[0].email,
        password: queryResult[0].password,
      };

      res.send({ user });
    } catch (error) {}
  };
}

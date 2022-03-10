import { Request, Response } from 'express';
import { UserBusiness } from '../Business/UserBusiness';
import { BaseDataBase } from '../Data/BaseDataBase';

const userBusiness = new UserBusiness();

export class UserControler extends BaseDataBase {
  signUp = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const token = await userBusiness.signUp({
        name,
        email,
        password,
      });

      res.status(201).send({ message: 'Usuário criado', token });
    } catch (error: any) {
      res.statusCode = 400;
      let message = error.sqlMessage || error.message;

      res.send({ message });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const user = await userBusiness.login(email, password);

      res.send(user);
    } catch (error: any) {
      res.statusCode = 400;
      let message = error.sqlMessage || error.message;

      res.send({ message });
    }
  };
}

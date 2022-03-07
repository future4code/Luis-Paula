import { Request, Response } from 'express';
import { UserBusiness } from '../Business/userBusiness';

const userBusiness = new UserBusiness();

export class UserController {
  login = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;

      const token = await userBusiness.login(email, password);

      res.send({
        message: 'Usuário logado!',
        token,
      });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  signup = async (req: Request, res: Response) => {
    try {
      const { name, nickname, email, password, role } = req.body;

      const token = userBusiness.signup(name, nickname, email, password, role);

      res.status(201).send({
        message: 'Usuário criado!',
        token,
      });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  getAllUsers = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const users = await userBusiness.getAllUsers(token);
      res.send(users).status(200);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  deleteUserById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const token = req.headers.authorization as string;

      await userBusiness.deleteUserById(id, token);

      res.status(200).send({ message: 'Usuário apagado com sucesso' });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  };
}

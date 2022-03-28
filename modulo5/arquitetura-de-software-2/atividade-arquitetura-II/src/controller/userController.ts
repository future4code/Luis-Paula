import { Request, Response } from 'express';
import { UserBusiness } from '../business/userBusiness';
import { signupInputDTO } from '../model/user';

const userBusiness = new UserBusiness();

export class UserController {
  login = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;

      const token: string = await userBusiness.loginBusiness(email, password);

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
      const input: signupInputDTO = {
        name: req.body.name,
        nickname: req.body.nickname,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
      };

      const token: string = await userBusiness.signupBusiness({
        name: input.name,
        nickname: input.nickname,
        email: input.email,
        password: input.password,
        role: input.role,
      });

      res.status(201).send({
        message: 'Usuário criado!',
        token,
      });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}

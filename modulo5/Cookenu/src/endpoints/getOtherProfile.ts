import { Request, Response } from 'express';
import { UserDataBase } from '../data/userDataBase';

export const getOtherProfile = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    const id = req.params.id;

    const userDataBase = new UserDataBase();
    const user = await userDataBase.getUsersById(id);

    if (!token) {
      res.statusCode = 422;
      throw new Error(
        `Não foi passado um 'token' de autorização, por favor verifique`
      );
    }

    res.status(200).send({ user });
  } catch (error: any) {
    res.send({ message: error.message });
  }
};

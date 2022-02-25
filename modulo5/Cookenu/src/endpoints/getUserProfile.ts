import { Request, Response } from 'express';
import { getData } from '../data/getData';
import { UserDataBase } from '../data/userDataBase';

export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const auth = getData(token);

    const userDataBase = new UserDataBase();
    const user = await userDataBase.findUserById(auth.id);

    if (!token) {
      res.statusCode = 422;
      throw new Error(
        `Não foi passado um 'token' de autorização, por favor verifique`
      );
    }

    res
      .status(200)
      .send({ id: user.getId(), email: user.getEmail(), name: user.getName() });
  } catch (error: any) {
    res.send({ message: error.message });
  }
};

import { Request, Response } from 'express';
import { getUserById } from '../data/getUserById';
import { getData } from '../data/getData';

export const getUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const token = req.headers.authorization as string;

    const auth = getData(token);

    const user = await getUserById(auth.id);

    if (user.role !== 'normal') {
      res.statusCode = 401;
      throw new Error('Usuário não autorizado');
    }

    res.status(200).send({
      id: user.id,
      email: user.email,
    });
  } catch (error: any) {
    res.send({ message: error.message });
  }
};

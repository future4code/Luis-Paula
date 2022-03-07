import { Request, Response } from 'express';
import { generateToken } from '../services/generateToken';
import { getUserByEmail } from '../data/getUserByEmail';
import { Compare } from '../services/HashManager';

export const login = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, password } = req.body;

    if (!email || email.indexOf('@') === -1) {
      res.statusCode = 422;
      throw new Error('Email Inválido');
    }

    const user = await getUserByEmail(email);
    const comparePassword = await Compare(password, user.password);

    if (!comparePassword) {
      res.statusCode = 401;
      throw new Error('Senha Inválida');
    }

    const token = generateToken({
      id: user.id,
      role: user.role,
    });

    res.status(200).send({ token, user });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: 'Internal server error' });
    } else {
      res.send({ message: error.message });
    }
  }
};

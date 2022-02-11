import { Request, Response } from 'express';
import { connection } from '../data/connection';
import { User } from '../types';

export const addNewUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = Date.now().toString();
    const { name, email, password } = req.body;

    const result: User = await connection('labecommerce_users').insert({
      id,
      name,
      email,
      password,
    });

    res.status(200).send('Usuário Criado!');
  } catch (error: any) {
    res.send({
      message: error.message || error.sqlMessage,
    });
  }
};

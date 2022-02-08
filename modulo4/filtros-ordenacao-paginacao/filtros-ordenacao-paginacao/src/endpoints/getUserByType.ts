import { Request, Response } from 'express';
import { connection } from '../data/connection';
import { toUsers } from '../data/toUsers';

export const getUsersByType = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const type = req.params.type;
    const result = await connection('aula48_exercicio').where(
      'type',
      'like',
      `${type}`
    );
    const users = result.map(toUsers);

    if (!users.length) {
      res.statusCode = 404;
      throw new Error('No user data found');
    }

    if (type === '') {
      res.statusCode = 400;
      throw new Error('No param found');
    }

    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};

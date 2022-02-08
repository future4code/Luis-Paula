import { Request, Response } from 'express';
import { connection } from '../data/connection';
import { toUsers } from '../data/toUsers';

export async function selectUserByName(name: string): Promise<any> {
  const result = await connection('aula48_exercicio').where(
    'name',
    'like',
    `%${name}%`
  );

  return result;
}

export const getUsersByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const name = req.query.name as string;
    const result = await selectUserByName(name);
    const users = result.map(toUsers);

    if (!users.length) {
      res.statusCode = 404;
      throw new Error('No user data found');
    }

    if (name === '') {
      res.statusCode = 404;
      throw new Error('No user found');
    }

    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};

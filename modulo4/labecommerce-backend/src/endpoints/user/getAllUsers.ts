import { Request, Response } from 'express';
import { connection } from '../../data/connection';
import { userInputs } from '../../data/inputs';

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const result = await connection('labecommerce_users');

    const users = result.map(userInputs);

    res.status(200).send(users);
  } catch (error: any) {
    res.send({
      message: error.message || error.sqlMessage,
    });
  }
};

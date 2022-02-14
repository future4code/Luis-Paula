import { Request, Response } from 'express';
import { getAddressInfo } from '../services/getAddressInfo';

export const getInfo = async (req: Request, res: Response) => {
  try {
    const { cep } = req.query;
    const result = await getAddressInfo(cep as string);

    if (!result) {
      throw new Error('Deu ruim no serviço getAddressInfo');
    }

    res.send(result);
  } catch (error) {
    if (error instanceof Error) {
      res.send({ error, message: error.message });
    } else {
      res.send({ message: 'Erro inesperado' });
    }
  }
};

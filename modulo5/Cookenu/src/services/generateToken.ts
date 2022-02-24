import * as jwt from 'jsonwebtoken';
import { AuthenticationData } from '../entities/interfaces';

const expiresIn = '5m';
export const generateToken = (input: AuthenticationData): string => {
  const token = jwt.sign(
    {
      id: input.id,
    },
    process.env.JWT_KEY as string,
    {
      expiresIn,
    }
  );
  return token;
};

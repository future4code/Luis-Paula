import * as jwt from 'jsonwebtoken';
import { authenticationData } from '../Model/AuthenticationData';

const expiresIn = '5m';
export class Authenticator {
  generateToken(payload: authenticationData): string {
    return jwt.sign(payload, process.env.JWT_KEY as string, {
      expiresIn,
    });
  }

  getTokenData(token: string): authenticationData {
    const result: any = jwt.verify(token, process.env.JWT_KEY as string);

    return { id: result.id };
  }
}

import * as bcrypt from 'bcryptjs';

export class HashManager {
  Hash = async (plainText: string): Promise<string> => {
    const rounds = Number(process.env.COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(plainText, salt);
    return result;
  };

  Compare = async (plainText: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(plainText, hash);
  };
}

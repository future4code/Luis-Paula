import { v4 } from 'uuid';

export class IdGenerator {
  generateUserId = (): string => {
    return v4();
  };

  generateRecipeId = (): string => {
    return v4();
  };
}

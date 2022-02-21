import { v4 } from 'uuid';

export const generateId = (): string => {
  return v4();
};
console.log('Generated Id: ', generateId());

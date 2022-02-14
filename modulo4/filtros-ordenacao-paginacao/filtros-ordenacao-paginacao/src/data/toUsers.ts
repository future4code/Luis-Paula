import { user } from '../types';

export const toUsers = (input: any): user => {
  return {
    id: input.id,
    name: input.name,
    email: input.email,
    type: input.type,
  };
};

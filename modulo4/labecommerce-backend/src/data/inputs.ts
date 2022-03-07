import { Product, User } from '../types';

export const userInputs = (input: any): User => {
  return {
    id: input.id,
    name: input.name,
    email: input.email,
    password: input.password,
  };
};

export const productInputs = (input: any): Product => {
  return {
    id: input.id,
    name: input.name,
    price: input.price,
    imageUrl: input.image_url,
  };
};

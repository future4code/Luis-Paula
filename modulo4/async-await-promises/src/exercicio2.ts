import axios from 'axios';
import { base_url } from './base_url';

//Exerício 2
//a)

// Uma função nomeada indica que é uma função unsando a palavra function e não é declarada como uma constante, assim como o que faz ser uma arrow function, que é o uso do =>, que se assemelha a uma flecha.

const getAllSubscribers = async (): Promise<any> => {
  const result = await axios.get(`${base_url}/subscribers`);
  return result.data;
};

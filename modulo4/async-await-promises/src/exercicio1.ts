import axios from 'axios';
import { base_url } from './base_url';

//Exercício 1
// a)

//Método get

//b)
//:Promise<any>

//c)

async function getAllSubscribers(): Promise<any> {
  const result = await axios.get(`${base_url}/subscribers`);
  return result.data;
}

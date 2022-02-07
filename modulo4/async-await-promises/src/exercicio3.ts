import axios from 'axios';
import { base_url } from './base_url';

//Exercício 3
//a)
// Se não fizermos o type user{}, dará erro pois ele não reconhece como um tipo.

//b)
// É indicado isso pois retorna o que queremos exatamente no objeto, podemos retornar somente o id ou o name do exemplo do exercício, e com o mapeamento podemos ter um retorno controlado.

type User = {
  id: string;
  name: string;
  email: string;
};

const getAllSubscribers = async (): Promise<User[]> => {
  const result = await axios.get(`${base_url}/subscribers`);
  return result.data.map((item: any) => {
    return {
      id: item.id,
      name: item.name,
      email: item.email,
    };
  });
};

const main = async (): Promise<void> => {
  try {
    const response = await getAllSubscribers();
    console.log(response);
  } catch (error) {
    console.log('erro');
  }
};

main();

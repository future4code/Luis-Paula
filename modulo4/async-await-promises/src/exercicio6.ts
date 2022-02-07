import axios from 'axios';
import { base_url } from './base_url';

//Exercício 6
//a)
// O Promise.all manda tudo de uma vez assim que renderiza todas as informações.

//b)
// A vantagem é que ele manda tudo de uma vez, ele não manda um de cada vez como aconteceria no caso que não é usado.

type User = {
  id: string;
  name: string;
  email: string;
};

const sendNotification = async (
  users: User[],
  message: string
): Promise<void> => {
  try {
    const promises = users.map((item) => {
      return axios.post(`${base_url}/notifications`, {
        subscriberId: item.id,
        message,
      });
    });
    await Promise.all(promises);
  } catch (error) {
    console.log('Ocorreu um erro, nada foi enviado');
  }
};

const main = async (): Promise<void> => {
  try {
    sendNotification;
  } catch (error) {
    console.log('erro');
  }
};

main();

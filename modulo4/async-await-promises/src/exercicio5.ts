import axios from 'axios';
import { base_url } from './base_url';

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
    for (const user of users) {
      await axios.post(`${base_url}/notifications`, {
        subscriberId: user.id,
        message,
      });
      console.log('Notificações enviadas com sucesso! =)');
    }
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

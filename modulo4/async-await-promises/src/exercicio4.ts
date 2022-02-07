import axios from 'axios';
import { base_url } from './base_url';

// Exercício 4

//a)
// É tipo void pois não retorna nada para o usuário, ele apenas posta.

type News = {
  title: string;
  content: string;
  date: number;
};

const news: News = {
  title: 'Lênin está de volta',
  content:
    'Para a alegria de todos Rússia revive Lênin e voltará a se chamar União Soviética.',
  date: Date.now(),
};

const createNews = async (news: News): Promise<void> => {
  return axios.put(`${base_url}/news`, news);
};

const main = async (): Promise<void> => {
  try {
    createNews(news);
  } catch (error) {
    console.log('erro');
  }
};

main();

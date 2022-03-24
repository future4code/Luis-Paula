import { BASE_URL } from '../constants/BASE_URL';
import axios from 'axios';

export const getAllPizzas = () => {
  axios
    .get(`${BASE_URL}/api/pizzas`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      alert('Encontramos um erro, tente novamente!');
      console.log(err);
    });
};

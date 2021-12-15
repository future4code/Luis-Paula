import { BASE_URL } from '../constants/urls';
import axios from 'axios';
import { goToFeed } from '../routes/coordinates';

export const login = (body, clear, navigate) => {
  axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      clear();
      goToFeed(navigate);
    })
    .catch((err) => {
      alert('Encontramos um erro, tente novamente!');
    });
};

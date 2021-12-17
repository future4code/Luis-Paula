import { BASE_URL } from '../constants/urls';
import axios from 'axios';
import { goToFeed } from '../routes/coordinates';

export const Login = (body, navigate, setButtonText) => {
  axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      goToFeed(navigate);
      setButtonText('Logout');
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};
export const SignUp = (body, navigate, setButtonText) => {
  axios
    .post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      goToFeed(navigate);
      setButtonText('Logout');
    })
    .catch((err) => {
      console.log(err.response.data.message);
    });
};

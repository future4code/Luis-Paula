import axios from 'axios';
import { BASE_URL } from '../constants/urls';

export const CreatePost = (body) => {
  axios
    .post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

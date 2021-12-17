import axios from 'axios';
import { BASE_URL } from '../constants/urls';

export const createPost = (body, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
    .then((res) => {
      alert(res.data);
      setIsLoading(false);
    })
    .catch((err) => {
      alert(err.response.data);
      setIsLoading(false);
    });
};

export const createComment = (body, id, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/posts/${id}/comments`, body, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
    .then((res) => {
      alert(res.data);
      setIsLoading(false);
    })
    .catch((err) => {
      alert(err.response.data);
      setIsLoading(false);
    });
};

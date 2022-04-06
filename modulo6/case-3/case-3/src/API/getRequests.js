import axios from 'axios';
import { Base_URL } from '../Constants/Base_URL';
import { key } from '../Constants/apiKey';

export const getMovies = (setData) => {
  axios
    .get(`${Base_URL}/movie/popular/?${key}&language=pt-BR&page=1`)
    .then((res) => {
      setData(res.data.results);
    })
    .catch((err) => {
      alert(err.message);
    });
};

export const getDetails = (setData, id) => {
  axios
    .get(`${Base_URL}/movie/${id}?${key}&language=pt-BR`)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      alert(err.message);
    });
};
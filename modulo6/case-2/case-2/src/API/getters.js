import axios from 'axios';
import { Base_URL } from '../Constants/Base_URL';

export const getLotoResults = (setData) => {
  axios
    .get(`${Base_URL}/loterias`)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      alert(err.message);
    });
};

export const getJoinResults = (setData) => {
  axios
    .get(`${Base_URL}/loterias-concursos`)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      alert(err.message);
    });
};

export const getIdResult = (setData, id) => {
  axios
    .get(`${Base_URL}/concursos/${id}`)
    .then((res) => {
      setData(res.data.numeros);
    })
    .catch((err) => {
      alert(err.message);
    });
};

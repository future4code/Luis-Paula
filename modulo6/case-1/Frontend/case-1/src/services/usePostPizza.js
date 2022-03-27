import { BASE_URL } from '../constants/BASE_URL';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const usePostPizza = (initialData, body) => {
  const [data, setData] = useState(initialData);
  useEffect(() => {
    axios
      .post(`${BASE_URL}/api/order`, body)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        alert('Encontramos um erro, tente novamente!');
        console.log(err);
      });
  }, []);
  return data;
};

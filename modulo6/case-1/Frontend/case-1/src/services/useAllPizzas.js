import { BASE_URL } from '../constants/BASE_URL';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAllPizzas = (initialData) => {
  const [data, setData] = useState(initialData);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/pizzas`)
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

import { BASE_URL } from '../constants/BASE_URL';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useGetOrder = (initialData, order_id) => {
  const [data, setData] = useState(initialData);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/order/${order_id}`)
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

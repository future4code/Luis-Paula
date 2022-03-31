import React from 'react';
import { Base_URL } from '../../Constants/Base_URL';
import useRequestData from '../../Hooks/useRequestData';
import { H1 } from './Styled';

export const MegaPage = () => {
  const data = useRequestData([], `${Base_URL}/concursos/2359`);
  const numbers = data.numeros;

  const result =
    Array.isArray(numbers) &&
    numbers.map((i) => {
      return <div>{i} </div>;
    });

  return (
    <div>
      <H1>Mega</H1>
      {result}
    </div>
  );
};

import React from 'react';
import { Base_URL } from '../../Constants/Base_URL';
import useRequestData from '../../Hooks/useRequestData';
import { H1 } from './Styled';

export const LotoFacilPage = () => {
  const data = useRequestData([], `${Base_URL}/concursos/2200`);
  const numbers = data.numeros;

  const result =
    Array.isArray(numbers) &&
    numbers.map((i) => {
      return <div>{i} </div>;
    });
  return (
    <div>
      <H1>Loto Fácil</H1>
      {result}
    </div>
  );
};

import React from 'react';
import { Base_URL } from '../../Constants/Base_URL';
import useRequestData from '../../Hooks/useRequestData';

export const MegaPage = () => {
  const data = useRequestData([], `${Base_URL}/loterias-concursos`);

  const getData = data.map((i) => {
    if (i.loteriaId === 0) {
      return (
        <div>
          {i.loteriaId}, {i.concursoId}
        </div>
      );
    }
  });

  console.log(getData);

  return (
    <div>
      <h1>Mega</h1>
      {getData}
    </div>
  );
};

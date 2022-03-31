import React, { useEffect, useState } from 'react';
import { getIdResult, getJoinResults, getLotoResults } from '../../API/getters';
import {
  colorFacil,
  colorMania,
  colorMega,
  colorQuina,
  Colors,
  colorSorte,
  colorTime,
} from '../../Constants/colors';
import { H1, MainContainer, SecondaryContainer } from './Styled';

export const HomePage = () => {
  const [loto, setLoto] = useState({ id: 0, nome: 'mega-sena' });
  const [resultLoto, setResultLoto] = useState([]);
  const [joinLoto, setjoinLoto] = useState([]);
  const [idLoto, setIdLoto] = useState([]);

  useEffect(() => {
    getLotoResults(setResultLoto);
    getJoinResults(setjoinLoto);
  }, [loto]);

  useEffect(() => {
    joinLoto.filter((i) => {
      if (i.loteriaId === loto.id) {
        getIdResult(setIdLoto, i.concursoId);
      }
    });
  }, [joinLoto]);

  const onChangeSelectedLoto = (event) => {
    resultLoto.filter((i) => {
      if (event.target.value === i.id.toString()) {
        setLoto(i);
        switch (i.id) {
          case 0:
            return Colors.colorMega;
          case 1:
            return Colors.colorQuina;
          case 2:
            return Colors.colorFacil;
          case 3:
            return Colors.colorMania;
          case 4:
            return Colors.colorTime;
          case 5:
            return Colors.colorSorte;
          default:
            break;
        }
      }
    });
  };

  const renderLoto = resultLoto.map((i) => {
    return (
      <option key={i.id} value={i.id}>
        {i.nome.toUpperCase()}
      </option>
    );
  });

  const renderNumbers =
    idLoto &&
    idLoto.map((i) => {
      return <SecondaryContainer key={i}>{i}</SecondaryContainer>;
    });

  console.log(renderLoto);
  return (
    <div>
      <div>
        <select onChange={onChangeSelectedLoto}>{renderLoto}</select>
        <H1>{loto.nome}</H1>
      </div>
      <div>
        <MainContainer>{renderNumbers}</MainContainer>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import { getIdResult, getJoinResults, getLotoResults } from '../../API/getters';
import {
  Div,
  H1,
  MainContainer,
  P,
  SecondaryContainer,
  Selector,
} from './Styled';

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
  // console.log(joinLoto);

  const onChangeSelectedLoto = (event) => {
    resultLoto.filter((i) => {
      if (event.target.value === i.id.toString()) {
        setLoto(i);
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

  console.log(idLoto.data);
  return (
    <Div cor={loto.id}>
      <Selector onChange={onChangeSelectedLoto}>{renderLoto}</Selector>
      <H1>{loto.nome.toUpperCase()}</H1>
      <div>
        <MainContainer>{renderNumbers}</MainContainer>
        <P>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA.
        </P>
      </div>
    </Div>
  );
};

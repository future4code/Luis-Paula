import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';

const ContainerPrincipal = styled.div`
  box-shadow: 1px 3px 5px black;
  margin: 0 30vw;

  h3 {
    text-align: center;
  }
`;

const ContainerMatch = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 10vh;
    width: 5vw;
    border-radius: 7vh;
    margin-bottom: 1vh;
    margin-left: 2vw;
  }

  p {
    margin-left: 1vw;
  }
`;

function Match(props) {
  const baseUrl =
    'https://us-central1-missao-newton.cloudfunctions.net/astroMatch';
  const aluno = 'luis';

  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    getMatches();
  }, [setPessoas]);

  const onClickClear = () => {
    clearEverything(getMatches());
  };

  const getMatches = () => {
    axios
      .get(`${baseUrl}/${aluno}/matches`)
      .then((res) => {
        console.log(res.data);
        setPessoas(res.data.matches);
        const matches = res.data.matches;
        return matches;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clearEverything = () => {
    axios
      .put(`${baseUrl}/${aluno}/clear`)
      .then((res) => {
        alert('Contatos apagados com sucesso');
      })
      .catch((err) => {
        alert('Erro! Tente novamente.');
      });
  };

  return (
    <div>
      <ContainerPrincipal>
        <h3>AstroMatch</h3>
        <HomeIcon
          onClick={props.irParaHome}
          fontSize="large"
          color="secondary"
        />
        {pessoas.map((pessoa) => {
          return (
            <div>
              <ContainerMatch key={pessoa.id}>
                <img src={pessoa.photo} alt="foto" />
                <p>{pessoa.name}</p>
              </ContainerMatch>
            </div>
          );
        })}
      </ContainerPrincipal>
      <button onClick={onClickClear}>Limpar Matches</button>
    </div>
  );
}

export default Match;

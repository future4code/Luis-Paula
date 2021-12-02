import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ContainerPrincipal = styled.div`
  box-shadow: 1px 3px 5px black;
  margin: 0 30vw;

  h3 {
    text-align: center;
  }
`;

const ContainerMatch = styled.p`
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
  const aluno = 'Luis';

  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    getMatches();
  }, [setPessoas]);

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

  return (
    <div>
      <h1>Eu sou o Match</h1>

      <ContainerPrincipal>
        <h3>Astro-Match</h3>
        <button onClick={props.irParaHome}>Home</button>
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
    </div>
  );
}

export default Match;

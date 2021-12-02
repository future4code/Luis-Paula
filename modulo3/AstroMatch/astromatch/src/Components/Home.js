import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 3px 5px black;
  align-items: center;
  margin: 0 62vh;

  img {
    align-items: center;
    width: 35vw;
    height: 70vh;
  }
`;

function Home(props) {
  const baseUrl =
    'https://us-central1-missao-newton.cloudfunctions.net/astroMatch';
  const aluno = 'Luis';
  const autorizacao = 'luis-paula-carver';

  const [parametro, setParametro] = useState([]);
  const [idUsuario, setIdUsuario] = useState('');
  const [like, setLike] = useState(false);

  useEffect(() => {
    chooseProfile();
  }, [like]);
  useEffect(() => {
    choosePerson();
  }, [idUsuario]);
  useEffect(() => {
    clearEverything();
  }, []);

  const onClickLike = (like) => {
    setLike(like);
    choosePerson();
  };

  const chooseProfile = () => {
    axios
      .get(`${baseUrl}/${aluno}/person`)
      .then((res) => {
        console.log(res.data.profile);
        setParametro(res.data.profile);
        setIdUsuario(res.data.profile.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const choosePerson = () => {
    const body = { id: idUsuario, choice: like };
    axios
      .post(`${baseUrl}/${aluno}/choose-person`, body, {
        headers: { Authorization: `${autorizacao}` },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.isMatch) {
          console.log('Match');
        } else {
          console.log('Não Match');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const clearEverything = () => {
    axios
      .put(`${baseUrl}/${aluno}/clear`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Eu sou o Home</h1>
      <Card>
        <h3>AstroMatch</h3>
        <button onClick={props.irParaMatch}>Match</button>
        <img src={parametro.photo} alt="foto" />
        <p>
          {parametro.name}, {parametro.age}
        </p>
        <p>{parametro.bio}</p>
        <button
          onClick={() => {
            onClickLike(true);
          }}
        >
          Like
        </button>
        <button
          onClick={() => {
            onClickLike(false);
          }}
        >
          Dislike
        </button>
      </Card>
    </div>
  );
}

export default Home;

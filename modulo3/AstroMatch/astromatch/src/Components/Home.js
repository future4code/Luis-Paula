import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home(props) {
  const baseUrl =
    'https://us-central1-missao-newton.cloudfunctions.net/astroMatch';
  const aluno = 'Luis';
  const autorizacao = 'luis-paula-carver';

  const [parametro, setParametro] = useState([]);
  const [segundoParametro, setSegundoParametro] = useState({});

  useEffect(() => {
    chooseProfile();
  }, []);
  useEffect(() => {
    choosePerson();
  }, []);
  useEffect(() => {
    clearEverything();
  }, []);

  const chooseProfile = () => {
    axios
      .get(`${baseUrl}/${aluno}/person`)
      .then((res) => {
        console.log(res.data.profile.name);
        setParametro(res.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const choosePerson = () => {
    const body = '';
    axios
      .post(`${baseUrl}/${aluno}/choose-person`, body, {
        headers: { Authorization: `${autorizacao}` },
      })
      .then((res) => {
        console.log(res.data);
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
      <div>
        {parametro.map((perfil) => {
          return <div key={perfil.id}>{perfil.name}</div>;
        })}
      </div>
      <button onClick={props.irParaMatch}>Match</button>
    </div>
  );
}

export default Home;

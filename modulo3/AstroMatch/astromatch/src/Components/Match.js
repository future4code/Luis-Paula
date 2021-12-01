import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Match(props) {
  const baseUrl =
    'https://us-central1-missao-newton.cloudfunctions.net/astroMatch';
  const aluno = 'Luis';

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = () => {
    axios
      .get(`${baseUrl}/${aluno}/matches`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Eu sou o Match</h1>
      <button onClick={props.irParaHome}>Home</button>
    </div>
  );
}

export default Match;

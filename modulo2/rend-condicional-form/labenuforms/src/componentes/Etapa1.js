import React from 'react';

class Etapa1 extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <h1>DADOS GERAIS</h1>
        <p>Qual é o seu nome completo?</p>
        <input />
        <p>Qual a sua idade? </p>
        <input />
        <p>Qual o seu email?</p>
        <input />
        <p>Qual o seu nível de escolaridade?</p>
        <select>
          <option>Ensino médio incompleto</option>
          <option>Ensino médio completo</option>
          <option>Ensino superior incompleto</option>
          <option>Ensino superior completo</option>
        </select>
      </div>
    );
  }
}

export default Etapa1;

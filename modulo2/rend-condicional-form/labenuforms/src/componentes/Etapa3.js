import React from 'react';

class Etapa3 extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <h1>INFORMAÇÕES DE ENSINO</h1>
        <p>Por que você não terminou um curso de graduação?</p>
        <input />
        <p>Você fez algum curso complementar?</p>
        <select>
          <option>Curso Técnico</option>
          <option>Curso de Inglês</option>
          <option>Nenhum curso</option>
        </select>
      </div>
    );
  }
}
export default Etapa3;

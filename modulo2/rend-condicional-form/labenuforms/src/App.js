import styled from 'styled-components';
import React from 'react';
import Etapa1 from './componentes/Etapa1';
import Etapa2 from './componentes/Etapa2';
import Etapa3 from './componentes/Etapa3';
import Agradecimentos from './componentes/Agradecimentos';

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  box-shadow: 3px 5px 10px black;
  margin: 100px 500px;
  padding: 20px;
  background-color: #1212;
  font-weight: 500;
`;

class App extends React.Component {
  state = {
    etapa: 1,
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;

      case 2:
        return <Etapa2 />;

      case 3:
        return <Etapa3 />;

      case 4:
        return <Agradecimentos />;

      default:
        return 'Página não encontrada';
    }
  };

  proximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  };

  render() {
    return (
      <MainContainer>
        {this.renderizaEtapa()}
        {/* this.renderizaEtapa() precisa do () pq é uma função */}
        <br />
        <button onClick={this.proximaEtapa}>Próxima Etapa</button>
      </MainContainer>
    );
  }
}

export default App;

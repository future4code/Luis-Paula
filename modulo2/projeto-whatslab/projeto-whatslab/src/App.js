import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  border: 1px solid black;
  height: 99.5vh;
  width: 40vw;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 30vw;
  background-color: #f2f2f2;
`;

const ContainerChat = styled.div`
  display: flex;
`;

const ContainerMensagem = styled.input`
  width: 25vw;
`;

const ContainerUsuarioChat = styled.line`
  color: #0b265a;
  font-weight: bold;
`;

const ContainerMensagemChat = styled.line`
  color: #fa7b01;
`;

class App extends React.Component {
  state = {
    chat: [{ usuario: '', mensagem: '' }],

    valorInputUsuario: '',
    valorInputMensagem: '',
  };

  adicionaMensagem = () => {
    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem,
    };
    const novasMensagens = [...this.state.chat, novaMensagem];

    this.setState({ chat: novasMensagens });
    this.setState({ valorInputUsuario: '', valorInputMensagem: '' });
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };
  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  render() {
    return (
      <MainContainer>
        {this.state.chat.map((inputs) => {
          return (
            <p>
              <ContainerUsuarioChat>{inputs.usuario}: </ContainerUsuarioChat>
              <ContainerMensagemChat> {inputs.mensagem}</ContainerMensagemChat>
            </p>
          );
        })}
        <ContainerChat>
          <input
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={'Usuário'}
          />
          <ContainerMensagem
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            placeholder={'Mensagem'}
          />
          <button onClick={this.adicionaMensagem}>Enviar</button>
        </ContainerChat>
      </MainContainer>
    );
  }
}

export default App;

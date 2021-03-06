import React from 'react';
import styled from 'styled-components';
import './styles.css';

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [
      {
        id: Date.now(),
        texto: 'Texto da primeira tarefa',
        completa: false,
      },
      {
        id: Date.now(),
        texto: 'Texto da segunda tarefa',
        completa: true,
      },
    ],
    inputValue: '',
    filtro: 'pendentes',
  };

  componentDidUpdate() {}

  componentDidMount() {}

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };
    const adicionarNovaTarefa = [...this.state.tarefas, novaTarefa];

    this.setState({ tarefas: adicionarNovaTarefa });
    this.setState({ inputValue: '' });
  };

  selectTarefa = (id) => {
    const selecionarTarefa = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const novaPropriedade = {
          ...tarefa,
          completa: !tarefa.completa,
        };
        return novaPropriedade;
      } else {
        return tarefa;
      }
    });
    this.setState({ tarefas: selecionarTarefa });
  };

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

  salvarLocalStorage = () => {
    localStorage.setItem('id', this.state.id);
    localStorage.setItem('texto', this.state.texto);
    localStorage.setItem('completa', this.state.completa);
  };

  buscarLocalStorage = () => {
    const idStorage = localStorage.getItem('id');
    const textoStorage = localStorage.getItem('texto');
    const completaStorage = localStorage.getItem('completa');

    this.setState({
      id: idStorage || '',
      texto: textoStorage || '',
      completa: completaStorage || '',
    });
  };

  componentDidMount() {
    this.buscarLocalStorage();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState === this.state.tarefas) {
      this.setState({ tarefas: this.salvarLocalStorage() });
    }
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa;
        case 'completas':
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;

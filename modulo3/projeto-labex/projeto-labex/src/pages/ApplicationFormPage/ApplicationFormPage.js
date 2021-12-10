import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MenuItem, Select } from '@mui/material';
import axios from 'axios';
import { Buttons, Container, MainContainer } from './StyledApplication';

function Form() {
  const name = 'luis';
  const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX';
  const [component, setComponent] = useState([]);
  const [comp, setComp] = useState('');

  const history = useHistory();
  const GoToHome = () => {
    history.push('/');
  };
  const GoToTrips = () => {
    history.push('/trips/list');
  };

  const onClickSubmit = (event) => {
    event.preventDefault();
    console.log('enviado');
  };

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    axios
      .get(`${baseUrl}/${name}/trips`)
      .then((res) => {
        console.log(res.data);
        setComponent(res.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MainContainer>
      <Buttons>
        <Button variant="contained" onClick={GoToHome}>
          Página Inicial
        </Button>
        <Button variant="contained" onClick={GoToTrips}>
          Viagens
        </Button>
      </Buttons>
      <Container onSubmit={onClickSubmit}>
        <p>
          <select label="Viagem" id="viagem" name="Viagens" value="a" required>
            <option
              value={comp}
              onChange={(e) => {
                setComp(e.target.value);
              }}
            >
              {component.name}
            </option>
          </select>
        </p>
        <p>
          <Box>
            <TextField fullWidth label="Nome" id="nome" required />
          </Box>
        </p>
        <p>
          <Box>
            <TextField fullWidth label="Idade" id="idade" required />
          </Box>
        </p>
        <p>
          <Box>
            <TextField fullWidth label="Profissão" id="profissao" required />
          </Box>
        </p>
        <p>
          <Box>
            <TextField
              fullWidth
              label="Texto de Candidatura"
              id="texto"
              required
            />
          </Box>
        </p>
        <p>
          <select label="Viagem" id="viagem" value="a" required>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
            <option value="e">e</option>
          </select>
        </p>
        <Button variant="contained" type="submit">
          Enviar
        </Button>
      </Container>
    </MainContainer>
  );
}

export default Form;

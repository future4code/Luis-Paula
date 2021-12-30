import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';
import axios from 'axios';
import { Box, TextField } from '@mui/material';
import { Buttons, Container, MainContainer } from './StyledTripPage';

function Create() {
  const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX';
  const name = 'luis';

  const history = useHistory();
  const GoToAdmin = () => {
    history.push('/admin/trips/list');
  };
  const GoToHome = () => {
    history.push('/');
  };

  const onClickSubmit = (event) => {
    event.preventDefault();
    console.log('enviado');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === null) {
      console.log('não está logado');
      history.push('/login');
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .post(`${baseUrl}/${name}/trips`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <MainContainer>
      <Buttons>
        <Button variant="contained" onClick={GoToHome}>
          Página Inicial
        </Button>
        <Button variant="contained" onClick={GoToAdmin}>
          Administração
        </Button>
      </Buttons>
      <Container onSubmit={onClickSubmit}>
        <p>
          <Box>
            <TextField fullWidth label="Nome da Viagem" id="nome" required />
          </Box>
        </p>
        <p>
          <Box>
            <TextField fullWidth label="Planeta" id="planeta" required />
          </Box>
        </p>
        <TextField type="date" />
        <p>
          <Box>
            <TextField
              fullWidth
              label="Duração em dias"
              id="duracao"
              required
            />
          </Box>
        </p>
        <p>
          <Box>
            <TextField
              fullWidth
              label="Descrição da Viagem"
              id="texto"
              required
            />
          </Box>
        </p>
        <Buttons>
          <Button variant="contained" type="submit">
            Enviar
          </Button>
        </Buttons>
      </Container>
    </MainContainer>
  );
}

export default Create;

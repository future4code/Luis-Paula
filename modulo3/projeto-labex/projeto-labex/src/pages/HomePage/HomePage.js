import React from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';
import { Buttons, Container, MainContainer } from './StyledHomePage';

function HomePage() {
  const history = useHistory();
  const GoToList = () => {
    history.push('/trips/list');
  };
  const GoToAdmin = () => {
    history.push('/admin/trips/list');
  };
  return (
    <MainContainer>
      <Container>
        <h1>Página Inicial</h1>
        <Buttons>
          <Button variant="contained" onClick={GoToList}>
            Viagens
          </Button>
          <Button variant="contained" onClick={GoToAdmin}>
            Administração
          </Button>
        </Buttons>
      </Container>
    </MainContainer>
  );
}

export default HomePage;

import React from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';

function Details() {
  const history = useHistory();
  const GoToAdmin = () => {
    history.push('/admin/trips/list');
  };
  const GoToHome = () => {
    history.push('/');
  };
  return (
    <div>
      <p>Detalhes da Viagem</p>
      <Button variant="contained" onClick={GoToHome}>
        Home
      </Button>
      <Button variant="contained" onClick={GoToAdmin}>
        Admin
      </Button>
    </div>
  );
}

export default Details;

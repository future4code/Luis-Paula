import React from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';

function Create() {
  const history = useHistory();
  const GoToAdmin = () => {
    history.push('/admin/trips/list');
  };
  const GoToHome = () => {
    history.push('/');
  };
  return (
    <div>
      <p>Criar Viagens</p>
      <Button variant="contained" onClick={GoToHome}>
        Home
      </Button>
      <Button variant="contained" onClick={GoToAdmin}>
        Admin
      </Button>
    </div>
  );
}

export default Create;

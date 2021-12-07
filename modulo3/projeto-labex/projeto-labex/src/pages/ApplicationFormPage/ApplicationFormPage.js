import React from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MenuItem, Select } from '@mui/material';

function Form() {
  const history = useHistory();
  const GoToHome = () => {
    history.push('/');
  };
  const GoToTrips = () => {
    history.push('/trips/list');
  };

  return (
    <div>
      <p>Formulário</p>
      <Button variant="contained" onClick={GoToHome}>
        Home
      </Button>
      <Button variant="contained" onClick={GoToTrips}>
        Viagens
      </Button>
      <div>
        <p>
          <Select fullWidth label="Viagem" id="viagem" value="">
            <MenuItem>a</MenuItem>
            <MenuItem>b</MenuItem>
            <MenuItem>c</MenuItem>
            <MenuItem>d</MenuItem>
          </Select>
        </p>
        <p>
          <Box>
            <TextField fullWidth label="Nome" id="nome" />
          </Box>
        </p>
        <p>
          <Box>
            <TextField fullWidth label="Idade" id="idade" />
          </Box>
        </p>
        <p>
          <Box>
            <TextField fullWidth label="Profissão" id="profissao" />
          </Box>
        </p>
        <p>
          <Box>
            <TextField fullWidth label="Texto de Candidatura" id="texto" />
          </Box>
        </p>
        <p>
          <Select fullWidth label="País" id="pais" value="">
            <MenuItem>a</MenuItem>
            <MenuItem>b</MenuItem>
            <MenuItem>c</MenuItem>
            <MenuItem>d</MenuItem>
          </Select>
        </p>
      </div>
    </div>
  );
}

export default Form;

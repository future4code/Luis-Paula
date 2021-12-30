import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';
import { Input } from '@mui/material';
import axios from 'axios';
import { Buttons, Container, MainContainer } from './StyledLogin';

function Login() {
  const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX';
  const name = 'luis';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const GoToAdmin = () => {
    history.push('/admin/trips/list');
  };
  const GoToHome = () => {
    history.push('/');
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitLogin = () => {
    console.log(email, password);
    const body = {
      email: email,
      password: password,
    };
    axios
      .post(`${baseUrl}/${name}/login`, body)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        history.push('/admin/trips/list');
      })
      .catch((err) => {
        alert('Ops Ocorreu um erro :( tente novamente!');
      });
  };
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
      <Container>
        <h2>Login</h2>
        <p>
          <Input
            placeholder="Email"
            type="email"
            onChange={onChangeEmail}
            value={email}
          />
        </p>
        <p>
          <Input
            placeholder="Senha"
            type="password"
            onChange={onChangePassword}
            value={password}
          />
        </p>
        <Button variant="contained" onClick={submitLogin}>
          Enviar
        </Button>
      </Container>
    </MainContainer>
  );
}

export default Login;

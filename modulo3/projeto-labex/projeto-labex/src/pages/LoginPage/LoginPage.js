import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';
import { Input } from '@mui/material';
import axios from 'axios';

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
        console.log('certo', res.data);
        localStorage.setItem('token', res.data.token);
        history.push('/admin/trips/list');
      })
      .catch((err) => {
        console.log('errado', err.response);
      });
  };
  return (
    <div>
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
      <button onClick={submitLogin}>Enviar</button>
      <Button variant="contained" onClick={GoToHome}>
        Home
      </Button>
      <Button variant="contained" onClick={GoToAdmin}>
        Admin
      </Button>
    </div>
  );
}

export default Login;

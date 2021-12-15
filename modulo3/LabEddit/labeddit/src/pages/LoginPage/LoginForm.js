import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { login } from '../../services/users';

const LoginForm = () => {
  const [form, handleInputChange, clear] = useForm({ email: '', password: '' });
  const navigate = useNavigate;

  const seePassword = () => {
    const pass = document.getElementById('password');
    if (pass.type === 'password') {
      pass.type = 'text';
    } else {
      pass.type = 'password';
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(form, clear, navigate);
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        type="email"
        name="email"
        value={form.email}
        onChange={handleInputChange}
        fullWidth
        margin={'dense'}
        required
      />
      <TextField
        id="password"
        label="Senha"
        variant="outlined"
        type="password"
        name="password"
        value={form.password}
        onChange={handleInputChange}
        fullWidth
        margin={'dense'}
        required
      />
      <p>
        <input type="checkbox" onClick={seePassword} />
        Mostrar Senha
      </p>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        fullWidth
        margin={'dense'}
      >
        Fazer Login
      </Button>
    </form>
  );
};
export default LoginForm;

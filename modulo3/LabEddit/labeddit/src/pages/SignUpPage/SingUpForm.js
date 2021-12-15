import { Button, TextField } from '@material-ui/core';
import React from 'react';
import useForm from '../../hooks/useForm';

const SignUpForm = () => {
  const [form, handleInputChange, clear] = useForm({
    name: '',
    email: '',
    password: '',
  });

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
    console.log(form);
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        id="name"
        label="Nome"
        variant="outlined"
        type="text"
        name="name"
        value={form.name}
        onChange={handleInputChange}
        fullWidth
        margin={'dense'}
        required
      />
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
        Cadastrar-se
      </Button>
    </form>
  );
};
export default SignUpForm;

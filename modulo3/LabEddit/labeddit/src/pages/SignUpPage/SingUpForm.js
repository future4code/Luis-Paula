import { Button, CircularProgress, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import { SignUp } from '../../services/users';

const SignUpForm = ({ setButtonText }) => {
  const [form, handleInputChange, clear] = useForm({
    username: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  useUnprotectedPage();

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
    SignUp(form, navigate, setButtonText, setIsLoading);
    clear();
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        id="username"
        label="Nome de usuário"
        variant="outlined"
        type="text"
        name="username"
        value={form.username}
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
        {isLoading ? (
          <CircularProgress color="inherit" size={24} />
        ) : (
          <>Cadastrar-se</>
        )}
      </Button>
    </form>
  );
};
export default SignUpForm;

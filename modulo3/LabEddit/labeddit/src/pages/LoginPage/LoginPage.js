import { Button } from '@material-ui/core';
import React from 'react';
import LoginForm from './LoginForm';
import { MainContainer, SignUpButtonContainer } from './StyledLogin';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <MainContainer>
      <h1>Login</h1>
      <LoginForm />
      <SignUpButtonContainer>
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <Button type="submit" color="secondary" fullWidth margin={'dense'}>
            Ainda não tem conta? Cadastre-se!
          </Button>
        </Link>
      </SignUpButtonContainer>
    </MainContainer>
  );
};
export default LoginPage;

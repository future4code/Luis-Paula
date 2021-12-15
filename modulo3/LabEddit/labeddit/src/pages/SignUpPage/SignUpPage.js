import React from 'react';
import { MainContainer } from './StyledSingUp';
import SignUpForm from './SingUpForm';

const SignUpPage = () => {
  return (
    <MainContainer>
      <h1>Cadastre-se</h1>
      <SignUpForm />
    </MainContainer>
  );
};
export default SignUpPage;

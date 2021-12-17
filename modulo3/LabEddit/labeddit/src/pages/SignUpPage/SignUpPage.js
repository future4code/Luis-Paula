import React from 'react';
import { MainContainer } from './StyledSingUp';
import SignUpForm from './SingUpForm';

const SignUpPage = ({ setButtonText }) => {
  return (
    <MainContainer>
      <h1>Cadastre-se</h1>
      <SignUpForm setButtonText={setButtonText} />
    </MainContainer>
  );
};
export default SignUpPage;

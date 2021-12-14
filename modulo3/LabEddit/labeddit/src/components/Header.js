import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { StyledButton, StyledToolbar } from './Styled';

const Header = () => {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button color="secondary">
            <h3>LABEDDIT</h3>
          </Button>
        </Link>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <StyledButton color="neutralColor">Login</StyledButton>
        </Link>
        <Link to="/post/:id" style={{ textDecoration: 'none' }}>
          <StyledButton color="neutralColor">Post</StyledButton>
        </Link>
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <StyledButton color="neutralColor">Inscreva-se</StyledButton>
        </Link>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;

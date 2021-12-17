import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { Link, useNavigate } from 'react-router-dom';
import { StyledButton, StyledToolbar } from './Styled';
import { goToLogin } from '../routes/coordinates';

const Header = ({ buttonText, setButtonText }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
  };

  const buttonAction = () => {
    if (token) {
      logout();
      setButtonText('Login');
      goToLogin(navigate);
    } else {
      goToLogin(navigate);
    }
  };

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button color="secondary">
            <h3>LABEDDIT</h3>
          </Button>
        </Link>
        <StyledButton color="secondary" onClick={buttonAction}>
          {buttonText}
        </StyledButton>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;

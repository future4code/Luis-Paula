import { Fab } from '@material-ui/core';
import styled from 'styled-components';

export const Cards = styled.div`
  border: 3px solid black;
  margin: 5px;
`;

export const AddRecipeButton = styled(Fab)`
  position: fixed !important;
  right: 20px;
  bottom: 20px;
  z-index: 3;
`;

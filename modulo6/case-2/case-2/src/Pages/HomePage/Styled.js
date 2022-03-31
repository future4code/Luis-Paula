import styled from 'styled-components';
import { Colors } from '../../Constants/colors';

export const H1 = styled.h1`
  font-family: 'Montserrat';
  background-color: ${Colors};
  margin-top: 40vh;
`;

export const MainContainer = styled.div`
  display: flex;
  border: 1px solid black;
  margin-left: 40vw;
  margin-bottom: 20vh;
`;

export const SecondaryContainer = styled.div`
  border: 1px solid black;
  border-radius: 100%;
  margin: 1vh;
  font-size: 5vh;
`;

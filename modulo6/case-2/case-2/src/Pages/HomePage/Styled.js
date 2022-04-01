import styled from 'styled-components';

export const Colors = {
  colorMega: '#6befa3',
  colorQuina: '#8666ef',
  colorFacil: '#dd7ac6',
  colorMania: '#ffab64',
  colorTime: '#5aad7d',
  colorSorte: '#bfaf83',
};

const pegarCor = (cor) => {
  if (cor === 0) {
    return `background-color: ${Colors.colorMega}`;
  }
  if (cor === 1) {
    return `background-color: ${Colors.colorQuina}`;
  }
  if (cor === 2) {
    return `background-color: ${Colors.colorFacil}`;
  }
  if (cor === 3) {
    return `background-color: ${Colors.colorMania}`;
  }
  if (cor === 4) {
    return `background-color: ${Colors.colorTime}`;
  }
  if (cor === 5) {
    return `background-color: ${Colors.colorSorte}`;
  }
};

export const H1 = styled.h1`
  font-family: 'Montserrat';
  /* background-color: blue; */
  margin-top: 50vh;
  margin-left: -8vw;
  /* padding: 40vh 20vw 30vh 0; */
  /* padding-right: 0vw; */
`;

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 40vh 60vw 40vh 0vw;
  background-color: #efefef;
  margin-top: 0vh;
  border-bottom-left-radius: 20%;
  border-top-left-radius: 20%;
`;

export const SecondaryContainer = styled.div`
  font-family: 'Montserrat';
  border: 1px solid white;
  border-radius: 100%;
  margin: 1vh;
  font-size: 4vh;
  background-color: white;
`;

export const Div = styled.div`
  display: flex;
  align-items: flex-start;
  ${({ cor }) => pegarCor(cor)}
`;

export const Selector = styled.select`
  margin-left: 10vw;
  margin-top: 15vh;
  width: 10vw;
  height: 5vh;
`;

export const P = styled.p`
  font-family: 'Montserrat';
  position: absolute;
  margin-top: -15vh;
  margin-left: 15vw;
`;

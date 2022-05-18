import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: gray;
  text-align: center;
`;

export const SecondaryContainer = styled.div`
  border: 1px solid black;
  margin-top: 15px;
  color: white;
  background-color: black;
  margin-left: 33vw;
  margin-right: 33vw;
`;

export const Button = styled.button`
  background-color: white;

  :hover {
    background-color: black;
    color: white;
  }
`;

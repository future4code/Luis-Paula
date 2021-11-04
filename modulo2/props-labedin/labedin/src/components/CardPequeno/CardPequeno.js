import React, { Component } from 'react';
import styled from 'styled-components';

const ContainerPequeno = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 10px 10px;
  margin-bottom: 50px;
`;

const CaixasContainerPequeno = styled.div`
  display: flex;
  flex-direction: column;
`;

const H2ContainerPequeno = styled.h2`
  border: 1px solid black;
  display: grid;
  justify-content: start;
  padding: 10px 200px 10px 0px;
  margin: 5px;
`;

const CardPequeno = (props) => {
  return (
    <ContainerPequeno>
      <CaixasContainerPequeno>
        <H2ContainerPequeno>{props.email}</H2ContainerPequeno>
        <H2ContainerPequeno>{props.endereço}</H2ContainerPequeno>
      </CaixasContainerPequeno>
    </ContainerPequeno>
  );
};

export default CardPequeno;

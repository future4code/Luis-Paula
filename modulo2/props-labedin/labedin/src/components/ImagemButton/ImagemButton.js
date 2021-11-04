import React from 'react';
import styled from 'styled-components';

const ContainerImagem = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 50px;
  width: 200px;
  padding: 15px 30px;
  margin: 10px auto;
`;

const ImagensDoContainerImagem = styled.img`
  width: 30px;
  margin-right: 10px;
`;

function ImagemButton(props) {
  return (
    <ContainerImagem>
      <ImagensDoContainerImagem src={props.imagem} />
      <p>{props.texto}</p>
    </ContainerImagem>
  );
}

export default ImagemButton;

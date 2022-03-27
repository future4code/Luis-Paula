import React from 'react';
import { useAllPizzas } from '../../services/useAllPizzas';
import { useNavigate } from 'react-router-dom';
import { goToOrders } from '../../routes/Coordinates';
import {
  Button,
  MainContainer,
  SecondaryContainer,
} from '../OrdersPage/Styled';

export const PizzasPage = () => {
  const navigate = useNavigate();
  const pizza = useAllPizzas([]);

  const orders = () => {
    goToOrders(navigate);
  };

  const pizzaCards = Object.keys(pizza).map((key) => {
    return pizza[key].map((index) => {
      return (
        <SecondaryContainer>
          <p>Nome: {index.name}</p>
          <p>Preço: {index.price}</p>
          <p>Ingredientes: {index.ingredients}</p>
        </SecondaryContainer>
      );
    });
  });

  return (
    <MainContainer>
      <Button onClick={orders}>Pedidos</Button>
      <h1>Pizzas</h1>
      {pizzaCards}
    </MainContainer>
  );
};

import React from 'react';
import { useAllOrders } from '../../services/useAllOrders';
import { useNavigate } from 'react-router-dom';
import { goToOrder, goToPizzas } from '../../routes/Coordinates';
import { Button, MainContainer, SecondaryContainer } from './Styled';

export const OrdersPage = () => {
  const navigate = useNavigate();

  const pizzas = () => {
    goToPizzas(navigate);
  };

  const selectOrder = (id) => {
    goToOrder(navigate, id);
  };
  const orders = useAllOrders([]);

  const ordersCards = Object.keys(orders).map((key) => {
    return orders[key].map((index) => {
      return (
        <SecondaryContainer key={index.order_id}>
          <p>Id do Pedido:{index.order_id}</p>
          <p>Pizza: {index.name}</p>
          <p>Quantidade: {index.quantity}</p>
          <p>Preço: {index.price}</p>
          <p>Preço total: {index.quantity * index.price}</p>
          <Button
            onClick={() => {
              selectOrder(index.order_id);
            }}
          >
            Detalhes do Pedido: {index.order_id}
          </Button>
        </SecondaryContainer>
      );
    });
  });

  return (
    <MainContainer>
      <Button onClick={pizzas}>Pizzas</Button>
      <h1>Orders</h1>
      <div>{ordersCards}</div>
    </MainContainer>
  );
};

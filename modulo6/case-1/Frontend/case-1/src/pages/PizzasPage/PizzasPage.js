import React from 'react';
import { useAllPizzas } from '../../services/getPizzas';

export const PizzasPage = () => {
  const pizza = useAllPizzas([]);

  const pizzaCards = Object.keys(pizza).map((key) => {
    return pizza[key].map((index) => {
      return (
        <div>
          <p>{index.name}</p>
          <p>{index.price}</p>
          <p>{index.ingredients}</p>
        </div>
      );
    });
  });

  return (
    <div>
      <h1>Pizzas</h1>
      <div>{pizzaCards}</div>
    </div>
  );
};

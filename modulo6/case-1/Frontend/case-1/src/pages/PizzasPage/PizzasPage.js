import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { getAllPizzas } from '../../services/getPizzas';

export const PizzasPage = () => {
  // const navigate = useNavigate();
  console.log(getAllPizzas());
  return (
    <div>
      <h1>Pizzas</h1>
    </div>
  );
};

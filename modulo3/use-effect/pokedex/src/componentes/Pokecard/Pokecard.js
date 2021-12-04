import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PokeCard(props) {
  const [pokemon, setPokemon] = useState({});

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(pokeName);
  };
  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, [props.pokemon]);

  const pokeDex = pokemon;

  return (
    <div>
      <p>{pokeDex.name}</p>
      <p>{pokeDex.weight} Kg</p>
      {pokeDex.types && <p>{pokeDex.types[0].type.name}</p>}
      {pokeDex.sprites && (
        <img src={pokeDex.sprites.front_default} alt={pokeDex.name} />
      )}
    </div>
  );
}

export default PokeCard;

import React, { useState, useEffect } from 'react';

function PokemonDetails({ name }) {
  const [pokemonData, setPokemonData] = useState(null);

  async function fetchPokemonData() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    setPokemonData(data);
  }

  useEffect(() => {
    fetchPokemonData();
  }, []);

  return (
    <div>
      {pokemonData ? (
        <div>
          <h4>{pokemonData.name}</h4>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default PokemonDetails;



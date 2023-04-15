import React, { useState, useEffect } from 'react';
import PokemonDetails from './components/PokemonDetails';
import { Grid } from '@mui/material';

function App() {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);

  async function fetchPokemonListByType(type) {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const data = await response.json();
    setPokemonList(data.pokemon.map((p) => p.pokemon));
  }

  async function fetchTypes() {
    const response = await fetch('https://pokeapi.co/api/v2/type');
    const data = await response.json();
    setTypes(data.results);
  }

  function handleTypeClick(type) {
    setSelectedType(type.name);
    fetchPokemonListByType(type.name);
  }

  useEffect(() => {
    fetchTypes();
  }, []);

  return (
    <div>
      <h2>Tipos de Pokémon:</h2>
      <ul>
        {types.map((type) => (
          <li key={type.name}>
            <button onClick={() => handleTypeClick(type)}>{type.name}</button>
          </li>
        ))}
      </ul>
      {selectedType && (
        <div>
          <h3>Pokémon do tipo {selectedType}:</h3>
          <Grid container spacing={2}>
            {pokemonList.map((pokemon) => (
              <Grid key={pokemon.name} item xs={3}>
                <PokemonDetails name={pokemon.name} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
}

export default App;


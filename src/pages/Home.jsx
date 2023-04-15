import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import PokemonCard from '../components';
import PokemonList from '../components/PokemonList';
import { Container } from '@mui/material';
import { Grid } from  '@mui/material';
import { getTypes } from '../Api';

export const Home = () => {
  const [types, setTypes] = useState([]);

  useEffect (() => {
    getTypes().then((types) => {
      setTypes(types);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Container maxWidth="xg">
        <Grid container>
          {types.map((type) => (
            <Grid item xs={3} key={type.name}>
              <PokemonCard name={type.name} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <PokemonList />
    </div>
  );
};

export default Home;

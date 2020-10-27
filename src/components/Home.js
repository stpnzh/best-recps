import React from 'react';
import { Container } from 'react-bootstrap';

import recipes from './recipes.json';
import Cards from './Cards';


const Home = () => {
  return (
    <Container>
      <h2 style={{ paddingTop: `2rem`, paddingBottom: `1rem`, paddingLeft: `1rem` }}>a selection of Steph's favorite recipes</h2>
      <Cards recipes={recipes}/>
    </Container>
  )
}

export default Home;
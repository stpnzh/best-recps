import React from 'react';
import { Container } from 'react-bootstrap';

import recipes from './recipes.json';
import Cards from './Cards';


const Home = () => {
  return (
    <Container>
      <h1 className="text-dark" style={{ paddingTop: `2rem`, paddingBottom: `1rem`, color: `gray` }}>stephanie's top 8 recipes</h1>
      <Cards recipes={recipes}/>
    </Container>
  )
}

export default Home;
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import Recipes from './components/recipes';

const recipes = [
  {
    name: 'curry',
    ingredients: ['rice', 'beef', 'powder', 'paprika'],
    directions: ['cook rice', 'sear beef', 'add water']
  }, {
    name: 'pho',
    ingredients: ['chicken', 'water', 'onion'],
    directions: ['parboil', 'boil water']
  }
]


const App = () => {
  return (
    <Container>
      <h1>the best recipes</h1>
      <Recipes recipes={recipes}/>
    </Container>
    
  )
}

export default App

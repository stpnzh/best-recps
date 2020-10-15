import React from 'react';
import { Container } from 'react-bootstrap';

import Cards from './Cards';

const recipes = [
  {
    name: 'Pho ga',
    description: 'Chicken pho with beef balls',
    ingredients: ['4 lb chicken bones', '4.5 qt water', 'salt', 'sugar', '3 onions',
    '1 whole chicken, preferable free range and air chilled', 'beef balls', 'cilantro', 
   'green onions' ],
    directions: ['Bring ~5 qts of water to boil. Add chicken bones. Parboil for 5 mins.',
     'Remove and rinse chicken bones. Discard parboiled water.',
     'Add back rinsed chicken bones. Add 4.5 qts of tap water.', 
     'Nestle 1 whole chicken into water. Add 1 tbs salt, 1 tsp sugar. Bring to boil.', 
     'Once boiling, turn heat down to a simmer around 205F.', 
     'Cook 1 whole chicken for 20-25 mins. Remove and set into ice bath.',
     'Continue simmering broth for 2 hours.', 
     'Meanwhile, filet meat from chicken bones and place in bowl. Add 1/2 tsp of salt to season. Refrigerate until using.', 
     'Add back cooked bones to the broth. Continue simmering.', 
     'About 1 hr before service, add charred onions.'
    ]
  }, {
    name: 'chicken tikka masala',
    description: 'Chicken curry',
    ingredients: ['chicken', 'yogurt', 'cream'],
    directions: ['add cream', 'boil water']
  }, {
    name: 'tonkatsu',
    description: '',
    ingredients: ['pork loin', 'eggs', 'flour'],
    directions: ['deep fry']
  }, {
    name: 'chocolate chip cookies',
    description: 'choco chips',
    ingredients: ['flour', 'eggs', 'butter'],
    directions: ['melt butter', 'boil water']
  }, {
    name: 'chicken wings',
    description: 'Deep fried chicken wings',
    ingredients: ['chicken', 'potato starch', 'onion'],
    directions: ['parboil', 'boil water']
  }, {
    name: 'chicken for tacos',
    description: 'Crispy chicken',
    ingredients: ['chicken', 'paprika', 'chili pepper'],
    directions: ['debone', 'marinate']
  }
]


const Home = () => {
  return (
    <Container>
      <h1>the best recipes</h1>
      <Cards recipes={recipes}/>
    </Container>
  )
}

export default Home;
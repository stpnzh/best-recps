import React from 'react';
import { Container } from 'react-bootstrap';

import Cards from './Cards';

const recipes = [
  {
    name: 'Chicken pho',
    description: 'Pho in a rich chicken broth',
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
    name: 'Chicken tikka masala',
    description: 'Creamy, tangy curry with broiled chicken',
    ingredients: ['chicken', 'yogurt', 'cream'],
    directions: ['add cream', 'boil water']
  }, {
    name: 'Strawberry smoothie',
    description: 'Strawberry and condensed milk, Vietnamese-style',
    ingredients: ['pork loin', 'eggs', 'flour'],
    directions: ['deep fry']
  }, {
    name: 'Chocolate chip cookies',
    description: 'Buttery and crisp',
    ingredients: ['flour', 'eggs', 'butter'],
    directions: ['melt butter', 'boil water']
  }, {
    name: 'Fried chicken wings',
    description: 'Glazed, tangy, spicy, Korean-inspired',
    ingredients: ['chicken', 'potato starch', 'onion'],
    directions: ['parboil', 'boil water']
  }, {
    name: 'Taco chicken',
    description: 'Crispy chicken skins, juicy thigh meat',
    ingredients: ['chicken', 'paprika', 'chili pepper'],
    directions: ['debone', 'marinate']
  }, {
    name: 'Spaghetti',
    description: 'Meaty sauce with a hit of pecorino',
    ingredients: ['chicken', 'paprika', 'chili pepper'],
    directions: ['debone', 'marinate']
  }, {
    name: 'Thai fried rice',
    description: 'Delicate fried rice with a pop of fish sauce',
    ingredients: ['chicken', 'paprika', 'chili pepper'],
    directions: ['debone', 'marinate']
  }
]


const Home = () => {
  return (
    <Container>
      <h1 style={{ paddingTop: `2rem`, paddingBottom: `1rem`, color: `gray` }}>stephanie's top 8 recipes</h1>
      <Cards recipes={recipes}/>
    </Container>
  )
}

export default Home;
import React from 'react';
import placeholder from '../assets/images/placeholder.png';
import RecipeModal from './RecipeModal';

import { Container, Row, Card } from 'react-bootstrap';


const Cards = (props) => {

  const recipeObjects = props.recipes.map(recipe => 
    <Card style={{ width: `23%`, height: `14rem`, margin: `0.5rem` }}>
      <Card.Img variant='top' src={ placeholder } style={{ width: `25%`}}/>
      <Card.Body>
        <Card.Title>{recipe.name}</Card.Title>
        <Card.Text>{recipe.description}</Card.Text>
        <RecipeModal recipe={recipe}/>
      </Card.Body>
    </Card>
  )

  let rows = [];
  let cells = [];
  // recipeObjects.forEach((recipe, idx) => {
  //   if (idx % 4 !== 0) {
  //     cells.push(recipe);
  //   } else {
  //     rows.push(cells);
  //     cells = [];
  //     cells.push(recipe);
  //   }
  //   if (idx === recipeObjects.length - 1) {
  //     rows.push(cells);
  //   }
  // });

  recipeObjects.forEach((recipe, idx) => {
    if (idx % 4 != 0) {
      cells.push(recipe);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(recipe);
    }
    if (idx === recipeObjects.length - 1) {
      rows.push(cells);
    }
  });

  return (
    // <Container>
    //   <Row>
    //     <Col>1</Col>
    //     <Col>2</Col>
    //     <Col>3</Col>
    //     <Col>4</Col>
    //   </Row>
    // </Container>
    <Container>
      {rows.map((row, idx) => <Row>{row}</Row>)}
    </Container>
  )
}

export default Cards;
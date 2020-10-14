import React from 'react';
import { Card, Button, Accordion, Carousel } from 'react-bootstrap';

const Recipes = (props) => {
  return (
    <div>
    {props.recipes.map(i => 
    <Card>
      {/* <Card.Header>
        <Accordion.Toggle as={Button} variant='link' eventKey='1'>{i.name}</Accordion.Toggle>
      </Card.Header> */}

      <Card.Img variant='top' src='holder.js/100px180'  />
      <Card.Body>
        <Card.Title>{i.name}</Card.Title>

        <Button>Test Button</Button>
      
      </Card.Body>

    </Card>

    )}

    
  
    </div>
  )
}

export default Recipes;
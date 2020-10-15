import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

const RecipeModal = (props) => {

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button onClick={handleShow}>See recipe</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >{props.recipe.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body  style={{ marginRight: `1rem`}}>
          Ingredients
          <ul>{props.recipe.ingredients.map(i => <li>{i}</li>)}</ul>
          Directions
          <ol>{props.recipe.directions.map(i => <li>{i}</li>)}</ol>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default RecipeModal;
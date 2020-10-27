import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

const RecipeModal = (props) => {

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleNested = (obj) => {
    if (Array.isArray(obj)) {
      let title = obj[0];
      let list = obj.slice(1,);
      return (
        <>
          <li>{title}</li>
          <ul>{list.map(i => <li>{i}</li>)}</ul>
        </>
      )
    } else {
      return obj
    }
  }

  return (
    <>
      <Button variant='outline-primary' onClick={handleShow}>See recipe</Button>
      <Modal show={show} onHide={handleClose} scrollable={true} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title >{props.recipe.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ marginRight: `1rem`, fontSize: `90%` }}>
          Ingredients
          <ul>{props.recipe.ingredients.map(i => <li>{handleNested(i)}</li>)}</ul>
          Directions
          <ol>{props.recipe.directions.map(i => <li>{i}</li>)}</ol>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default RecipeModal;
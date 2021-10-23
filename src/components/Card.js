import React, { useState } from "react";
import "./Card.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button, Modal, Form } from "react-bootstrap";

function Card({ id, src, name, location, description, price }) {
  var [isModal, setIsModal] = useState(false);
  var [isDeleteModal, setIsDeleteModal] = useState(false);
  const handleClose = () => setIsModal(false);
  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card__Details">
        <h5>{id}</h5>
        <h2>{name}</h2>
        <h4>{location}</h4>
        <h3>{description}</h3>
        <h4>{price}</h4>
        <Button varient="outline-primary" onClick={() => setIsModal(true)}>
          <EditIcon />
        </Button>
        <Button
          varient="outline-primary"
          onClick={() => setIsDeleteModal(true)}
          className="ml-2"
        >
          <DeleteIcon />
        </Button>
      </div>

      <Modal size="lg" show={isDeleteModal} onHide={() => setIsModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Home</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Are you sure you want to delete this home listing?</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary">Delete</Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal size="lg" show={isModal} onHide={() => setIsModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit House</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onLoginFormSubmit}>
            <Form.Group className="ml-5 mb-5">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="Name" value={name} />
              <br />
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" name="Location" value={location} />
              <br />
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" name="fileUpload" />
              <br />
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={description}
              />
              <br />
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" name="price" value={price} />
              <br />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="outline-primary">
            Update
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Card;

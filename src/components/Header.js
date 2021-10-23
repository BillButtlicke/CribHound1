import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Modal } from "react-bootstrap";

function Header() {
  const History = useHistory();
  var [isModal, setIsModal] = useState(false);
  const handleClose = () => setIsModal(false);
  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://www.pinclipart.com/picdir/big/380-3803442_bed-bed-frame-clipart.png"
          alt=""
        ></img>
      </Link>

      <h3>CribHound</h3>
      <div className="header__center">
        <input type="text" onChange={() => History.push("/search")} />
        <SearchIcon />
      </div>
      <div className="header__right">
        <Button varient="outline-primary" onClick={() => setIsModal(true)}>
          Add House
        </Button>
      </div>

      <Modal size="lg" show={isModal} onHide={() => setIsModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add House</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onLoginFormSubmit}>
            <Form.Group className="ml-5 mb-5">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="Name" />
              <br />
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" name="Location" />
              <br />
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" name="fileUpload" />
              <br />
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="description" />
              <br />
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" name="price" />
              <br />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="outline-primary">
            Save
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Header;

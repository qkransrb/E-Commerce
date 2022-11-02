import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const AddToCartMessage = () => {
  const [show, setShow] = useState(true);
  return (
    <Alert
      show={show}
      variant="success"
      onClose={() => setShow(false)}
      dismissible
    >
      <Alert.Heading>The product was added to your cart!</Alert.Heading>
      <div>
        <Button variant="success" className="me-2">
          Go back
        </Button>
        <LinkContainer to="/cart">
          <Button variant="danger">Go to cart</Button>
        </LinkContainer>
      </div>
    </Alert>
  );
};

export default AddToCartMessage;

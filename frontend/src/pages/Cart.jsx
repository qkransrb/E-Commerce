import React from "react";
import { Container, Row, Col, Alert, ListGroup, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CartItem from "../components/CartItem";

const Cart = () => {
  return (
    <Container fluid>
      <Row className="mt-4">
        <Col md={8}>
          <h1>Shopping Cart</h1>
          <ListGroup variant="flush">
            {Array.from({ length: 3 }).map((_, index) => (
              <ListGroup.Item key={index}>
                <CartItem />
              </ListGroup.Item>
            ))}
          </ListGroup>
          <br />
          <Alert variant="info">Your cart is empty</Alert>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Subtotal (2 Items)</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Price: <span className="fw-bold">$892</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <LinkContainer to="/user/cart-details">
                <Button type="button" className="w-100">
                  Proceed to Checkout
                </Button>
              </LinkContainer>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;

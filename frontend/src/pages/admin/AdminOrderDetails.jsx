import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Button,
  Form,
  Alert,
} from "react-bootstrap";
import CartItem from "../../components/CartItem";

const AdminOrderDetails = () => {
  return (
    <Container fluid>
      <Row className="mt-4">
        <h1>Order Details</h1>
        <Col md={8}>
          <br />
          <Row>
            <Col md={6}>
              <h2>Shipping</h2>
              <b>Name</b>: John Doe
              <br />
              <b>Address</b>: 8739 Mayflower St. Los Angeles, CA 90063
              <br />
              <b>Phone</b>: 888 777 6666
            </Col>
            <Col md={6}>
              <h2>Payment method</h2>
              <Form.Select disabled={true}>
                <option value="pp">PayPal</option>
                <option value="cod">
                  Cash on Delivery (delivery may be delayed)
                </option>
              </Form.Select>
            </Col>
            <Row>
              <Col>
                <Alert className="mt-3" variant="danger">
                  Not delivered
                </Alert>
              </Col>
              <Col>
                <Alert className="mt-3" variant="success">
                  Paid on 2022-10-02
                </Alert>
              </Col>
            </Row>
          </Row>
          <br />
          <h2>Order items</h2>
          <ListGroup variant="flush">
            {Array.from({ length: 3 }).map((_, index) => (
              <CartItem key={index} />
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Order Summary</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Item price (after tax): <span className="fw-bold">$892</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Shipping: <span className="fw-bold">included</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Tax: <span className="fw-bold">included</span>
            </ListGroup.Item>
            <ListGroup.Item className="text-danger">
              Total price: <span className="fw-bold">$904</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-grid gap-2">
                <Button
                  size="lg"
                  variant="primary"
                  type="button"
                  className="w-100"
                >
                  Mark as delivered
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminOrderDetails;

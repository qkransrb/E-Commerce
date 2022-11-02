import React from "react";
import { Row, Col, Image, Form, Button } from "react-bootstrap";

const CartItem = () => {
  return (
    <Row className="d-flex align-items-center mt-3">
      <Col md={2}>
        <Image src="/images/games-category.png" fluid crossOrigin="anonymous" />
      </Col>
      <Col md={2}>
        Logitech series
        <br />
        Gaming mouse
      </Col>
      <Col md={2}>
        <b>$89</b>
      </Col>
      <Col md={3}>
        <Form.Select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Form.Select>
      </Col>
      <Col md={3}>
        <Button
          type="button"
          variant="secondary"
          onClick={() => window.confirm("Are you sure?")}
        >
          <i className="bi bi-trash"></i>
        </Button>
      </Col>
    </Row>
  );
};

export default CartItem;

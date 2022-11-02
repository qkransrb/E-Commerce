import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { LinkContainer } from "react-router-bootstrap";

const ProductForList = ({ images, index }) => {
  return (
    <Card style={{ marginTop: "30px", marginBottom: "50px" }}>
      <Row>
        <Col lg={5}>
          <Card.Img
            variant="top"
            src={`/images/${images[index]}-category.png`}
          />
        </Col>
        <Col lg={7}>
          <Card.Body>
            <Card.Title>Product Name Lorem ipsum dolor sit amet</Card.Title>
            <Card.Text>
              Product Description some quick example text to build on the card
              title and make up the bulk of the card's content. adipisicing
              elit. Magni ipsa ducimus architecto explicabo id accusantium nihil
              exercitationem autemporro esse.
            </Card.Text>
            <Card.Text>
              <Rating readonly size={20} initialValue={5} /> (1)
            </Card.Text>
            <Card.Text className="h4">
              <span className="me-3">$124</span>
              <LinkContainer to="/product-details">
                <Button variant="danger">See Product</Button>
              </LinkContainer>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductForList;

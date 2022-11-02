import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import ImageZoom from "js-image-zoom";
import AddToCartMessage from "../components/AddToCartMessage";

const ProductDetails = () => {
  const { id } = useParams();

  const options = {
    scale: 2,
    offset: {
      vertical: 0,
      horizontal: 0,
    },
  };

  useEffect(() => {
    new ImageZoom(document.getElementById("first"), options);
    new ImageZoom(document.getElementById("second"), options);
    new ImageZoom(document.getElementById("third"), options);
    new ImageZoom(document.getElementById("fourth"), options);
  }, []);

  return (
    <Container>
      <AddToCartMessage />
      <Row className="mt-5">
        <Col md={4} style={{ zIndex: 1 }}>
          <div id="first">
            <Image
              src="/images/games-category.png"
              fluid
              crossOrigin="anonymous"
            />
          </div>
          <br />
          <div id="second">
            <Image
              src="/images/monitors-category.png"
              fluid
              crossOrigin="anonymous"
            />
          </div>
          <br />
          <div id="third">
            <Image
              src="/images/tablets-category.png"
              fluid
              crossOrigin="anonymous"
            />
          </div>
          <br />
          <div id="fourth">
            <Image
              src="/images/games-category.png"
              fluid
              crossOrigin="anonymous"
            />
          </div>
          <br />
        </Col>
        <Col md={8}>
          <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h1>Product Name</h1>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating readonly size={20} initialValue={4} />
                </ListGroup.Item>
                <ListGroup.Item>
                  Price <span className="fw-bold">$345</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Porta ac consectetur ac Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Perferendis, illo.
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>Status: In Stock</ListGroup.Item>
                <ListGroup.Item>
                  Price: <span className="fw-bold">$345</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Quantity:
                  <Form.Select size="lg" aria-label="Default select example">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </Form.Select>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button variant="danger" className="w-100">
                    Add to cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <h5>REVIEWS</h5>
              <ListGroup variant="flush">
                {Array.from({ length: 10 }).map((_, index) => (
                  <ListGroup.Item key={index}>
                    John Doe
                    <br />
                    <Rating readonly size={20} initialValue={4} />
                    <br />
                    20-09-2021
                    <br />
                    Porta ac consectetur ac Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Perferendis, illo.
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
          <hr />
          Send review form
          <Alert variant="danger">Login first to write a review</Alert>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Write a review</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Select aria-label="Default select example">
              <option>Your rating</option>
              <option value="5">5 (very good)</option>
              <option value="4">4 (good)</option>
              <option value="3">3 (average)</option>
              <option value="2">2 (bad)</option>
              <option value="1">1 (awful)</option>
            </Form.Select>
            <Button variant="primary" className="w-100 my-3">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;

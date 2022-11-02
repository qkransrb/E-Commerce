import React from "react";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import SortOptions from "../components/SortOptions";
import PriceFilter from "../components/filterQueryResultOptions/PriceFilter";
import RatingFilter from "../components/filterQueryResultOptions/RatingFilter";
import CategoryFilter from "../components/filterQueryResultOptions/CategoryFilter";
import AttributesFilter from "../components/filterQueryResultOptions/AttributesFilter";
import ProductForList from "../components/ProductForList";
import Paginations from "../components/Paginations";

const ProductList = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item className="my-3">
              <SortOptions />
            </ListGroup.Item>

            <ListGroup.Item>
              FILTER:
              <br />
              <PriceFilter />
            </ListGroup.Item>

            <ListGroup.Item>
              <RatingFilter />
            </ListGroup.Item>

            <ListGroup.Item>
              <CategoryFilter />
            </ListGroup.Item>

            <ListGroup.Item>
              <AttributesFilter />
            </ListGroup.Item>

            <ListGroup.Item>
              <Button variant="primary">Filtering</Button>
              <Button variant="danger">Filter Reset</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={9}>
          {Array.from({ length: 5 }).map((_, index) => (
            <ProductForList
              key={index}
              images={["games", "monitors", "tablets", "games", "monitors"]}
              index={index}
            />
          ))}
          <Paginations />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;

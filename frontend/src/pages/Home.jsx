import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "../components/CategoryCard";
import ProductCarousel from "../components/ProductCarousel";

const Home = () => {
  const categories = [
    "Tablets",
    "Monitors",
    "Games",
    "Printers",
    "Softwares",
    "Cameras",
    "Books",
    "Videos",
  ];

  return (
    <>
      <ProductCarousel />
      <Container>
        <Row xs={1} md={2} className="g-4 mt-5">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;

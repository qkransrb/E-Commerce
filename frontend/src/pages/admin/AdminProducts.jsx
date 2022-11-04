import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Row, Col, Table, Button } from "react-bootstrap";
import AdminLinks from "../../components/admin/AdminLinks";

const AdminProducts = () => {
  const deleteHandler = (name) => {
    if (window.confirm("Are you sure?")) {
      alert("Product deleted!");
    }
  };

  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinks />
      </Col>

      <Col md={10}>
        <h1>
          Product List
          <LinkContainer to="/admin/create-new-product">
            <Button variant="primary" size="lg" className="ms-4">
              Create New
            </Button>
          </LinkContainer>
        </h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Edit / Delete</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Panasonic", price: "$250", category: "TV" },
              { name: "Lenovo", price: "$1000", category: "Laptops" },
              { name: "GTA 10", price: "$345", category: "Games" },
            ].map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>
                  <LinkContainer to="/admin/edit-product">
                    <Button className="btn-sm">
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                  </LinkContainer>
                  <span className="ms-2 me-2">/</span>
                  <Button
                    className="btn-sm"
                    variant="danger"
                    onClick={() => deleteHandler(item.name)}
                  >
                    <i className="bi bi-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default AdminProducts;

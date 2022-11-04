import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Table } from "react-bootstrap";

const UserOrders = () => {
  return (
    <Row className="m-5">
      <Col md={12}>
        <h1>My Orders</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Date</th>
              <th>Total</th>
              <th>Delivered</th>
              <th>Order details</th>
            </tr>
          </thead>
          <tbody>
            {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map(
              (className, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>Mark Twain</td>
                  <td>2022-09-12</td>
                  <td>$124</td>
                  <td>
                    <i className={className}></i>
                  </td>
                  <td>
                    <Link to="/user/order-details">Go to order</Link>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default UserOrders;

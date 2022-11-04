import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import {
  Button,
  CloseButton,
  Col,
  Container,
  Form,
  Row,
  Table,
  Alert,
} from "react-bootstrap";

const AdminCreateProduct = () => {
  const [validated, setValidated] = useState(false);

  const onSubmit = (e) => {
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
          <LinkContainer to="/admin/products">
            <Button
              type="button"
              variant="dark"
              onClick={() => console.log("go back")}
            >
              Go Back
            </Button>
          </LinkContainer>

          <h1 className="mt-2">Create a new product</h1>
          <Form noValidate validated={validated} onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" required />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                as="textarea"
                rows={3}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCount">
              <Form.Label>Count in stock</Form.Label>
              <Form.Control type="number" name="count" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" name="price" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCategory">
              <Form.Label>
                Category
                <CloseButton />(<small>remove selected</small>)
              </Form.Label>
              <Form.Select
                name="category"
                aria-label="Default select example"
                required
              >
                <option value="">Choose category</option>
                <option value="1">Laptops</option>
                <option value="2">TV</option>
                <option value="3">Games</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNewCategory">
              <Form.Label>
                Or create a new category (e.g. Computers / Laptops / Intel)
              </Form.Label>
              <Form.Control type="text" name="newCategory" />
            </Form.Group>

            <Row className="mt-5">
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicAttribute">
                  <Form.Label>Choose attribute and set value</Form.Label>
                  <Form.Select
                    name="atrrKey"
                    aria-label="Default select example"
                  >
                    <option>Choose attribute</option>
                    <option value="red">color</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicAttributeValue"
                >
                  <Form.Label>Attribute value</Form.Label>
                  <Form.Select
                    name="atrrVal"
                    aria-label="Default select example"
                  >
                    <option>Choose attribute value</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Table hover>
                <thead>
                  <tr>
                    <th>Attribute</th>
                    <th>Value</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>attr key</td>
                    <td>attr value</td>
                    <td>
                      <CloseButton />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicNewAttribute">
                  <Form.Label>Choose new attribute</Form.Label>
                  <Form.Control
                    type="text"
                    name="newAttrValue"
                    placeholder="first choose or create category"
                    disabled={false}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicNewAttributeValue"
                >
                  <Form.Label>Attribute value</Form.Label>
                  <Form.Control
                    type="text"
                    name="newAttrValue"
                    placeholder="first choose or create category"
                    disabled={false}
                    required={true}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Alert variant="primary">
              After typing attribute key and value press enter on one of the
              field
            </Alert>

            <Form.Group className="my-3" controlId="formFileMultiple">
              <Form.Label>Images</Form.Label>
              <Form.Control type="file" multiple required />
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100 mt-3">
              Create
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminCreateProduct;

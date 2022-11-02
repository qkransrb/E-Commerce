import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const [validated, setValidated] = useState(false);
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e) => {
    const password = document.querySelector("input[name=password]");
    const confirm = document.querySelector("input[name=confirmPassword]");

    if (confirm.value === password.value) {
      confirm.setCustomValidity("");
    } else {
      confirm.setCustomValidity("Password do not match.");
    }

    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

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
          <h1 className="mb-4">Register</h1>
          <Form noValidate validated={validated} onSubmit={onSubmit}>
            <Form.Group controlId="formBasicFirstName" className="mb-3">
              <Form.Label>Your first name</Form.Label>
              <Form.Control
                required
                type="text"
                name="firstName"
                value={inputs.firstName}
                placeholder="Enter your first name"
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your first name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicLastName" className="mb-3">
              <Form.Label>Your last name</Form.Label>
              <Form.Control
                required
                type="text"
                name="lastName"
                value={inputs.lastName}
                placeholder="Enter your last name"
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your last name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                value={inputs.email}
                placeholder="Enter your email address"
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                name="password"
                value={inputs.password}
                placeholder="Password"
                onChange={onChange}
                minLength={4}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid password.
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                Password should have at least 4 characters.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPasswordRepeat" className="mb-3">
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control
                required
                type="password"
                name="confirmPassword"
                value={inputs.confirmPassword}
                placeholder="Repeat Password"
                onChange={onChange}
                minLength={4}
              />
              <Form.Control.Feedback type="invalid">
                Both passwords should match.
              </Form.Control.Feedback>
            </Form.Group>

            <Row className="pb-3">
              <Col>
                Do you have an account alreay? <Link to="/login">Login</Link>
              </Col>
            </Row>

            <Button type="submit" className="w-100">
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="me-2"
              />
              Submit
            </Button>

            <Alert show={true} variant="danger">
              User with that email already exists!
            </Alert>

            <Alert show={true} variant="info">
              User created!
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;

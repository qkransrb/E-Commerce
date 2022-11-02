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

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    doNotLogout: false,
  });

  const onChange = (e) => {
    if (e.target.name === "doNotLogout") {
      if (e.target.checked) {
        setInputs((prev) => {
          return {
            ...prev,
            doNotLogout: true,
          };
        });
      } else {
        setInputs((prev) => {
          return {
            ...prev,
            doNotLogout: false,
          };
        });
      }
    } else {
      setInputs((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.value,
        };
      });
    }
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
          <h1 className="mb-4">Login</h1>
          <Form noValidate validated={validated} onSubmit={onSubmit}>
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
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox" className="mb-3">
              <Form.Check
                name="doNotLogout"
                type="checkbox"
                value={inputs.doNotLogout}
                label="Do not logout"
                onChange={onChange}
              />
            </Form.Group>

            <Row className="pb-3">
              <Col>
                Don't you have an account? <Link to="/register">Register</Link>
              </Col>
            </Row>

            <Button variant="primary" type="submit" className="w-100">
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="me-2"
              />
              Login
            </Button>

            <Alert show={true} variant="danger">
              Invalid credentials.
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

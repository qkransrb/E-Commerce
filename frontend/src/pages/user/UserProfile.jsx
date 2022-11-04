import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const UserProfile = () => {
  const [validated, setValidated] = useState(false);
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    zipcode: "",
    city: "",
    state: "",
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
          <h1 className="mb-4">User Profile</h1>
          <Form noValidate validated={validated} onSubmit={onSubmit}>
            <Form.Group controlId="formBasicFirstName" className="mb-3">
              <Form.Label>Your first name</Form.Label>
              <Form.Control
                required
                type="text"
                name="firstName"
                defaultValue="John"
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
                defaultValue="Doe"
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your last name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                defaultValue="john@example.com"
                onChange={onChange}
                readOnly
              />
              <Form.Text className="text-muted">
                If you want to change email, remove account and create new one
                with new email address.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPhone" className="mb-3">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                defaultValue=""
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicAddress" className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                placeholder="Enter your street name and house number"
                defaultValue=""
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicCountry" className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                placeholder="Enter your country"
                defaultValue=""
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicZip" className="mb-3">
              <Form.Label>Zip code</Form.Label>
              <Form.Control
                type="text"
                name="zipcode"
                placeholder="Enter your zip code"
                defaultValue=""
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicCity" className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                placeholder="Enter your city"
                defaultValue=""
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicState" className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                name="state"
                placeholder="Enter your state"
                defaultValue=""
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                name="password"
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
              <Form.Label>Repeat password</Form.Label>
              <Form.Control
                required
                type="password"
                name="confirmPassword"
                placeholder="Repeat Password"
                onChange={onChange}
                minLength={4}
              />
              <Form.Control.Feedback type="invalid">
                Both passwords should match.
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>

            <Alert show={true} variant="info">
              User updated!
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;

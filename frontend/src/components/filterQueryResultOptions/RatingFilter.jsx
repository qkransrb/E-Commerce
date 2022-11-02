import React, { Fragment } from "react";
import { Rating } from "react-simple-star-rating";
import { Form } from "react-bootstrap";

const RatingFilter = () => {
  return (
    <>
      <span className="fw-bold">Rating</span>
      {Array.from({ length: 5 }).map((_, index) => (
        <Fragment key={index}>
          <Form.Check type="checkbox" id={`check-api-${index}`}>
            <Form.Check.Input type="checkbox" isValid />
            <Form.Check.Label style={{ cursor: "pointer" }}>
              <Rating readonly size={20} initialValue={5 - index} />
            </Form.Check.Label>
          </Form.Check>
        </Fragment>
      ))}
    </>
  );
};

export default RatingFilter;

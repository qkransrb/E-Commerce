import React from "react";
import { Form } from "react-bootstrap";

const AttributesFilter = () => {
  return (
    <>
      {[{ color: ["red", "blud", "green"] }, { ram: ["1TB", "2TB"] }].map(
        (item, index) => (
          <div key={index} className="mb-3">
            <Form.Label>
              <b>{Object.keys(item)}</b>
            </Form.Label>
            {item[Object.keys(item)].map((i, idx) => (
              <Form.Check key={idx} type="checkbox" label={i} />
            ))}
          </div>
        )
      )}
    </>
  );
};

export default AttributesFilter;

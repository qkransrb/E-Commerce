import React from "react";
import "../../chats.css";

const UserChat = () => {
  return (
    <>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="chat-btn">
        <i className="bi bi-chat-dots comment"></i>
        <span className="position-absolute top-0 start-10 translate-middle p-2 bg-danger border border-light rounded-circle" />
        <i className="bi bi-x-circle close"></i>
      </label>
      <div className="chat-wrapper">
        <div className="chat-header">
          <h6>Let's Chat - Online</h6>
        </div>
        <div className="chat-form">
          <div className="chat-msg">
            {Array.from({ length: 20 }).map((_, index) => (
              <div key={index}>
                <p>
                  <b>You wrote: </b>
                  Hello, world! This is a toast message.
                </p>
                <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                  <b>Support wrote: </b>
                  Hello, world! This is a toast message.
                </p>
              </div>
            ))}
          </div>
          <textarea
            id="clientChatMsg"
            placeholder="Your Text Message"
            className="form-control"
          ></textarea>
          <button className="btn btn-success btn-block w-100">Submit</button>
        </div>
      </div>
    </>
  );
};

export default UserChat;

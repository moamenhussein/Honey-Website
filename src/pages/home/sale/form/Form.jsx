import React from "react";
import "./form.css";
const Form = () => {
  return (
    <div className="form">
      <h3>Contact Us</h3>
      <form action="">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <input type="text" placeholder="Full Name" required />
              <input
                type="email"
                placeholder="Email"
                required
                className="active"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input type="text" placeholder="Phone Number" required className="fromTwo"/>
              <input
                type="text"
                placeholder="Message"
                required
                className="active"
              />
            </div>
          </div>
        </div>
      </form>
      <a href="#" className="send">Send</a>
    </div>
  );
};

export default Form;

import React from "react";
import "./landing.css";
import banner from "../../../images/banner_img.png";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="landing">
      <div className="container landing-container">
        <div className="row">
          <div className="col">
            <h2>You can get pure hony here</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered
            </p>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="col">
            <img src={banner} alt="Banner Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

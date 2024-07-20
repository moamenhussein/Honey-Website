import React from "react";
import "./about.css";
import aboutImage from "../../../images/about.png";
import AboutLeft from "../../../images/about_left.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <h3>
              <img
                src={AboutLeft}
                alt="Image About Left"
                className="aboutLeft"
              />
              About Our Honey
            </h3>
            <p>
              About Our Honey There are many variations of passages of Lorem
              Ipsum available, but the majority have sufferedThere are many
              variations of passages of Lorem Ipsum available, but the majority
              have sufferedThere are many variations of passages of Lorem Ipsum
              available, but the majority have suffered
            </p>
            <Link to="/about">Read More</Link>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img src={aboutImage} alt="About Image" className="aboutImage"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

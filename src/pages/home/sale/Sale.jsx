import React from "react";
import "./sale.css";
import qualityOne from "../../../images/quality1.png"
import qualityTwo from "../../../images/quality2.png"
import qualityThree from "../../../images/quality3.png"
import qualityFour from "../../../images/quality4.png"
import qualityFive from "../../../images/quality5.png"
import qualitySix from "../../../images/quality6.png"
import qualitysiven from "../../../images/quality7.png"
import qualityEight from "../../../images/quality8.png"
import FormContainer from "./form/FormContainer";
const Sale = () => {
  return (
    <div className="sale">
      <div className="info">
        <h3>Quality OF Honey For sale</h3>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          There are many variations of passages of Lorem Ipsum <br /> available, but
        </p>
        <div className="sale-images">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <img src={qualityOne} alt="ImageQualityOne" className="mt-5"/>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
              <img src={qualityTwo} alt="ImageQualityTwo"/>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
              <img src={qualityThree} alt="ImageQualityThree"/>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
              <img src={qualityFour} alt="ImageQualityFour"/>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
              <img src={qualityFive} alt="ImageQualityFive"/>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
              <img src={qualitySix} alt="ImageQualitySix"/>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
              <img src={qualitysiven} alt="ImageQualitySiven"/>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
              <img src={qualityEight} alt="ImageQualityEight"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#">See More</a>
      <FormContainer />
    </div>
  );
};

export default Sale;

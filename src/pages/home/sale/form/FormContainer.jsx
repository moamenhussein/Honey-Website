import React from "react";
import Form from "./Form";
import FormImage from "../../../../images/honet_img.png";
const FormContainer = () => {
  return (
    <div className="formContainer">
      <Form />
      <img src={FormImage} alt="Form Image" />
    </div>
  );
};

export default FormContainer;

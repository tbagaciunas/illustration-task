import React from "react";
import Button from "./Button";
import Form from "./Form";
import illustration from "../assets/illustration.svg";
import logo from "../assets/logo.svg";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";

const RegistrationForm = () => {
  const handleSocialMediaLogin = () => {};

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="main-container">
      <div className="left-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="illustration">
          <img src={illustration} alt="Illustration" />
        </div>

        <div className="centered-text">
          <p>
            Start for free &amp; Get <br></br>
            Attractive offers Today!
          </p>
        </div>
      </div>
      <div className="right-container">
        <div className="form-container">
          <h1>Get Started</h1>
          <p>
            Already have an account? <br></br>
            <a href="#">Log in</a>
          </p>
          <div className="buttons-container">
            <Button
              img={google}
              text="sign up"
              onClick={handleSocialMediaLogin}
              type="google"
            />
            <Button
              img={facebook}
              text="sign up"
              onClick={handleSocialMediaLogin}
              type="facebook"
            />
          </div>
          <p id="or">Or</p>
          <Form onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;

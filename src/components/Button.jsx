import React from "react";

const Button = ({ img, text, onClick, type }) => {
  const buttonStyle = type === "google" ? "google-button" : "facebook-button";

  return (
    <button className={`social-media-button ${buttonStyle}`} onClick={onClick}>
      {img && <img src={img} alt="Logo" className="button-logo" />} {text}
    </button>
  );
};

export default Button;

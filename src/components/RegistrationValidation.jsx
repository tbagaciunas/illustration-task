import React from "react";

const RegistrationValidation = ({ children, validate }) => {
  return validate ? children() : null;
};

export default RegistrationValidation;

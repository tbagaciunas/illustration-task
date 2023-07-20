import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Form = ({ onSubmit }) => {
  return (
    <form className="registration-form" onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        placeholder="Joy Shaheb"
        required
        className="selected-input"
      />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" placeholder="abc@gmail.com" required />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" placeholder="●●●●●●●●" required />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

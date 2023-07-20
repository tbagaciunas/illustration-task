import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import RegistrationValidation from "./components/RegistrationValidation";
import "../src/App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <div>
      <RegistrationValidation validate={true}>
        {() => <RegistrationForm />}
      </RegistrationValidation>
    </div>
  );
};

export default App;

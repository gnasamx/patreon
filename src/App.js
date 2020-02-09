import React, { useState, useEffect } from "react";
import { useInputChange } from "./hooks/useInputChange";
import Input from "./components/input/input";

function App() {
  const [input, handleInputChange] = useInputChange({});
  const [inValidEmail, setInValidEmail] = useState(false);

  const validateEmail = () => {
    console.log("Onblur event", input.email);
    if (input.email === "" || input.email === undefined) {
      console.log("Email is empty");
      setInValidEmail(true);
    }
  };

  return (
    <>
      <Input
        type="text"
        name="name"
        value={input.name || ""}
        onChange={handleInputChange}
      />
      <Input
        type="email"
        name="email"
        value={input.email || ""}
        onBlur={validateEmail}
        onChange={handleInputChange}
        error={inValidEmail}
      />
      <button onClick={() => console.log("Input is: ", input)}>Send</button>
    </>
  );
}

export default App;

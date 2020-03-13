import React from "react";
import { Router } from "@reach/router";
import ButtonPage from "./pages/button-page";
import DropdownPage from "./pages/dropdown-page";

function App() {
  return (
    <Router>
      <ButtonPage path="/" />
      <DropdownPage path="/dropdown" />
    </Router>
  );
}

export default App;

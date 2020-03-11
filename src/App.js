import React from 'react';
import { Router } from "@reach/router"
import ButtonPage from './pages/button-page';
function App() {
  return (
    <Router>
      <ButtonPage path="/"/>
    </Router>
  );
}

export default App;

import React from 'react';
import Background from './components/background/background';
import Button from './components/button/button';

function App() {

  return (
    <Background>
      <Button color="primary" >
        Select
      </Button>
      <Button color="secondary">
        Make a custom pledge
      </Button>
      <Button color="primary" >
        Register
      </Button>
    </Background>
  );
}

export default App;

import React from 'react';
import Background from './components/background/background';
import Button from './components/button/button';

function App() {
  return (
    <Background>
      <Button color="primary">Select</Button>
      <Button color="secondary" width="full">
        Make a custom pledge
      </Button>
    </Background>
  );
}

export default App;

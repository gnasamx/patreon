import React from 'react';
import Background from './components/background/background';
import Button from './components/button/button';

function App() {
  return (
    <Background>
      <Button color="primary" size="large">
        Select
      </Button>
      <Button color="secondary">Make a custom pledge</Button>
      <Button color="primary">Register</Button>
      <Button color="primary" isLoading>
        Disabled
      </Button>
      <Button color="primary" disabled>
        Disabled
      </Button>
    </Background>
  );
}

export default App;

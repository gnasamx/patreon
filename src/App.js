import React from 'react';
import Background from './components/background/background';
import Button from './components/button/button';
import Spinner from './components/icons/spinner';

function App() {
  console.log('S: ', Spinner);
  return (
    <Background>
      <Button color="secondary" size="large">
        Click Me!
      </Button>
      <Button color="primary">Make a custom pledge</Button>
      <Button color="secondary" iconPosition="right">
        Register
      </Button>
      <Button color="primary" isLoading>
        Send
      </Button>
      <Button color="primary" disabled>
        Disabled
      </Button>
      <Button color="outline" size="large" icon={Spinner}>
        Cart
      </Button>
    </Background>
  );
}

export default App;

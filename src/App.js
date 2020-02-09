import React, {useState} from 'react';
import Background from './components/background/background';
import Button from './components/button/button';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 4000);

  return (
    <Background>
      <Button color="primary" isLoading={isLoading}>
        Select
      </Button>
      <Button color="secondary" isLoading={isLoading}>
        Make a custom pledge
      </Button>
    </Background>
  );
}

export default App;

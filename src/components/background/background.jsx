import React from 'react';
import {BackgroundContainer, BackgroundContent} from './styled-background';

export default function Background({children}) {
  return (
    <BackgroundContainer>
      <BackgroundContent>{children}</BackgroundContent>
    </BackgroundContainer>
  );
}

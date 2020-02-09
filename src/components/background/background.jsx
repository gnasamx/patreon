import React from 'react';
import {BackgroundWrapper, BackgroundContent} from './styled-background';

export default function Background({children}) {
  return (
    <BackgroundWrapper>
      <BackgroundContent>{children}</BackgroundContent>
    </BackgroundWrapper>
  );
}

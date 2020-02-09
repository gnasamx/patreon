import React from 'react';
import {ButtonWrapper, ButtonField} from './styled-button';

export default function Button({children, color}) {
  return (
    <ButtonWrapper>
      <ButtonField type="button" color={color}>
        {children}
      </ButtonField>
    </ButtonWrapper>
  );
}

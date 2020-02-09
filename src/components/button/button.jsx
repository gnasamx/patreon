import React from 'react';
import {ButtonWrapper, ButtonField} from './styled-button';

export default function Button({children, color, width}) {
  return (
    <ButtonWrapper width={width}>
      <ButtonField type="button" color={color}>
        {children}
      </ButtonField>
    </ButtonWrapper>
  );
}

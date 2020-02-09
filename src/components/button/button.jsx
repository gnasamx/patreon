import React from 'react';
import {
  ButtonWrapper,
  ButtonField,
  ButtonText,
  IconWrapper,
} from './styled-button';
import Spinner from '../icons/spinner';

export default function Button({children, color, width, isLoading}) {
  return (
    <ButtonWrapper width={width}>
      <ButtonField type="button" color={color}>
        <IconWrapper isLoading={isLoading}>
          <Spinner color={color} />
        </IconWrapper>
        <ButtonText isLoading={isLoading}>{children}</ButtonText>
      </ButtonField>
    </ButtonWrapper>
  );
}

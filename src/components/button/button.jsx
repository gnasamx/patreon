import React from 'react';
import {
  ButtonWrapper,
  ButtonField,
  ButtonText,
  SpinnerWrapper,
  Space,
  IconWrapper,
  IconSpan
} from './styled-button';
import Spinner from '../icons/spinner';
import Patreon from '../icons/patreon';

export default function Button({
  children,
  color,
  width,
  isLoading,
  size,
  iconPosition,
  disabled,
}) {
  return (
    <ButtonWrapper width={width}>
      <ButtonField
        type="button"
        color={color}
        size={size}
        disabled={disabled}
        isLoading={isLoading}
      >
        <SpinnerWrapper isLoading={isLoading}>
          <Spinner color={color} />
        </SpinnerWrapper>
        <ButtonText isLoading={isLoading} iconPosition={iconPosition}>
          {children}
          {!disabled &&
          <>
            <Space />
            <IconWrapper>
              <IconSpan>
                <Patreon color={color} />
              </IconSpan>
            </IconWrapper>
          </>
          }
          </ButtonText>
      </ButtonField>
    </ButtonWrapper>
  );
}

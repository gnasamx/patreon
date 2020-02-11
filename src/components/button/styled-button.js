import styled from 'styled-components';
import {
  getBackgroundColor,
  getColor,
  getButtonWidth,
  getButtonSize,
} from './getStyles';

// add margin prop for top or bottom margin
export const ButtonWrapper = styled.div`
  box-sizing: border-box;
  padding: 0rem;
  margin: 0rem;
  width: ${({width}) => getButtonWidth(width)};
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
`;

export const ButtonField = styled.button`
  align-items: center;
  box-sizing: border-box;
  background-color: ${({color, disabled}) =>
    getBackgroundColor('background', color, disabled ? 'disabled' : 'default')};
  cursor: ${({disabled, isLoading}) =>
    disabled || isLoading ? 'default' : 'pointer'};
  display: inline-flex;
  font-weight: 500;
  justify-content: center;
  position: relative;
  pointer-events: unset;
  text-align: center;
  text-transform: none;
  width: 100%;
  color: ${({color, disabled}) =>
    getColor('color', color, disabled ? 'disabled' : 'default')};
  border-radius: 9999px;
  border: 1px solid
    ${({color, disabled}) =>
      getBackgroundColor(
        'background',
        color,
        disabled ? 'disabled' : 'default',
      )};
  padding: ${({size}) => getButtonSize(size)};
  text-decoration: none;
  outline: none;
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;

  &:hover {
    background-color: ${({color}) =>
      getBackgroundColor('background', color, 'hover')};
  }

  &:active {
    background-color: ${({color}) =>
      getBackgroundColor('background', color, 'active')};
  }

  &:disabled {
    background-color: ${({color}) =>
      getBackgroundColor('background', color, 'disabled')};
  }
`;

export const ButtonText = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  visibility: ${({isLoading}) => (isLoading ? 'hidden' : 'visible')};
`;

export const IconWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 2000;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: ${({isLoading}) => (!isLoading ? 'none' : 'flex')};
`;

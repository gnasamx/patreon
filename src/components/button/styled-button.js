import styled from 'styled-components';
import {getBackgroundColor, getColor, getButtonWidth} from './getStyles';

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
  background-color: ${({color}) => getBackgroundColor('background', color)};
  cursor: pointer;
  display: inline-flex;
  font-weight: 500;
  justify-content: center;
  position: relative;
  pointer-events: unset;
  text-align: center;
  text-transform: none;
  width: 100%;
  color: ${({color}) => getColor('color', color, 'default')};
  border-radius: 9999px;
  border: 1px solid
    ${({color}) => getBackgroundColor('background', color, 'default')};
  padding: 0.78125rem 1.5rem;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;

  &:hover {
    background-color: ${({color}) =>
      getBackgroundColor('background', color, 'hover')};
  }

  &:active {
    background-color: ${({color}) =>
      getBackgroundColor('background', color, 'active')};
  }
`;

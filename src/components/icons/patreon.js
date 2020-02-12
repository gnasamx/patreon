import React from 'react';
import styled from 'styled-components';
import {applyPropertyStyle} from '../../theme/baseTheme';

const Svg = styled.svg`
  align-self: center;
  fill: transparent;
  stroke-width: 1.2px;
  height: 1rem;
  width: 1rem;
`

const Path = styled.path`
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
`

const getColor = (color) => {
  return applyPropertyStyle('color', color);
}

export default function PatreonIcon({color}) {
  return (
    <Svg viewBox="0 0 48 48">
      <Path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zM14 35.2h4.22V12H14v23.2zM29.385 12c-4.764 0-8.641 3.907-8.641 8.71 0 4.788 3.877 8.683 8.641 8.683 4.75 0 8.615-3.895 8.615-8.683 0-4.803-3.864-8.71-8.615-8.71z"
        data-fill={1}
        fill={getColor(color)}
        fillRule="evenodd"
      />
    </Svg>
  )
}
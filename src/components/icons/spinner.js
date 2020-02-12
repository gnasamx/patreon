import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  overflow: visible;
  margin-left: auto;
  margin-right: auto;
  animation-duration: 1.3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-name: svg-animation;
  display: block;
  height: 1rem;
  width: 1rem;

  @keyframes svg-animation {
    0% {
      transform: rotateZ(0);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
`;

const Circle = styled.circle`
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
  animation-iteration-count: infinite;
  animation-name: spinning-circle;
  fill: none;
  stroke: ${({color}) =>
    color === 'primary' ? 'rgb(255, 255, 255)' : 'rgb(124, 61, 238)'};
  stroke-dasharray: 180px;
  stroke-dashoffset: 200px;
  transform-origin: center;
  stroke-width: 12px;

  @keyframes spinning-circle {
    0%,
    25% {
      stroke-dashoffset: 200;
      transform: rotate(0);
    }
    50%,
    75% {
      stroke-dashoffset: 40;
      transform: rotate(45deg);
    }
    100% {
      stroke-dashoffset: 200;
      transform: rotate(360deg);
    }
  }
`;

export default function Spinner({color}) {
  return (
    <Svg viewBox="0 0 64 64">
      <Circle
        cx="32"
        cy="32"
        r="32"
        strokeLinecap="round"
        color={color}
      />
    </Svg>
  );
}

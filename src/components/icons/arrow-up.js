import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  align-self: center;
  fill: transparent;
  stroke-width: 1.2px;
  height: 0.75rem;
  width: 0.75rem;
`;

const Path = styled.path`
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
`;

export default function ArrowUp() {
  return (
    <Svg viewBox="0 0 24 24">
      <Path
        d="M2 17L12 7l10 10"
        strokeWidth="2"
        stroke="rgb(36, 30, 18)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

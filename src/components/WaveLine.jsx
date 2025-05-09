import styled from "styled-components";

export const WaveLine = styled.svg`
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 176px;
  height: 11px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;

  path {
    stroke-dasharray: 300; 
    stroke-dashoffset: 300;
    transition: stroke-dashoffset 2s ease-in-out;
  }
`;


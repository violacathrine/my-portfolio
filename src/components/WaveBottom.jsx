// src/components/WaveBottom.jsx
import styled from "styled-components";

const Svg = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 160px;
  z-index: 0;
  pointer-events: none;

  @media (max-width: 768px) {
    height: 240px;
  }
`;

export const WaveBottom = () => (
  <Svg
    viewBox="0 0 1440 160"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="#ffcba4" d="M0,64 C360,160 1080,0 1440,96 L1440,160 L0,160 Z" />
  </Svg>
);

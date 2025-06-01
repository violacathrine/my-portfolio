// src/components/WaveBottom.jsx
import styled from "styled-components";

const Svg = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: auto;
  z-index: 0;
  pointer-events: none; /* så att den inte blockerar klick */
`;
export const WaveBottom = () => (
  <Svg
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#fff"
      d="M0,96L40,117.3C80,139,160,181,240,176C320,171,400,117,480,96C560,75,640,85,720,90.7C800,96,880,96,960,117.3C1040,139,1120,181,1200,176C1280,171,1360,117,1400,90.7L1440,64L1440,320L0,320Z"
    />
  </Svg>
);

import styled from "styled-components";

const Svg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 160px; /* desktop-höjd */
  z-index: 0;
  pointer-events: none;

  @media (max-width: 768px) {
    height: 240px; /* Gör vågen större på mobil */
  }
`;

export const WaveTop = () => (
  <Svg
    viewBox="0 0 1440 160" // detta KAN justeras till ex. "0 0 1440 200" för mer yta
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="#ffcba4" d="M0,96 C360,0 1080,160 1440,64 L1440,0 L0,0 Z" />
  </Svg>
);

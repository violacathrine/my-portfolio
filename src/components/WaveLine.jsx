// src/components/WaveLine.jsx
import React from "react";
import styled from "styled-components";

// Detta gör att vågorna upprepas horisontellt och tar hela bredden
const StyledWave = styled.div`
  width: 100%;
  height: 12px;
  background-image: url("data:image/svg+xml,%3Csvg width='176' height='11' viewBox='0 0 176 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 5.2453C8.87266 2.25157 14.5999 2.25157 19.1817 5.2453C23.7634 8.23904 29.4906 8.23904 36.3633 5.2453C43.236 2.25157 48.9632 2.25157 53.5449 5.2453C58.1267 8.23904 63.8539 8.23904 70.7266 5.2453C77.5993 2.25157 83.3265 2.25157 87.9082 5.2453C92.49 8.23904 98.2172 8.23904 105.09 5.2453C111.963 2.25157 117.69 2.25157 122.272 5.2453C126.853 8.23904 132.581 8.23904 139.453 5.2453C146.326 2.25157 152.053 2.25157 156.635 5.2453C161.217 8.23904 166.944 8.23904 173.816 5.2453' stroke='%23FF4575' stroke-width='6'/%3E%3C/svg%3E");
  background-repeat: repeat-x;
  background-size: auto 100%;
`;

export const WaveLine = () => {
  return <StyledWave aria-hidden="true" />;
};

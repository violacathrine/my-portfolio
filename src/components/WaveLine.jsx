// src/components/WaveLine.jsx
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  line-height: 0;
`;

const Svg = styled.svg`
  width: 100%;
  height: 6px;
  display: block;
`;

export const WaveLine = () => {
  return (
    <Wrapper aria-hidden="true">
      <Svg
        viewBox="0 0 176 11"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M1.44922 5.24533C8.32188 2.2516 14.0491 2.2516 18.6308 5.24533C23.2126 8.23907 28.9398 8.23907 35.8125 5.24533C42.6852 2.2516 48.4124 2.2516 52.9941 5.24533C57.5759 8.23907 63.3031 8.23907 70.1758 5.24533C77.0485 2.2516 82.7757 2.2516 87.3574 5.24533C91.9392 8.23907 97.6664 8.23907 104.539 5.24533C111.412 2.2516 117.139 2.2516 121.721 5.24533C126.303 8.23907 132.03 8.23907 138.903 5.24533C145.776 2.2516 151.503 2.2516 156.085 5.24533C160.667 8.23907 166.394 8.23907 173.267 5.24533"
          stroke="#FF4575"
          strokeWidth="2"
          fill="none"
        />
      </Svg>
    </Wrapper>
  );
};

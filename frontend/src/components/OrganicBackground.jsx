import styled, { keyframes } from "styled-components";
import { colors } from "../styles/designTokens";

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
`;

const float2 = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(-2deg); }
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
  pointer-events: none;
`;

const WaveShape = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.4;
  animation: ${float} 6s ease-in-out infinite;
  
  &:nth-child(2) {
    animation: ${float2} 8s ease-in-out infinite;
    animation-delay: -2s;
  }
  
  &:nth-child(3) {
    animation: ${float} 10s ease-in-out infinite;
    animation-delay: -4s;
  }
`;

const CoralWave = styled(WaveShape)`
  background: ${colors.accent.coralGradient};
  width: 300px;
  height: 200px;
  top: 10%;
  right: -100px;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
`;

const CreamWave = styled(WaveShape)`
  background: ${colors.accent.softGradient};
  width: 400px;
  height: 300px;
  bottom: 20%;
  left: -150px;
  border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  opacity: 0.3;
`;

const SageWave = styled(WaveShape)`
  background: ${colors.accent.sageGradient};
  width: 250px;
  height: 250px;
  top: 50%;
  right: 20%;
  border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
  opacity: 0.4;
`;

const SmallAccent = styled(WaveShape)`
  background: ${colors.background.mauve};
  width: 150px;
  height: 100px;
  top: 30%;
  left: 10%;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  opacity: 0.4;
`;

export const OrganicBackground = ({ variant = "coral" }) => {
  const renderWaves = () => {
    switch (variant) {
      case "coral":
        return (
          <>
            <CoralWave />
            <CreamWave />
            <SmallAccent />
          </>
        );
      case "sage":
        return (
          <>
            <SageWave style={{ top: '15%', right: '-50px', borderRadius: '50%' }} />
            <CreamWave style={{ bottom: '10%', left: '-100px', borderRadius: '50%' }} />
            <CoralWave style={{ opacity: 0.3, top: '60%', right: '-80px', width: '200px', height: '140px', borderRadius: '50%' }} />
            <SmallAccent style={{ top: '40%', left: '-30px', borderRadius: '50%' }} />
          </>
        );
      case "darkSage":
        return (
          <>
            <SmallAccent style={{ width: '300px', height: '200px', opacity: 0.4, top: '20%', right: '-60px', left: 'auto' }} />
            <CreamWave />
          </>
        );
      case "cream":
        return (
          <>
            <CreamWave />
            <CoralWave style={{ opacity: 0.2, top: '60%', right: '10%' }} />
          </>
        );
      default:
        return (
          <>
            <CoralWave />
            <SageWave />
          </>
        );
    }
  };

  return <BackgroundWrapper>{renderWaves()}</BackgroundWrapper>;
};
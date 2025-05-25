import styled, { keyframes } from "styled-components";
import { WaveLine } from "../components/WaveLine";
import { useNavigate } from "react-router-dom";

// Animations
const fadeInUp = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounceIn = keyframes`
  0% { opacity: 0; transform: translateY(-30px); }
  60% { opacity: 1; transform: translateY(10px); }
  80% { transform: translateY(-5px); }
  100% { 
    opacity: 1;
    transform: translateY(0); 
  }
`;

const waveMorph = keyframes`
  0% { stroke-dashoffset: 300; }
  100% { stroke-dashoffset: 0; }
`;

const Section = styled.section`
  min-height: 100dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgb(255, 228, 232);
  color: #000;
  padding: 32px 16px;

  @media (min-width: 768px) {
    padding: 32px 48px;
  }
`;

const Heading = styled.h1`
  font-size: 40px;
  line-height: 1.1;
  margin-top: 16px;
`;

const Line = styled.span`
  display: block;
  opacity: 0;
  transform: translateY(-20px);
  animation: ${fadeInUp} 0.5s ease-out forwards;
  animation-fill-mode: both;
`;

const Line1 = styled(Line)`
  animation-delay: 0s;
`;

const Line2 = styled.span`
  display: inline-block;
  font-size: 40px;
  opacity: 0;
  transform: translateY(-20px);
  animation: ${fadeInUp} 0.5s ease-out forwards;
  animation-delay: 0.7s;
  animation-fill-mode: both;
`;

const Exclamation = styled.span`
  display: inline-block;
  margin-left: 5px;
  opacity: 0;
  animation: ${bounceIn} 0.6s ease forwards;
  animation-delay: 1.4s;
  animation-fill-mode: both;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 1rem 0;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const Subheading = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin-top: 16px;
`;

const Button = styled.button`
  color: #000;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  margin-top: 32px;
  font-size: 20px;

  p {
    margin: 0;
    position: relative;
    z-index: 2;
    font-weight: bold;
  }

  svg {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover svg {
    opacity: 1;
  }

  &:hover svg path {
    animation: ${waveMorph} 1s linear infinite;
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
  }

  @media (min-width: 768px) {
    font-size: 25px;
  }
`;

export const Intro = () => {

const navigate = useNavigate();
  // Function to handle button click

const handleEnter = () => {
  navigate("/portfolio");
}
  return (
    <Section aria-labelledby="intro-heading">
      <Heading id="intro-heading" aria-label="Hi there, I'm Cathi!">
        <Line1>Hi there,</Line1>
        <Line2>
          I'm Cathi<Exclamation>!</Exclamation>
        </Line2>
      </Heading>

      <Image src="/profile-picture.jpg" alt="Portrait of Cathi" />

      <Subheading>I'm an open-minded and curious developer.</Subheading>

      <Button
        onClick={handleEnter}
        aria-label="Enter the main portfolio content"
      >
        <p>Enter my world</p>
        <WaveLine
          viewBox="0 0 176 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 5.2453C8.87266 2.25157 14.5999 2.25157 19.1817 5.2453C23.7634 8.23904 29.4906 8.23904 36.3633 5.2453C43.236 2.25157 48.9632 2.25157 53.5449 5.2453C58.1267 8.23904 63.8539 8.23904 70.7266 5.2453C77.5993 2.25157 83.3265 2.25157 87.9082 5.2453C92.49 8.23904 98.2172 8.23904 105.09 5.2453C111.963 2.25157 117.69 2.25157 122.272 5.2453C126.853 8.23904 132.581 8.23904 139.453 5.2453C146.326 2.25157 152.053 2.25157 156.635 5.2453C161.217 8.23904 166.944 8.23904 173.816 5.2453"
            stroke="#FF4575"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </WaveLine>
      </Button>
    </Section>
  );
};

import styled, { keyframes } from "styled-components";

// 🔸 Animationer
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

// 🔸 Styled components
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: rgb(255, 185, 227);
  color: #000;
  padding: 2.6rem;

  @media (min-width: 768px) {
    padding: 12rem;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  line-height: 1.1;
  margin-top: 1rem;
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
  font-size: 2.5rem;
  opacity: 0;
  transform: translateY(-20px);
  animation: ${fadeInUp} 0.5s ease-out forwards;
  animation-delay: 0.7s;
  animation-fill-mode: both;
`;

const Exclamation = styled.span`
  display: inline-block;
  margin-left: 0.3rem;
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
    width: 18rem;
    height: 18rem;
  }
`;

const Subheading = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 1rem;
`;

const Button = styled.button`
  color: #000;
  position: relative;
  display: flex;
  font-weight: 600;
  font-size: 20px;
  gap: 0.5rem;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  margin-top: 1rem;

  p {
    margin: 0;
    position: relative;
    font-size: 20px;
    color: #000;
  }

  &::after {
    position: absolute;
    content: "";
    width: 0;
    left: 0;
    bottom: -7px;
    background: #000;
    height: 2px;
    transition: 0.3s ease-out;
  }

  p::before {
    position: absolute;
    width: 0%;
    inset: 0;
    color: #000;
    overflow: hidden;
    transition: 0.3s ease-out;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover p::before {
    width: 100%;
  }
`;

export const Intro = () => {
  const handleEnter = () => {
    const target = document.getElementById("header-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      </Button>
      
    </Section>
  );
};

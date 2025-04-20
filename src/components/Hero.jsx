import styled from "styled-components"

function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroName>Harris</HeroName>
        <HeroTitle>UX Designer & Researcher</HeroTitle>
        <HeroDescription>Creating meaningful digital experiences through user-centered design</HeroDescription>
        <HeroButton href="#case-studies">View My Work</HeroButton>
      </HeroContent>
    </HeroContainer>
  )
}

const HeroContainer = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0a0b10 0%, #1a1b25 100%);
`

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  padding: 2rem;
  max-width: 600px;
`

const HeroName = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #7928CA, #FF0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const HeroTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 500;
`

const HeroDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.8;
  max-width: 500px;
`

const HeroButton = styled.a`
  display: inline-block;
  background: linear-gradient(to right, #7928CA, #FF0080);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(121, 40, 202, 0.3);
  }
`

export default Hero

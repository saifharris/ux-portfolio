import styled from "styled-components"

function AboutMe() {
  return (
    <AboutSection id="about">
      <SectionHeading>About Me</SectionHeading>

      <AboutGrid>
        <AboutImageContainer>
          {/* <AboutImage src="/placeholder.svg?height=500&width=400" alt="Jane Doe - UX Designer" /> */}
          <AboutImage
  src="/harris.jpg"
  alt="Jane Doe - UX Designer"
  style={{ width: '400px', height: '500px', objectFit: 'cover' }}
/>

        </AboutImageContainer>

        <AboutContent>
          <AboutHeading>Hello, I'm Harris</AboutHeading>
          <AboutSubheading>UX Designer & Researcher based in San Francisco</AboutSubheading>

          <AboutText>
            I'm passionate about creating intuitive, accessible, and delightful digital experiences that solve real user
            problems. With a background in cognitive psychology and 5 years of experience in UX design, I bring a unique
            perspective to every project.
          </AboutText>
          <AboutText>
            My design approach centers on empathy and understanding the user's needs, goals, and pain points. I believe
            in the power of research-driven design decisions and iterative testing to create products that truly
            resonate with users.
          </AboutText>
          <AboutText>
            When I'm not designing, you can find me hiking, practicing photography, or exploring new coffee shops around
            the city.
          </AboutText>

          <SkillsContainer>
            <SkillsHeading>Design Skills & Tools</SkillsHeading>
            <SkillsList>
              <SkillItem>User Research</SkillItem>
              <SkillItem>Wireframing</SkillItem>
              <SkillItem>Prototyping</SkillItem>
              <SkillItem>DEV OPS</SkillItem>
              <SkillItem>C#</SkillItem>
              <SkillItem>C++</SkillItem>
              <SkillItem>Sketch</SkillItem>
              <SkillItem>MERN</SkillItem>
            </SkillsList>
          </SkillsContainer>
        </AboutContent>
      </AboutGrid>
    </AboutSection>
  )
}

const AboutSection = styled.section`
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
`

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #7928CA, #FF0080);
    border-radius: 2px;
  }
`

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 5rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`

const AboutImageContainer = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`

const AboutImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`

const AboutHeading = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(to right, #7928CA, #FF0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const AboutSubheading = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  opacity: 0.8;
`

const AboutText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
  line-height: 1.8;
  opacity: 0.9;
`

const SkillsContainer = styled.div`
  margin-top: 1rem;
`

const SkillsHeading = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`

const SkillItem = styled.span`
  background: rgba(121, 40, 202, 0.1);
  border: 1px solid rgba(121, 40, 202, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(121, 40, 202, 0.2);
    transform: translateY(-2px);
  }
`

export default AboutMe

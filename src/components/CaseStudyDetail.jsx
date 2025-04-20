"use client"
import styled from "styled-components"

function CaseStudyDetail({ caseStudy, onBackClick }) {
  return (
    <DetailContainer>
      <BackButton onClick={onBackClick}>← Back to Case Studies</BackButton>

      <HeroSection>
        <HeroContent>
          <Category>{caseStudy.category}</Category>
          <Title>{caseStudy.title}</Title>
          <Overview>{caseStudy.overview}</Overview>
        </HeroContent>
        <HeroImageWrapper>
          <HeroImage src={caseStudy.thumbnail} alt={caseStudy.title} />
        </HeroImageWrapper>
      </HeroSection>

      <Section>
        <SectionTitle>Project Overview</SectionTitle>
        <Grid>
          <GridItem>
            <SubTitle>Problem</SubTitle>
            <Text>{caseStudy.problem}</Text>
          </GridItem>
          <GridItem>
            <SubTitle>My Role</SubTitle>
            <Text>{caseStudy.role}</Text>
          </GridItem>
        </Grid>
        <SubTitle>Project Goals</SubTitle>
        <GoalsList>
          {caseStudy.goals.map((goal, index) => (
            <GoalItem key={index}>
              <GoalNumber>{index + 1}</GoalNumber>
              <GoalText>{goal}</GoalText>
            </GoalItem>
          ))}
        </GoalsList>
      </Section>

      <Section>
        <SectionTitle>Research Phase</SectionTitle>
        <SubTitle>Research Methods</SubTitle>
        <MethodsList>
          {caseStudy.research.methods.map((method, index) => (
            <MethodItem key={index}>{method}</MethodItem>
          ))}
        </MethodsList>

        <SubTitle>Key Insights</SubTitle>
        <InsightsList>
          {caseStudy.research.insights.map((insight, index) => (
            <InsightItem key={index}>
              <InsightNumber>{index + 1}</InsightNumber>
              <InsightText>{insight}</InsightText>
            </InsightItem>
          ))}
        </InsightsList>
      </Section>

      <Section>
        <SectionTitle>Design Process</SectionTitle>
        <ProcessTimeline>
          {caseStudy.process.map((phase, index) => (
            <ProcessPhase key={index}>
              <ProcessImageContainer>
                <ProcessImage src={phase.image} alt={phase.phase} />
              </ProcessImageContainer>
              <ProcessContent>
                <ProcessPhaseTitle>{phase.phase}</ProcessPhaseTitle>
                <ProcessDescription>{phase.description}</ProcessDescription>
              </ProcessContent>
            </ProcessPhase>
          ))}
        </ProcessTimeline>
      </Section>

      <Section>
        <SectionTitle>Final Outcome</SectionTitle>
        <OutcomeGrid>
          {caseStudy.outcome.images.map((image, index) => (
            <OutcomeImageContainer key={index}>
              <OutcomeImage src={image} alt={`Final design ${index + 1}`} />
            </OutcomeImageContainer>
          ))}
        </OutcomeGrid>

        <SubTitle>Results</SubTitle>
        <ResultsList>
          {caseStudy.outcome.results.map((result, index) => (
            <ResultItem key={index}>{result}</ResultItem>
          ))}
        </ResultsList>
      </Section>

      <Section>
        <SectionTitle>Reflection</SectionTitle>
        <Text>{caseStudy.reflection}</Text>
      </Section>

      <NextProjectSection>
        <NextProjectTitle>Ready to see more?</NextProjectTitle>
        <BackButton onClick={onBackClick}>
          <span>Back to Case Studies</span>→
        </BackButton>
      </NextProjectSection>
    </DetailContainer>
  )
}

const DetailContainer = styled.div`
  padding: 2rem 0 6rem;
`

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #7928CA;
  font-weight: 600;
  margin-bottom: 3rem;
  transition: transform 0.3s ease;
  font-size: 1.1rem;
  
  &:hover {
    transform: translateX(-5px);
  }
`

const HeroSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Category = styled.div`
  display: inline-block;
  background: linear-gradient(to right, #7928CA, #FF0080);
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  background: linear-gradient(to right, #7928CA, #FF0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Overview = styled.p`
  font-size: 1.3rem;
  line-height: 1.7;
  opacity: 0.9;
`

const HeroImageWrapper = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`

const Section = styled.section`
  margin-bottom: 5rem;
`

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 2.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(to right, #7928CA, #FF0080);
    border-radius: 2px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const GridItem = styled.div``

const SubTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
  color: #7928CA;
`

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.9;
  margin-bottom: 2rem;
`

const GoalsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`

const GoalItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  transition: transform 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border-color: rgba(121, 40, 202, 0.3);
  }
`

const GoalNumber = styled.div`
  background: linear-gradient(to right, #7928CA, #FF0080);
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
`

const GoalText = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
`

const MethodsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`

const MethodItem = styled.div`
  background: rgba(121, 40, 202, 0.1);
  border: 1px solid rgba(121, 40, 202, 0.3);
  padding: 0.7rem 1.4rem;
  border-radius: 30px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(121, 40, 202, 0.2);
    transform: translateY(-2px);
  }
`

const InsightsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
`

const InsightItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  transition: transform 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  &:hover {
    transform: translateX(5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border-color: rgba(121, 40, 202, 0.3);
  }
`

const InsightNumber = styled.div`
  background: linear-gradient(to right, #7928CA, #FF0080);
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
`

const InsightText = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
`

const ProcessTimeline = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
`

const ProcessPhase = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const ProcessImageContainer = styled.div`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`

const ProcessImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
  
  &:hover {
    transform: scale(1.03);
  }
`

const ProcessContent = styled.div``

const ProcessPhaseTitle = styled.h4`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #7928CA;
`

const ProcessDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  opacity: 0.9;
`

const OutcomeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const OutcomeImageContainer = styled.div`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`

const OutcomeImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.03);
  }
`

const ResultsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 2rem;
`

const ResultItem = styled.li`
  position: relative;
  padding-left: 2rem;
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
  line-height: 1.7;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.7rem;
    width: 10px;
    height: 10px;
    background: #7928CA;
    border-radius: 50%;
  }
`

const NextProjectSection = styled.div`
  text-align: center;
  padding: 4rem 0;
  margin-top: 4rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  ${BackButton} {
    margin: 2rem auto;
    justify-content: center;
    
    &:hover {
      transform: translateX(0) translateY(-3px);
    }
  }
`

const NextProjectTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`

export default CaseStudyDetail

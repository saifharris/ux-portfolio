"use client"

import styled from "styled-components"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

function Process() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const processSteps = [
    {
      number: "01",
      title: "Research",
      description:
        "I start by understanding the problem space through user interviews, competitive analysis, and market research to identify opportunities and user needs.",
    },
    {
      number: "02",
      title: "Define",
      description:
        "Based on research insights, I define the problem statement, user personas, and project requirements to establish a clear direction.",
    },
    {
      number: "03",
      title: "Ideate",
      description:
        "I explore multiple solutions through sketching, wireframing, and collaborative brainstorming sessions to generate innovative ideas.",
    },
    {
      number: "04",
      title: "Prototype",
      description:
        "I create interactive prototypes of varying fidelity to visualize the solution and prepare for testing with real users.",
    },
    {
      number: "05",
      title: "Test",
      description:
        "I conduct usability testing with target users to validate assumptions, identify pain points, and gather feedback for improvements.",
    },
    {
      number: "06",
      title: "Implement",
      description:
        "I collaborate with developers to ensure the design is implemented correctly, providing specifications and assets as needed.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <ProcessSection id="process" ref={ref}>
      <div className="container">
        <SectionHeading className="section-heading">My Design Process</SectionHeading>

        <ProcessIntro>
          I follow a user-centered design process that emphasizes research, iteration, and validation to create
          experiences that truly meet user needs while achieving business goals.
        </ProcessIntro>

        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <ProcessGrid>
            {processSteps.map((step) => (
              <motion.div key={step.number} variants={itemVariants}>
                <ProcessCard>
                  <ProcessNumber>{step.number}</ProcessNumber>
                  <ProcessTitle>{step.title}</ProcessTitle>
                  <ProcessDescription>{step.description}</ProcessDescription>
                </ProcessCard>
              </motion.div>
            ))}
          </ProcessGrid>
        </motion.div>

        <ProcessCTA>
          <CTAText>Want to see how I apply this process to real projects?</CTAText>
          <CTAButton href="#case-studies">View Case Studies</CTAButton>
        </ProcessCTA>
      </div>
      <BackgroundCircle />
    </ProcessSection>
  )
}

const ProcessSection = styled.section`
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
`

const SectionHeading = styled.h2`
  color: ${({ theme }) => theme.colors.text};
`

const ProcessIntro = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  font-size: 1.2rem;
  line-height: 1.8;
  opacity: 0.9;
`

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const ProcessCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 16px;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  z-index: 1;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    border-color: rgba(121, 40, 202, 0.3);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(121, 40, 202, 0.05), rgba(0, 255, 255, 0.05));
    border-radius: 16px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`

const ProcessNumber = styled.span`
  font-size: 3rem;
  font-weight: 800;
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  margin-bottom: 1rem;
`

const ProcessTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`

const ProcessDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  opacity: 0.8;
  flex-grow: 1;
`

const ProcessCTA = styled.div`
  margin-top: 5rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`

const CTAText = styled.p`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
`

const CTAButton = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.gradients.primary};
  color: white;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows.glow};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(121, 40, 202, 0.4);
  }
`

const BackgroundCircle = styled.div`
  position: absolute;
  top: 10%;
  right: -15%;
  width: 40vw;
  height: 40vw;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 0, 128, 0.03) 0%, transparent 70%);
  z-index: 0;
`

export default Process

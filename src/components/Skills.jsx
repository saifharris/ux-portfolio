"use client"

import { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

function Skills() {
  const [activeTab, setActiveTab] = useState("design")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = {
    design: [
      { name: "User Research", level: 95 },
      { name: "Wireframing", level: 90 },
      { name: "Prototyping", level: 85 },
      { name: "Usability Testing", level: 90 },
      { name: "Information Architecture", level: 80 },
      { name: "Interaction Design", level: 85 },
    ],
    tools: [
      { name: "Figma", level: 95 },
      { name: "Adobe XD", level: 85 },
      { name: "Sketch", level: 80 },
      { name: "InVision", level: 75 },
      { name: "Principle", level: 70 },
      { name: "Zeplin", level: 85 },
    ],
    other: [
      { name: "HTML/CSS", level: 80 },
      { name: "JavaScript", level: 65 },
      { name: "React", level: 60 },
      { name: "Design Systems", level: 85 },
      { name: "Accessibility", level: 90 },
      { name: "Project Management", level: 75 },
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <SkillsSection id="skills" ref={ref}>
      <div className="container">
        <SectionHeading className="section-heading">My Skills</SectionHeading>

        <TabsContainer>
          <TabButton active={activeTab === "design"} onClick={() => setActiveTab("design")}>
            Design Skills
          </TabButton>
          <TabButton active={activeTab === "tools"} onClick={() => setActiveTab("tools")}>
            Tools & Software
          </TabButton>
          <TabButton active={activeTab === "other"} onClick={() => setActiveTab("other")}>
            Other Skills
          </TabButton>
        </TabsContainer>

        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <SkillsGrid>
            {skills[activeTab].map((skill, index) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <SkillItem>
                  <SkillHeader>
                    <SkillName>{skill.name}</SkillName>
                    <SkillLevel>{skill.level}%</SkillLevel>
                  </SkillHeader>
                  <SkillBar>
                    <SkillProgress level={skill.level} />
                  </SkillBar>
                </SkillItem>
              </motion.div>
            ))}
          </SkillsGrid>
        </motion.div>

        <SkillsNote>
          I'm constantly learning and expanding my skillset to stay current with industry trends and best practices.
        </SkillsNote>
      </div>
      <BackgroundGlow />
    </SkillsSection>
  )
}

const SkillsSection = styled.section`
  padding: 8rem 0;
  position: relative;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
`

const SectionHeading = styled.h2`
  color: ${({ theme }) => theme.colors.text};
`

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`

const TabButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: ${({ active, theme }) => (active ? theme.gradients.primary : "rgba(255, 255, 255, 0.05)")};
  color: ${({ active, theme }) => (active ? "white" : theme.colors.text)};
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: ${({ active, theme }) => (active ? theme.shadows.glow : "none")};
  
  &:hover {
    background: ${({ active, theme }) => (active ? theme.gradients.primary : "rgba(255, 255, 255, 0.1)")};
    transform: translateY(-2px);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    max-width: 300px;
  }
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const SkillItem = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    border-color: rgba(121, 40, 202, 0.3);
  }
`

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

const SkillName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
`

const SkillLevel = styled.span`
  font-size: 0.9rem;
  opacity: 0.7;
`

const SkillBar = styled.div`
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
`

const SkillProgress = styled.div`
  height: 100%;
  width: ${({ level }) => `${level}%`};
  background: ${({ theme }) => theme.gradients.primary};
  border-radius: 4px;
  transition: width 1.5s ease;
`

const SkillsNote = styled.p`
  text-align: center;
  margin-top: 3rem;
  font-style: italic;
  opacity: 0.7;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`

const BackgroundGlow = styled.div`
  position: absolute;
  top: 50%;
  right: -10%;
  width: 40%;
  height: 60%;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.1), transparent 70%);
  filter: blur(60px);
  z-index: 0;
`

export default Skills

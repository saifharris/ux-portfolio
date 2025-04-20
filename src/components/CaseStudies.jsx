"use client"

import { useState } from "react"
import styled from "styled-components"
import CaseStudyCard from "./CaseStudyCard"
import CaseStudyDetail from "./CaseStudyDetail"

// Sample case study data
const caseStudies = [
  {
    id: 1,
    title: "Redesigning the Mobile Banking Experience",
    category: "Mobile App",
    thumbnail: "/mobile.webp?height=600&width=800",
    overview: "A comprehensive redesign of a banking app to improve user satisfaction and task completion rates.",
    problem:
      "Users were struggling to complete basic banking tasks on the mobile app, leading to high abandonment rates and customer frustration.",
    goals: [
      "Increase task completion rate by 40%",
      "Reduce customer support calls related to app usage by 30%",
      "Improve overall user satisfaction score from 3.2 to 4.5/5",
    ],
    role: "Lead UX Designer responsible for research, wireframing, prototyping, and usability testing.",
    research: {
      methods: ["User interviews", "Usability testing", "Competitive analysis", "Analytics review"],
      insights: [
        "Users found the navigation confusing and inconsistent",
        "Critical functions were buried too deep in the app",
        "Authentication process was cumbersome and frustrating",
        "Visual hierarchy didn't emphasize important information",
      ],
    },
    process: [
      {
        phase: "Discovery",
        description: "Conducted user interviews and analyzed app analytics to identify pain points and opportunities.",
        image: "/discovery.jpg?height=100&width=200",
      },
      {
        phase: "Ideation",
        description:
          "Created user flows, sketches, and wireframes to explore different solutions to the identified problems.",
        image: "/idea.jpg?height=400&width=600",
      },
      {
        phase: "Prototyping",
        description: "Developed interactive prototypes in Figma to test with users and gather feedback.",
        image: "/prototyping.png?height=400&width=600",
      },
      {
        phase: "Testing",
        description:
          "Conducted usability testing with 12 participants to validate design decisions and identify areas for improvement.",
        image: "/test.png?height=400&width=600",
      },
    ],
    outcome: {
      results: [
        "Task completion rate increased by 52%",
        "Customer support calls decreased by 35%",
        "User satisfaction score improved to 4.7/5",
        "App store rating improved from 3.2 to 4.6 stars",
      ],
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
    reflection:
      "This project taught me the importance of thorough user research and iterative testing. The biggest challenge was balancing security requirements with usability. If I were to approach this project again, I would involve stakeholders from security and compliance teams earlier in the process.",
  },
  {
    id: 2,
    title: "Designing an Accessible E-learning Platform",
    category: "Web Application",
    thumbnail: "/elearning.jpg?height=600&width=800",
    overview:
      "Created an inclusive e-learning platform that meets WCAG 2.1 AA standards while providing an engaging learning experience.",
    problem:
      "Existing e-learning platforms were not accessible to users with disabilities, creating barriers to education for a significant portion of the population.",
    goals: [
      "Create a fully WCAG 2.1 AA compliant platform",
      "Ensure an engaging experience for all users regardless of abilities",
      "Develop a design system that supports accessibility by default",
    ],
    role: "UX Designer and Accessibility Specialist responsible for research, wireframing, prototyping, and accessibility testing.",
    research: {
      methods: [
        "User interviews with people with disabilities",
        "Accessibility audits of existing platforms",
        "Expert reviews",
        "Secondary research",
      ],
      insights: [
        "Screen reader compatibility was poor across most platforms",
        "Color contrast issues were prevalent",
        "Interactive elements lacked proper focus states",
        "Video content rarely had proper captions or transcripts",
      ],
    },
    process: [
      {
        phase: "Research",
        description:
          "Conducted interviews with users with various disabilities and reviewed existing accessibility guidelines and best practices.",
        image: "/discovery.jpg?height=100&width=200",
      },
      {
        phase: "Design System",
        description: "Created an accessible design system with components that meet WCAG 2.1 AA standards by default.",
        image: "/idea.jpg?height=400&width=600",
      },
      {
        phase: "Prototyping",
        description:
          "Developed high-fidelity prototypes in Figma with a focus on keyboard navigation and screen reader compatibility.",
        image: "/prototyping.png?height=400&width=600",
      },
      {
        phase: "Testing",
        description:
          "Conducted accessibility testing with users who rely on assistive technologies to validate the design.",
        image: "/test.png?height=400&width=600",
      },
    ],
    outcome: {
      results: [
        "Platform achieved WCAG 2.1 AA compliance",
        "Usability testing with assistive technology users showed 95% task completion rate",
        "Design system was adopted company-wide for all new products",
        "Project received recognition from accessibility advocacy organizations",
      ],
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
    reflection:
      "This project deepened my understanding of inclusive design principles. The biggest challenge was educating stakeholders about the importance of accessibility. In the future, I would allocate more time for accessibility training for the entire team to ensure everyone understands its importance.",
  },
]

function CaseStudies() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null)

  const handleCaseStudyClick = (id) => {
    setSelectedCaseStudy(id)
    // Scroll to top of the page when a case study is selected
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleBackClick = () => {
    setSelectedCaseStudy(null)
    // Scroll back to the case studies section
    document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })
  }

  // If a case study is selected, show its details
  if (selectedCaseStudy !== null) {
    const caseStudy = caseStudies.find((cs) => cs.id === selectedCaseStudy)
    if (caseStudy) {
      return <CaseStudyDetail caseStudy={caseStudy} onBackClick={handleBackClick} />
    }
  }

  return (
    <CaseStudiesSection id="case-studies">
      <SectionHeading>Case Studies</SectionHeading>

      <CaseStudiesIntro>
        Explore my selected projects that showcase my design process, problem-solving skills, and the impact of my work.
        Each case study provides an in-depth look at the challenges, solutions, and outcomes.
      </CaseStudiesIntro>

      <CaseStudiesGrid>
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} onClick={() => handleCaseStudyClick(caseStudy.id)} />
        ))}
      </CaseStudiesGrid>
    </CaseStudiesSection>
  )
}

const CaseStudiesSection = styled.section`
  padding: 8rem 0;
  position: relative;
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

const CaseStudiesIntro = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  font-size: 1.2rem;
  line-height: 1.8;
  opacity: 0.9;
`

const CaseStudiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export default CaseStudies

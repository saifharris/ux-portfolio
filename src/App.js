import styled from "styled-components"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import CaseStudies from "./components/CaseStudies"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"

function App() {
  return (
    <MainContainer>
      <Navigation />
      <ContentWrapper>
        <Hero />
        <AboutMe />
        <CaseStudies />
        <Footer />
      </ContentWrapper>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #0a0b10;
  color: #ffffff;
`

const ContentWrapper = styled.main`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`

export default App

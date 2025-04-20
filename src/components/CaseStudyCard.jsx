"use client"
import styled from "styled-components"

function CaseStudyCard({ caseStudy, onClick }) {
  return (
    <CardContainer onClick={onClick}>
      <CardImageContainer>
        <CardImage src={caseStudy.thumbnail} alt={caseStudy.title} />
        <CardOverlay />
        <CardCategory>{caseStudy.category}</CardCategory>
      </CardImageContainer>
      <CardContent>
        <CardTitle>{caseStudy.title}</CardTitle>
        <CardDescription>{caseStudy.overview}</CardDescription>
        <CardButton>
          <ButtonText>View Case Study</ButtonText>
          <ButtonIcon>→</ButtonIcon>
        </CardButton>
      </CardContent>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(121, 40, 202, 0.3);
  }
`

const CardImageContainer = styled.div`
  position: relative;
  height: 240px;
  overflow: hidden;
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(10, 11, 16, 0.9), transparent 50%);
`

const CardCategory = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  background: linear-gradient(to right, #7928CA, #FF0080);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 10;
`

const CardContent = styled.div`
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const CardTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  line-height: 1.3;
  background: linear-gradient(to right, #7928CA, #FF0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const CardDescription = styled.p`
  font-size: 1rem;
  opacity: 0.8;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex-grow: 1;
`

const CardButton = styled.button`
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: #7928CA;
  padding: 0.6rem 0;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;
  
  &:hover {
    border-bottom: 2px solid #7928CA;
    transform: translateX(5px);
  }
`

const ButtonText = styled.span``

const ButtonIcon = styled.span`
  transition: transform 0.3s ease;
  
  ${CardButton}:hover & {
    transform: translateX(3px);
  }
`

export default CaseStudyCard

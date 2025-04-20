import styled, { keyframes } from "styled-components"

function LoadingSpinner() {
  return (
    <SpinnerContainer>
      <LogoContainer>
        <LogoText>
          JD<LogoAccent>.</LogoAccent>
        </LogoText>
      </LogoContainer>
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
      <LoadingText>Loading amazing things...</LoadingText>
    </SpinnerContainer>
  )
}

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  animation: ${fadeIn} 0.5s ease;
`

const LogoContainer = styled.div`
  margin-bottom: 2rem;
  animation: ${pulse} 2s infinite ease-in-out;
`

const LogoText = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.heading};
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
`

const LogoAccent = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 3.5rem;
  line-height: 0.8;
`

const SpinnerWrapper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin-bottom: 1.5rem;
`

const Spinner = styled.div`
  width: 100%;
  height: 100%;
  border: 4px solid rgba(121, 40, 202, 0.1);
  border-radius: 50%;
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  border-right: 4px solid ${({ theme }) => theme.colors.secondary};
  border-bottom: 4px solid ${({ theme }) => theme.colors.accent};
  animation: ${rotate} 1.5s linear infinite;
`

const LoadingText = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 500;
`

export default LoadingSpinner

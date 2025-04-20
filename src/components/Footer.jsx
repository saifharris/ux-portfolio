import styled from "styled-components"

function Footer() {
  return (
    <FooterContainer id="contact">
      <FooterContent>
        <ContactSection>
          <SectionTitle>Get In Touch</SectionTitle>
          <ContactText>
            I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to work
            together on something amazing!
          </ContactText>
          <ContactEmail href="harrissaif01@gmail.com">✉️ harrissaif01@gmail.com</ContactEmail>
          <SocialLinks>
            <SocialLink href="https://www.linkedin.com/in/harris-saif-863a84246/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </SocialLink>
            <SocialLink href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
              Dribbble
            </SocialLink>
            <SocialLink href="https://github.com/saifharris" target="https://github.com/saifharris" rel="noopener noreferrer">
              GitHub
            </SocialLink>
          </SocialLinks>
        </ContactSection>

        <FooterBottom>
          <Copyright>© {new Date().getFullYear()} Harris. All rights reserved.</Copyright>
          <FooterNav>
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#case-studies">Work</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </FooterNav>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  background: rgba(255, 255, 255, 0.02);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 5rem 0 2rem;
  position: relative;
  overflow: hidden;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const ContactSection = styled.div`
  max-width: 600px;
  margin: 0 auto 4rem;
  text-align: center;
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #7928CA, #FF0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const ContactText = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  opacity: 0.9;
  margin-bottom: 2rem;
`

const ContactEmail = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #7928CA;
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
  }
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.5rem;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    background: rgba(121, 40, 202, 0.1);
    color: #7928CA;
    transform: translateY(-3px);
    border-color: rgba(121, 40, 202, 0.3);
  }
`

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
`

const Copyright = styled.p`
  font-size: 0.9rem;
  opacity: 0.7;
`

const FooterNav = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }
`

const FooterLink = styled.a`
  font-size: 0.9rem;
  opacity: 0.7;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 1;
    color: #7928CA;
  }
`

export default Footer

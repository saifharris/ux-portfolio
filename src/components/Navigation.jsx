"use client"

import { useState, useEffect } from "react"
import styled from "styled-components"

function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <NavContainer scrolled={scrolled}>
      <NavContent>
        <Logo href="/">H</Logo>
        <NavLinks>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#case-studies">Case Studies</NavItem>
          <ContactButton href="#contact">Contact</ContactButton>
        </NavLinks>
      </NavContent>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all 0.4s ease;
  background: ${(props) => (props.scrolled ? "rgba(10, 11, 16, 0.9)" : "transparent")};
  backdrop-filter: ${(props) => (props.scrolled ? "blur(10px)" : "none")};
  padding: ${(props) => (props.scrolled ? "1rem 0" : "1.5rem 0")};
`

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`

const Logo = styled.a`
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(to right, #7928CA, #FF0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`

const NavItem = styled.a`
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background: linear-gradient(to right, #7928CA, #FF0080);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #7928CA;
    
    &:after {
      width: 100%;
    }
  }
`

const ContactButton = styled.a`
  background: linear-gradient(to right, #7928CA, #FF0080);
  color: white;
  padding: 0.7rem 1.8rem;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 20px rgba(121, 40, 202, 0.4);
  }
`

export default Navigation

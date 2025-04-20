"use client"

import { useState, useEffect } from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Jane's approach to UX design is methodical and user-focused. She transformed our complex application into an intuitive experience that our users love. Her research-driven process uncovered insights we hadn't considered.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO at StartupX",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Working with Jane was a game-changer for our startup. She quickly understood our vision and translated it into a beautiful, functional design that helped us secure our next round of funding. I can't recommend her enough!",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director at BrandCo",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Jane's redesign of our e-commerce platform resulted in a 40% increase in conversions. Her attention to detail and understanding of user psychology made all the difference. She's now our go-to designer for all projects.",
    },
  ]

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [inView, testimonials.length])

  const handleDotClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <TestimonialsSection id="testimonials" ref={ref}>
      <div className="container">
        <SectionHeading className="section-heading">Client Testimonials</SectionHeading>

        <TestimonialsWrapper>
          <TestimonialsTrack style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <TestimonialSlide key={testimonial.id}>
                <TestimonialContent>
                  <QuoteIcon>"</QuoteIcon>
                  <TestimonialQuote>{testimonial.quote}</TestimonialQuote>
                  <TestimonialAuthor>
                    <AuthorImage src={testimonial.image} alt={testimonial.name} />
                    <AuthorInfo>
                      <AuthorName>{testimonial.name}</AuthorName>
                      <AuthorRole>{testimonial.role}</AuthorRole>
                    </AuthorInfo>
                  </TestimonialAuthor>
                </TestimonialContent>
              </TestimonialSlide>
            ))}
          </TestimonialsTrack>
        </TestimonialsWrapper>

        <TestimonialDots>
          {testimonials.map((_, index) => (
            <TestimonialDot key={index} active={index === activeIndex} onClick={() => handleDotClick(index)} />
          ))}
        </TestimonialDots>
      </div>
      <BackgroundGradient />
    </TestimonialsSection>
  )
}

const TestimonialsSection = styled.section`
  padding: 8rem 0;
  position: relative;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  overflow: hidden;
`

const SectionHeading = styled.h2`
  color: ${({ theme }) => theme.colors.text};
`

const TestimonialsWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`

const TestimonialsTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
`

const TestimonialSlide = styled.div`
  min-width: 100%;
  padding: 2rem;
`

const TestimonialContent = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 3rem;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: ${({ theme }) => theme.shadows.medium};
`

const QuoteIcon = styled.div`
  position: absolute;
  top: 20px;
  left: 30px;
  font-size: 8rem;
  line-height: 1;
  opacity: 0.1;
  font-family: Georgia, serif;
  color: ${({ theme }) => theme.colors.primary};
`

const TestimonialQuote = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
  font-style: italic;
`

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const AuthorImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.colors.primary};
`

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const AuthorName = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
`

const AuthorRole = styled.p`
  font-size: 0.9rem;
  opacity: 0.7;
`

const TestimonialDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2rem;
`

const TestimonialDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ active, theme }) => (active ? theme.colors.primary : "rgba(255, 255, 255, 0.2)")};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: ${({ active, theme }) => (active ? theme.colors.primary : "rgba(255, 255, 255, 0.4)")};
  }
`

const BackgroundGradient = styled.div`
  position: absolute;
  top: -20%;
  left: -10%;
  width: 70%;
  height: 140%;
  background: linear-gradient(45deg, rgba(121, 40, 202, 0.03), rgba(255, 0, 128, 0.03));
  transform: rotate(-15deg);
  z-index: 0;
`

export default Testimonials

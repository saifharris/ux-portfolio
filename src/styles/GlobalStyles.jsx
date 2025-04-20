import { createGlobalStyle } from "styled-components"

export const theme = {
  colors: {
    background: "#0a0b10",
    backgroundAlt: "#0f1118",
    primary: "#7928CA",
    secondary: "#FF0080",
    accent: "#00FFFF",
    text: "#ffffff",
    textSecondary: "rgba(255, 255, 255, 0.7)",
    textMuted: "rgba(255, 255, 255, 0.5)",
    border: "rgba(255, 255, 255, 0.1)",
    cardBg: "rgba(15, 17, 24, 0.8)",
  },
  gradients: {
    primary: "linear-gradient(90deg, #7928CA, #FF0080)",
    secondary: "linear-gradient(90deg, #00FFFF, #7928CA)",
    accent: "linear-gradient(90deg, #FF0080, #00FFFF)",
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
  },
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
  shadows: {
    small: "0 2px 10px rgba(0, 0, 0, 0.2)",
    medium: "0 5px 15px rgba(0, 0, 0, 0.3)",
    large: "0 10px 30px rgba(0, 0, 0, 0.4)",
    glow: "0 0 20px rgba(121, 40, 202, 0.3)",
    neon: "0 0 10px rgba(0, 255, 255, 0.5)",
  },
  animations: {
    fast: "0.2s",
    medium: "0.4s",
    slow: "0.6s",
  },
}

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    background-image: 
      radial-gradient(circle at 25% 10%, rgba(121, 40, 202, 0.1), transparent 20%),
      radial-gradient(circle at 75% 30%, rgba(255, 0, 128, 0.08), transparent 20%),
      radial-gradient(circle at 50% 60%, rgba(0, 255, 255, 0.07), transparent 30%);
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.body};
    overflow-x: hidden;
    line-height: 1.6;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 700;
    line-height: 1.2;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
  }

  h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
  }

  p {
    line-height: 1.8;
  }

  section {
    padding: 6rem 0;
    position: relative;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: ${({ theme }) => theme.fonts.body};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgroundAlt};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }

  .section-heading {
    position: relative;
    margin-bottom: 3rem;
    text-align: center;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: ${({ theme }) => theme.gradients.primary};
      border-radius: 2px;
    }
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .blur-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    backdrop-filter: blur(100px);
    z-index: -1;
  }
`

"use client"

import { useState, useEffect } from "react"
import styled from "styled-components"

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const onMouseEnter = () => {
      setHidden(false)
    }

    const onMouseLeave = () => {
      setHidden(true)
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", () => setLinkHovered(true))
        el.addEventListener("mouseleave", () => setLinkHovered(false))
      })
    }

    addEventListeners()
    handleLinkHoverEvents()

    return () => {
      removeEventListeners()
    }
  }, [])

  return (
    <>
      <CursorDot
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        className={`${hidden ? "hidden" : ""} ${clicked ? "clicked" : ""} ${linkHovered ? "link-hovered" : ""}`}
      />
      <CursorRing
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        className={`${hidden ? "hidden" : ""} ${clicked ? "clicked" : ""} ${linkHovered ? "link-hovered" : ""}`}
      />
    </>
  )
}

const CursorDot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;

  &.hidden {
    opacity: 0;
  }

  &.clicked {
    transform: translate(-50%, -50%) scale(0.8);
  }

  &.link-hovered {
    transform: translate(-50%, -50%) scale(1.5);
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`

const CursorRing = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  transition: width 0.3s, height 0.3s, border 0.3s, opacity 0.3s, transform 0.3s;

  &.hidden {
    opacity: 0;
  }

  &.clicked {
    width: 30px;
    height: 30px;
    border-width: 3px;
  }

  &.link-hovered {
    width: 60px;
    height: 60px;
    border-color: ${({ theme }) => theme.colors.secondary};
    border-width: 2px;
  }
`

export default Cursor

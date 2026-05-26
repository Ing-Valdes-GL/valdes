'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const springConfig = { damping: 28, stiffness: 550, mass: 0.4 }
  const outerSpringConfig = { damping: 22, stiffness: 200, mass: 0.6 }

  const innerX = useSpring(rawX, springConfig)
  const innerY = useSpring(rawY, springConfig)
  const outerX = useSpring(rawX, outerSpringConfig)
  const outerY = useSpring(rawY, outerSpringConfig)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const handleDown  = () => setIsClicking(true)
    const handleUp    = () => setIsClicking(false)
    const handleLeave = () => setIsVisible(false)
    const handleEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseover', handleOver)
    window.addEventListener('mousedown', handleDown)
    window.addEventListener('mouseup', handleUp)
    document.documentElement.addEventListener('mouseleave', handleLeave)
    document.documentElement.addEventListener('mouseenter', handleEnter)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleOver)
      window.removeEventListener('mousedown', handleDown)
      window.removeEventListener('mouseup', handleUp)
      document.documentElement.removeEventListener('mouseleave', handleLeave)
      document.documentElement.removeEventListener('mouseenter', handleEnter)
    }
  }, [rawX, rawY, isVisible])

  if (typeof window === 'undefined') return null

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998] mix-blend-normal"
        style={{
          x: outerX,
          y: outerY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.6 : isClicking ? 0.8 : 1,
          borderColor: isHovering ? 'rgba(139,92,246,0.8)' : 'rgba(0,217,245,0.6)',
        }}
        transition={{ duration: 0.15 }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            border: '1.5px solid rgba(0,217,245,0.6)',
            backgroundColor: isHovering ? 'rgba(139,92,246,0.07)' : 'transparent',
            transition: 'border-color 0.2s, background-color 0.2s',
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{
          x: innerX,
          y: innerY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.5 : isHovering ? 0 : 1,
          backgroundColor: isHovering ? '#8b5cf6' : '#00d9f5',
        }}
        transition={{ duration: 0.1 }}
      >
        <div
          style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            backgroundColor: '#00d9f5',
            boxShadow: '0 0 8px rgba(0,217,245,0.8)',
          }}
        />
      </motion.div>
    </>
  )
}

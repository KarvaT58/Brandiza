"use client"

import { useEffect, useRef } from 'react'
import './Lanyard.css'

export default function Lanyard({
  className = '',
  image = null,
  width = 200,
  height = 300,
  stiffness = 0.15,
  damping = 0.85,
  mass = 1
}) {
  const containerRef = useRef(null)
  const lanyardRef = useRef(null)
  const animationRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const velocityRef = useRef({ x: 0, y: 0 })
  const positionRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const container = containerRef.current
    const lanyard = lanyardRef.current
    if (!container || !lanyard) return

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left - rect.width / 2,
        y: e.clientY - rect.top - rect.height / 2
      }
    }

    const handleMouseEnter = () => {
      container.addEventListener('mousemove', handleMouseMove)
    }

    const handleMouseLeave = () => {
      container.removeEventListener('mousemove', handleMouseMove)
      mouseRef.current = { x: 0, y: 0 }
    }

    const animate = () => {
      const targetX = mouseRef.current.x * 0.3
      const targetY = mouseRef.current.y * 0.3

      // Física simples com spring
      const dx = targetX - positionRef.current.x
      const dy = targetY - positionRef.current.y

      velocityRef.current.x += dx * stiffness
      velocityRef.current.y += dy * stiffness

      velocityRef.current.x *= damping
      velocityRef.current.y *= damping

      positionRef.current.x += velocityRef.current.x
      positionRef.current.y += velocityRef.current.y

      if (lanyard) {
        lanyard.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px) rotate(${positionRef.current.x * 0.1}deg)`
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)
    animate()

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [stiffness, damping])

  const imageSrc = image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop'

  return (
    <div ref={containerRef} className={`lanyard-container ${className}`} style={{ width: '100%', height: '100%' }}>
      <div ref={lanyardRef} className="lanyard-item">
        <img 
          src={imageSrc} 
          alt="Lanyard" 
          className="lanyard-image"
          onError={(e) => {
            // Fallback se a imagem não carregar
            e.currentTarget.style.display = 'none'
            if (!e.currentTarget.parentElement.querySelector('.lanyard-placeholder')) {
              const placeholder = document.createElement('div')
              placeholder.className = 'lanyard-placeholder'
              placeholder.textContent = 'Lanyard'
              e.currentTarget.parentElement.appendChild(placeholder)
            }
          }}
        />
      </div>
    </div>
  )
}


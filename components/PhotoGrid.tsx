"use client"

import { useState } from 'react'
import './PhotoGrid.css'

interface PhotoGridProps {
  images: string[]
  className?: string
}

export default function PhotoGrid({ images, className = '' }: PhotoGridProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Grid layout com diferentes tamanhos para criar o efeito moodboard
  const gridLayout = [
    { row: 1, col: 1, span: 1 }, // Pequeno
    { row: 1, col: 2, span: 2 }, // Médio
    { row: 2, col: 1, span: 1 }, // Pequeno
    { row: 2, col: 2, span: 1 }, // Pequeno
    { row: 2, col: 3, span: 2 }, // Médio
    { row: 3, col: 1, span: 2 }, // Médio
    { row: 3, col: 3, span: 1 }, // Pequeno
    { row: 4, col: 1, span: 1 }, // Pequeno
    { row: 4, col: 2, span: 2 }, // Médio
    { row: 4, col: 4, span: 1 }, // Pequeno
    { row: 5, col: 1, span: 1 }, // Pequeno
    { row: 5, col: 2, span: 1 }, // Pequeno
    { row: 5, col: 3, span: 2 }, // Médio
  ]

  return (
    <div className={`photo-grid-container ${className}`}>
      <div className="photo-grid">
        {images.slice(0, 13).map((src, index) => {
          const layout = gridLayout[index] || { row: 1, col: 1, span: 1 }
          return (
            <div
              key={index}
              className={`photo-item ${hoveredIndex === index ? 'hovered' : ''}`}
              style={{
                gridRow: layout.row,
                gridColumn: `span ${layout.span}`,
                transform: hoveredIndex === index ? 'scale(1.05) rotate(2deg)' : 'scale(1) rotate(0deg)',
                zIndex: hoveredIndex === index ? 10 : 1,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="photo-frame">
                <img
                  src={src}
                  alt={`Photo ${index + 1}`}
                  className="photo-image"
                  style={{ filter: 'grayscale(100%)' }}
                  onError={(e) => {
                    e.currentTarget.src = `https://picsum.photos/400/400?random=${index}`
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}


"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollReveal(threshold = 0.1) {
  const [isRevealed, setIsRevealed] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [threshold])

  return { elementRef, isRevealed }
}





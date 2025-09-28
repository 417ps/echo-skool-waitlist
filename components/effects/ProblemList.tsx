"use client"

import { useEffect, useState } from "react"

interface ProblemListProps {
  variant: "slide-left" | "counter-cards"
}

const problems = [
  "Answering the same questions 50+ times per week",
  "Members waiting hours (or days) for help", 
  "Missing content creation time because you're stuck in support",
  "Watching members leave because they can't get help fast enough",
  "Burning out from being the only source of answers"
]

export default function ProblemList({ variant }: ProblemListProps) {
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []
    
    problems.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleItems(prev => [...prev, index])
      }, (index + 1) * 400)
      timers.push(timer)
    })

    return () => timers.forEach(timer => clearTimeout(timer))
  }, [])

  if (variant === "slide-left") {
    return (
      <div className="space-y-6 mb-12 max-w-4xl mx-auto">
        {problems.map((problem, index) => (
          <div
            key={index}
            className={`
              transition-all duration-700 ease-out
              ${visibleItems.includes(index) 
                ? 'opacity-100 translate-x-0 border-l-skool-red' 
                : 'opacity-0 -translate-x-24 border-l-transparent'
              }
              text-xl text-muted-foreground text-left
              pl-6 py-3 border-l-4 transition-colors duration-300
            `}
          >
            {problem}
          </div>
        ))}
        
        <div className={`
          text-center mt-12 transition-all duration-700 ease-out delay-[2200ms]
          ${visibleItems.length >= 5 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'}
        `}>
          <p className="text-2xl font-semibold text-foreground mb-4">
            These problems are costing you time, money, and members every day
          </p>
        </div>

        <div className={`
          text-center transition-all duration-700 ease-out delay-[2600ms]
          ${visibleItems.length >= 5 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'}
        `}>
          <p className="text-2xl font-medium text-skool-red">
            We built Echo to solve exactly these problems
          </p>
        </div>
      </div>
    )
  }

  if (variant === "counter-cards") {
    return (
      <div className="mb-12 max-w-[800px] mx-auto">
        {problems.map((problem, index) => (
          <div
            key={index}
            className={`
              transition-all duration-700 ease-out
              ${visibleItems.includes(index) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
              }
              flex items-center cursor-pointer
            `}
            style={{
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '15px',
              padding: '32px',
              marginBottom: '32px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.background = 'rgba(239, 68, 68, 0.15)';
              e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(239, 68, 68, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div className="flex items-center w-full" style={{ gap: '32px' }}>
              <div 
                className="flex items-center justify-center font-bold flex-shrink-0"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#cbd5e1',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  fontSize: '18px',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {index + 1}
              </div>
              <div 
                style={{
                  fontSize: '20px',
                  color: '#f1f5f9',
                  lineHeight: '1.618',
                  fontWeight: '500'
                }}
              >
                {problem}
              </div>
            </div>
          </div>
        ))}
        
        <div className={`
          text-center transition-all duration-700 ease-out delay-[2200ms]
          ${visibleItems.length >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
        style={{
          marginTop: '84px',
          marginBottom: '52px'
        }}>
          <p className="font-bold text-foreground" style={{
            fontSize: '32px',
            lineHeight: '1.618'
          }}>
            These problems are costing you time, money, and members every day
          </p>
        </div>

        <div className={`
          text-center transition-all duration-700 ease-out delay-[2600ms]
          ${visibleItems.length >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}>
          <p className="font-semibold text-skool-red" style={{
            fontSize: '20px',
            lineHeight: '1.618'
          }}>
            We built Echo to solve exactly these problems
          </p>
        </div>
      </div>
    )
  }

  return null
}
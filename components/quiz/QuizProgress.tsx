"use client"

import React from 'react'
import { Check } from 'lucide-react'

interface QuizProgressProps {
  currentStep: number
  totalSteps: number
}

export function QuizProgress({ currentStep, totalSteps }: QuizProgressProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1
          const isCompleted = stepNumber < currentStep
          const isCurrent = stepNumber === currentStep
          
          return (
            <React.Fragment key={stepNumber}>
              <div className="flex flex-col items-center">
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center
                    font-semibold transition-all duration-300
                    ${isCompleted 
                      ? 'bg-skool-red text-white' 
                      : isCurrent 
                        ? 'bg-skool-red/20 text-skool-red border-2 border-skool-red'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                    }
                  `}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    stepNumber
                  )}
                </div>
                <span className={`
                  text-xs mt-1 
                  ${isCurrent ? 'text-skool-red font-semibold' : 'text-muted-foreground'}
                `}>
                  {stepNumber === 1 && 'Type'}
                  {stepNumber === 2 && 'Size'}
                  {stepNumber === 3 && 'Challenges'}
                  {stepNumber === 4 && 'Experience'}
                  {stepNumber === 5 && 'Schedule'}
                </span>
              </div>
              
              {index < totalSteps - 1 && (
                <div className="flex-1 mx-2">
                  <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-skool-red transition-all duration-500 ease-out"
                      style={{
                        width: stepNumber < currentStep ? '100%' : '0%'
                      }}
                    />
                  </div>
                </div>
              )}
            </React.Fragment>
          )
        })}
      </div>
      
      <div className="text-center mt-4">
        <p className="text-sm text-muted-foreground">
          Step {currentStep} of {totalSteps}
        </p>
      </div>
    </div>
  )
}
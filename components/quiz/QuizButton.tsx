"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { QuizModal } from './QuizModal-v2'
import { cn } from '@/lib/utils'

interface QuizButtonProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'destructive' | 'secondary'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

export function QuizButton({ 
  children, 
  className,
  variant = 'default',
  size = 'default'
}: QuizButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        className={cn(className)}
        variant={variant}
        size={size}
      >
        {children}
      </Button>
      
      <QuizModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
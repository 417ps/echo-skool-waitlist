"use client"

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, ArrowRight, Loader2, CheckCircle } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { QuizProgress } from './QuizProgress'
import { CalendarPicker } from './CalendarPicker'
import {
  quizSchema,
  QuizFormData,
  quizQuestions,
  calculateLeadScore
} from '@/lib/quiz-questions'

interface QuizModalProps {
  isOpen: boolean
  onClose: () => void
}

export function QuizModal({ isOpen, onClose }: QuizModalProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    trigger
  } = useForm<QuizFormData>({
    resolver: zodResolver(quizSchema),
    defaultValues: {
      challenges: [],
      timezone: 'America/New_York'
    }
  })
  
  // Register the challenges field - no need to do this in useEffect since it's in defaultValues
  
  const formData = watch()
  
  const handleNext = async () => {
    let fieldsToValidate: (keyof QuizFormData)[] = []
    
    switch (currentStep) {
      case 1:
        fieldsToValidate = ['communityType']
        break
      case 2:
        fieldsToValidate = ['communitySize']
        break
      case 3:
        fieldsToValidate = ['challenges']
        break
      case 4:
        fieldsToValidate = ['aiExperience']
        break
    }
    
    const isValid = await trigger(fieldsToValidate)
    if (isValid) {
      setCurrentStep(currentStep + 1)
    }
  }
  
  const handleBack = () => {
    setCurrentStep(currentStep - 1)
  }
  
  const onSubmit = async (data: QuizFormData) => {
    setIsSubmitting(true)
    
    try {
      const leadScore = calculateLeadScore(data)
      
      const payload = {
        timestamp: new Date().toISOString(),
        formData: data,
        source: 'echo_skool_waitlist',
        quizScore: leadScore
      }
      
      // Send to your API endpoint
      const response = await fetch('/api/submit-quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      
      if (!response.ok) {
        throw new Error('Failed to submit quiz')
      }
      
      setIsSuccess(true)
      
      // Close modal after 3 seconds
      setTimeout(() => {
        onClose()
        // Reset form
        setCurrentStep(1)
        setIsSuccess(false)
      }, 3000)
      
    } catch (error) {
      console.error('Error submitting quiz:', error)
      alert('There was an error submitting your information. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  const handleCheckboxChange = (value: string, checked: boolean) => {
    const currentChallenges = formData.challenges || []
    const newChallenges = checked 
      ? [...currentChallenges, value]
      : currentChallenges.filter(c => c !== value)
    setValue('challenges', newChallenges)
  }
  
  if (isSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-lg">
          <div className="flex flex-col items-center justify-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Success!</h2>
            <p className="text-center text-muted-foreground">
              Your pilot spot has been reserved. Check your email for confirmation and meeting details.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <div className="max-h-[70vh] overflow-y-auto pr-2 pointer-events-auto">
          <DialogHeader>
            <DialogTitle>Qualify for Echo AI Pilot Program</DialogTitle>
            <DialogDescription>
              Just 5 quick questions to see if Echo is right for your community
            </DialogDescription>
          </DialogHeader>
          
          <QuizProgress currentStep={currentStep} totalSteps={5} />
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Step 1: Community Type */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {quizQuestions.step1.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {quizQuestions.step1.description}
                </p>
              </div>
              
              <RadioGroup
                value={formData.communityType}
                onValueChange={(value) => setValue('communityType', value)}
              >
                {quizQuestions.step1.options.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <RadioGroupItem value={option.value} id={option.value} />
                    <div className="flex-1">
                      <Label htmlFor={option.value} className="font-semibold cursor-pointer">
                        {option.label}
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">
                        {option.description}
                      </p>
                    </div>
                  </div>
                ))}
              </RadioGroup>
              {errors.communityType && (
                <p className="text-sm text-red-500">{errors.communityType.message}</p>
              )}
            </div>
          )}
          
          {/* Step 2: Community Size */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {quizQuestions.step2.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {quizQuestions.step2.description}
                </p>
              </div>
              
              <RadioGroup
                value={formData.communitySize}
                onValueChange={(value) => setValue('communitySize', value)}
              >
                {quizQuestions.step2.options.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <RadioGroupItem value={option.value} id={option.value} />
                    <div className="flex-1">
                      <Label htmlFor={option.value} className="font-semibold cursor-pointer">
                        {option.label}
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">
                        {option.description}
                      </p>
                    </div>
                  </div>
                ))}
              </RadioGroup>
              {errors.communitySize && (
                <p className="text-sm text-red-500">{errors.communitySize.message}</p>
              )}
            </div>
          )}
          
          {/* Step 3: Challenges */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {quizQuestions.step3.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {quizQuestions.step3.description}
                </p>
              </div>
              
              <div className="space-y-3">
                {quizQuestions.step3.options.map((option) => {
                  const isChecked = formData.challenges?.includes(option.value) || false
                  return (
                    <div
                      key={option.value}
                      className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                    >
                      <Checkbox
                        id={option.value}
                        checked={isChecked}
                        onCheckedChange={(checked) => 
                          handleCheckboxChange(option.value, checked as boolean)
                        }
                      />
                      <Label 
                        htmlFor={option.value} 
                        className="flex-1 cursor-pointer"
                      >
                        <div>
                          <div className="font-semibold">{option.label}</div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {option.description}
                          </p>
                        </div>
                      </Label>
                    </div>
                  )
                })}
              </div>
              {errors.challenges && (
                <p className="text-sm text-red-500">{errors.challenges.message}</p>
              )}
            </div>
          )}
          
          {/* Step 4: AI Experience */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {quizQuestions.step4.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {quizQuestions.step4.description}
                </p>
              </div>
              
              <RadioGroup
                value={formData.aiExperience}
                onValueChange={(value) => setValue('aiExperience', value)}
              >
                {quizQuestions.step4.options.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <RadioGroupItem value={option.value} id={option.value} />
                    <div className="flex-1">
                      <Label htmlFor={option.value} className="font-semibold cursor-pointer">
                        {option.label}
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">
                        {option.description}
                      </p>
                    </div>
                  </div>
                ))}
              </RadioGroup>
              {errors.aiExperience && (
                <p className="text-sm text-red-500">{errors.aiExperience.message}</p>
              )}
            </div>
          )}
          
          {/* Step 5: Contact & Scheduling */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Let's schedule your strategy call
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We'll show you exactly how Echo will transform your community
                </p>
              </div>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    {...register('name')}
                    placeholder="John Doe"
                    className="mt-1"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="john@example.com"
                    className="mt-1"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                  )}
                </div>
                
                <div className="sm:col-span-2">
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    placeholder="+1 (555) 123-4567"
                    className="mt-1"
                  />
                </div>
              </div>
              
              <CalendarPicker
                selectedDate={formData.selectedDate}
                selectedTime={formData.selectedTime}
                selectedTimezone={formData.timezone}
                onDateSelect={(date) => setValue('selectedDate', date)}
                onTimeSelect={(time) => setValue('selectedTime', time)}
                onTimezoneSelect={(tz) => setValue('timezone', tz)}
              />
              
              {(errors.selectedDate || errors.selectedTime || errors.timezone) && (
                <p className="text-sm text-red-500">
                  Please select a date, time, and timezone for your call
                </p>
              )}
            </div>
          )}
          
          <div className="flex justify-between pt-4">
            {currentStep > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                disabled={isSubmitting}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}
            
            {currentStep < 5 ? (
              <Button
                type="button"
                onClick={handleNext}
                className="ml-auto bg-skool-red hover:bg-skool-red/90"
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting}
                className="ml-auto bg-skool-red hover:bg-skool-red/90"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Reserving Your Spot...
                  </>
                ) : (
                  'Reserve My Pilot Spot'
                )}
              </Button>
            )}
          </div>
        </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
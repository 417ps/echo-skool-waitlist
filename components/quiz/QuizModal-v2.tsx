"use client"

import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowLeft, ArrowRight, CheckCircle, X } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'

// Simplified schema - step by step
const step1Schema = z.object({
  communityType: z.string().min(1, 'Please select your community type'),
})

const step2Schema = z.object({
  communitySize: z.string().min(1, 'Please select your community size'),
})

const step3Schema = z.object({
  challenges: z.array(z.string()).min(1, 'Please select at least one challenge'),
})

const step4Schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
})

type Step1Data = z.infer<typeof step1Schema>
type Step2Data = z.infer<typeof step2Schema>
type Step3Data = z.infer<typeof step3Schema>
type Step4Data = z.infer<typeof step4Schema>

interface QuizModalProps {
  isOpen: boolean
  onClose: () => void
}

const communityTypes = [
  { value: 'course', label: 'Online Course / Education' },
  { value: 'saas', label: 'SaaS Product Community' },
  { value: 'coaching', label: 'Coaching / Consulting' },
  { value: 'membership', label: 'Membership Site' },
  { value: 'other', label: 'Other' },
]

const communitySizes = [
  { value: '0-50', label: '0-50 members' },
  { value: '50-150', label: '50-150 members' },
  { value: '150-500', label: '150-500 members' },
  { value: '500-1000', label: '500-1,000 members' },
  { value: '1000+', label: '1,000+ members' },
]

const challenges = [
  { value: 'time', label: 'Spending too much time on support' },
  { value: 'churn', label: 'High member churn / cancellations' },
  { value: 'scale', label: 'Can\'t scale without hiring' },
  { value: 'engagement', label: 'Low member engagement' },
  { value: 'repetitive', label: 'Answering the same questions repeatedly' },
]

export function QuizModal({ isOpen, onClose }: QuizModalProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  // Store all form data
  const [allData, setAllData] = useState<{
    communityType?: string
    communitySize?: string
    challenges?: string[]
    name?: string
    email?: string
    phone?: string
  }>({})

  // Step 1 form
  const form1 = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: { communityType: allData.communityType || '' }
  })

  // Step 2 form
  const form2 = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: { communitySize: allData.communitySize || '' }
  })

  // Step 3 form
  const form3 = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    defaultValues: { challenges: allData.challenges || [] }
  })

  // Step 4 form
  const form4 = useForm<Step4Data>({
    resolver: zodResolver(step4Schema),
    defaultValues: {
      name: allData.name || '',
      email: allData.email || '',
      phone: allData.phone || ''
    }
  })

  const handleStep1Submit = (data: Step1Data) => {
    setAllData(prev => ({ ...prev, ...data }))
    setCurrentStep(2)
  }

  const handleStep2Submit = (data: Step2Data) => {
    setAllData(prev => ({ ...prev, ...data }))
    setCurrentStep(3)
  }

  const handleStep3Submit = (data: Step3Data) => {
    setAllData(prev => ({ ...prev, ...data }))
    setCurrentStep(4)
  }

  const handleStep4Submit = async (data: Step4Data) => {
    setIsSubmitting(true)
    
    const finalData = { ...allData, ...data }
    
    try {
      const response = await fetch('/api/submit-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          formData: finalData,
          source: 'echo_skool_waitlist',
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setTimeout(() => {
          onClose()
          // Reset everything
          setCurrentStep(1)
          setIsSuccess(false)
          setAllData({})
        }, 3000)
      }
    } catch (error) {
      console.error('Quiz submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBack = () => {
    setCurrentStep(currentStep - 1)
  }

  const handleCloseModal = () => {
    onClose()
    // Reset after animation
    setTimeout(() => {
      setCurrentStep(1)
      setIsSuccess(false)
      setAllData({})
    }, 300)
  }

  // Progress indicator
  const ProgressBar = () => (
    <div className="flex items-center justify-between mb-8">
      {[1, 2, 3, 4].map((step) => (
        <React.Fragment key={step}>
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step < currentStep
                  ? 'bg-green-500 text-white'
                  : step === currentStep
                  ? 'bg-skool-red text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {step < currentStep ? <CheckCircle className="w-5 h-5" /> : step}
            </div>
            <span className="text-xs mt-2 text-muted-foreground">
              Step {step}
            </span>
          </div>
          {step < 4 && (
            <div
              className={`flex-1 h-1 mx-2 ${
                step < currentStep ? 'bg-green-500' : 'bg-gray-200'
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  )

  if (isSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-md">
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
            <p className="text-muted-foreground mb-6">
              We'll review your information and get back to you within 24 hours.
            </p>
            <Badge className="bg-skool-red text-white">
              Check your email for next steps
            </Badge>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl">Pilot Program Application</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleCloseModal}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <ProgressBar />

        {/* Step 1: Community Type */}
        {currentStep === 1 && (
          <form onSubmit={form1.handleSubmit(handleStep1Submit)} className="space-y-6">
            <div>
              <Label className="text-lg font-semibold mb-4 block">
                What type of community do you run?
              </Label>
              <Controller
                name="communityType"
                control={form1.control}
                render={({ field }) => (
                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <div className="space-y-3">
                      {communityTypes.map((type) => (
                        <div
                          key={type.value}
                          className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50"
                        >
                          <RadioGroupItem value={type.value} id={type.value} />
                          <Label htmlFor={type.value} className="cursor-pointer flex-1">
                            {type.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                )}
              />
              {form1.formState.errors.communityType && (
                <p className="text-sm text-red-500 mt-2">
                  {form1.formState.errors.communityType.message}
                </p>
              )}
            </div>

            <div className="flex justify-end">
              <Button type="submit" className="bg-skool-red hover:bg-skool-red/90">
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        )}

        {/* Step 2: Community Size */}
        {currentStep === 2 && (
          <form onSubmit={form2.handleSubmit(handleStep2Submit)} className="space-y-6">
            <div>
              <Label className="text-lg font-semibold mb-4 block">
                How many members do you have?
              </Label>
              <Controller
                name="communitySize"
                control={form2.control}
                render={({ field }) => (
                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <div className="space-y-3">
                      {communitySizes.map((size) => (
                        <div
                          key={size.value}
                          className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50"
                        >
                          <RadioGroupItem value={size.value} id={size.value} />
                          <Label htmlFor={size.value} className="cursor-pointer flex-1">
                            {size.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                )}
              />
              {form2.formState.errors.communitySize && (
                <p className="text-sm text-red-500 mt-2">
                  {form2.formState.errors.communitySize.message}
                </p>
              )}
            </div>

            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={handleBack}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button type="submit" className="bg-skool-red hover:bg-skool-red/90">
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        )}

        {/* Step 3: Challenges */}
        {currentStep === 3 && (
          <form onSubmit={form3.handleSubmit(handleStep3Submit)} className="space-y-6">
            <div>
              <Label className="text-lg font-semibold mb-4 block">
                What are your biggest challenges? (Select all that apply)
              </Label>
              <div className="space-y-3">
                {challenges.map((challenge) => {
                  const currentChallenges = form3.watch('challenges') || []
                  const isChecked = currentChallenges.includes(challenge.value)
                  
                  return (
                    <div
                      key={challenge.value}
                      className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50"
                    >
                      <Checkbox
                        id={`challenge-${challenge.value}`}
                        checked={isChecked}
                        onCheckedChange={(checked) => {
                          const newChallenges = checked
                            ? [...currentChallenges, challenge.value]
                            : currentChallenges.filter((c) => c !== challenge.value)
                          form3.setValue('challenges', newChallenges)
                        }}
                      />
                      <Label 
                        htmlFor={`challenge-${challenge.value}`}
                        className="cursor-pointer flex-1"
                      >
                        {challenge.label}
                      </Label>
                    </div>
                  )
                })}
              </div>
              {form3.formState.errors.challenges && (
                <p className="text-sm text-red-500 mt-2">
                  {form3.formState.errors.challenges.message}
                </p>
              )}
            </div>

            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={handleBack}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button type="submit" className="bg-skool-red hover:bg-skool-red/90">
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        )}

        {/* Step 4: Contact Info */}
        {currentStep === 4 && (
          <form onSubmit={form4.handleSubmit(handleStep4Submit)} className="space-y-6">
            <div>
              <Label className="text-lg font-semibold mb-4 block">
                How can we reach you?
              </Label>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    {...form4.register('name')}
                    placeholder="John Doe"
                    className="mt-1"
                  />
                  {form4.formState.errors.name && (
                    <p className="text-sm text-red-500 mt-1">
                      {form4.formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...form4.register('email')}
                    placeholder="john@example.com"
                    className="mt-1"
                  />
                  {form4.formState.errors.email && (
                    <p className="text-sm text-red-500 mt-1">
                      {form4.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...form4.register('phone')}
                    placeholder="+1 (555) 123-4567"
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={handleBack}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-skool-red hover:bg-skool-red/90"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <CheckCircle className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
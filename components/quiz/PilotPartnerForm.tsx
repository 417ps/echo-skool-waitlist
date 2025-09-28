"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Loader2, Send, MessageSquare, ExternalLink } from "lucide-react"

interface PilotPartnerFormProps {
  isOpen: boolean
  onClose: () => void
}

export function PilotPartnerForm({ isOpen, onClose }: PilotPartnerFormProps) {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    biggestChallenge: "",
    biggestChallengeCustom: "",
    dreamUseCase: "",
    dreamUseCaseCustom: "",
    communitySize: "",
    name: "",
    email: "",
    skoolLink: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const calendlyUrl = `https://calendly.com/dylan-echo-io/30min?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}`

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/submit-pilot-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          biggestChallenge: formData.biggestChallenge === "other" ? formData.biggestChallengeCustom : formData.biggestChallenge,
          dreamUseCase: formData.dreamUseCase === "other" ? formData.dreamUseCaseCustom : formData.dreamUseCase,
          event: "form_submitted",
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        // Don't auto-advance to Step 7 - Calendly will redirect
        return true
      }
      return false
    } catch (error) {
      console.error("Form submission error:", error)
      return false
    } finally {
      setIsSubmitting(false)
    }
  }

  const totalSteps = 6

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-blue-600" />
            {step === 7 ? "Conversation Scheduled!" : "Let's Start a Conversation"}
          </DialogTitle>
          {step < 7 && (
            <p className="text-sm text-muted-foreground">
              Step {step} of {totalSteps}
            </p>
          )}
        </DialogHeader>

        {/* Step 1: Biggest Challenge */}
        {step === 1 && (
          <div className="space-y-6 py-4">
            <div>
              <Label className="text-lg font-semibold mb-4 block">What's your biggest challenge right now?</Label>
              <RadioGroup value={formData.biggestChallenge} onValueChange={(value) => handleInputChange("biggestChallenge", value)}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 border-2 rounded-lg p-4 hover:bg-accent hover:border-blue-500 transition-all cursor-pointer">
                    <RadioGroupItem value="support-time" id="challenge-support" />
                    <Label htmlFor="challenge-support" className="cursor-pointer flex-1 font-normal">
                      Member support taking 10-15+ hours/week
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 border-2 rounded-lg p-4 hover:bg-accent hover:border-blue-500 transition-all cursor-pointer">
                    <RadioGroupItem value="onboarding" id="challenge-onboarding" />
                    <Label htmlFor="challenge-onboarding" className="cursor-pointer flex-1 font-normal">
                      Onboarding isn't sticky, members drop off quickly
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 border-2 rounded-lg p-4 hover:bg-accent hover:border-blue-500 transition-all cursor-pointer">
                    <RadioGroupItem value="engagement" id="challenge-engagement" />
                    <Label htmlFor="challenge-engagement" className="cursor-pointer flex-1 font-normal">
                      Low engagement, members don't use course content
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 border-2 rounded-lg p-4 hover:bg-accent hover:border-blue-500 transition-all cursor-pointer">
                    <RadioGroupItem value="scaling" id="challenge-scaling" />
                    <Label htmlFor="challenge-scaling" className="cursor-pointer flex-1 font-normal">
                      Can't scale past 100-150 members without hiring help
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 border-2 rounded-lg p-4 hover:bg-accent hover:border-blue-500 transition-all cursor-pointer">
                    <RadioGroupItem value="other" id="challenge-other" />
                    <Label htmlFor="challenge-other" className="cursor-pointer flex-1 font-normal">
                      Something else (specify below)
                    </Label>
                  </div>
                </div>
              </RadioGroup>
              {formData.biggestChallenge === "other" && (
                <Textarea
                  value={formData.biggestChallengeCustom}
                  onChange={(e) => handleInputChange("biggestChallengeCustom", e.target.value)}
                  placeholder="Tell us your specific challenge..."
                  rows={3}
                  className="mt-4"
                />
              )}
            </div>

            <Button
              onClick={() => setStep(2)}
              disabled={!formData.biggestChallenge || (formData.biggestChallenge === "other" && !formData.biggestChallengeCustom)}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Continue
            </Button>
          </div>
        )}

        {/* Step 2: Dream Use Case */}
        {step === 2 && (
          <div className="space-y-6 py-4">
            <div>
              <Label className="text-lg font-semibold mb-4 block">What's your dream use case for AI in your community?</Label>
              <RadioGroup value={formData.dreamUseCase} onValueChange={(value) => handleInputChange("dreamUseCase", value)}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 border-2 rounded-lg p-4 hover:bg-accent hover:border-blue-500 transition-all cursor-pointer">
                    <RadioGroupItem value="support-bot" id="use-support" />
                    <Label htmlFor="use-support" className="cursor-pointer flex-1 font-normal">
                      24/7 support bot answering common questions
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 border-2 rounded-lg p-4 hover:bg-accent hover:border-blue-500 transition-all cursor-pointer">
                    <RadioGroupItem value="onboarding-assistant" id="use-onboarding" />
                    <Label htmlFor="use-onboarding" className="cursor-pointer flex-1 font-normal">
                      Onboarding assistant that guides new members
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 border-2 rounded-lg p-4 hover:bg-accent hover:border-blue-500 transition-all cursor-pointer">
                    <RadioGroupItem value="content-recommender" id="use-content" />
                    <Label htmlFor="use-content" className="cursor-pointer flex-1 font-normal">
                      Smart content recommendations based on member needs
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 border-2 rounded-lg p-4 hover:bg-accent hover:border-blue-500 transition-all cursor-pointer">
                    <RadioGroupItem value="engagement-tracker" id="use-engagement" />
                    <Label htmlFor="use-engagement" className="cursor-pointer flex-1 font-normal">
                      Engagement tracker that re-activates inactive members
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 border-2 rounded-lg p-4 hover:bg-accent hover:border-blue-500 transition-all cursor-pointer">
                    <RadioGroupItem value="full-assistant" id="use-full" />
                    <Label htmlFor="use-full" className="cursor-pointer flex-1 font-normal">
                      Full AI assistant (all of the above + more)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 border-2 rounded-lg p-4 hover:bg-accent hover:border-blue-500 transition-all cursor-pointer">
                    <RadioGroupItem value="other" id="use-other" />
                    <Label htmlFor="use-other" className="cursor-pointer flex-1 font-normal">
                      Something else (specify below)
                    </Label>
                  </div>
                </div>
              </RadioGroup>
              {formData.dreamUseCase === "other" && (
                <Textarea
                  value={formData.dreamUseCaseCustom}
                  onChange={(e) => handleInputChange("dreamUseCaseCustom", e.target.value)}
                  placeholder="Tell us your dream use case..."
                  rows={3}
                  className="mt-4"
                />
              )}
            </div>

            <div className="flex gap-3">
              <Button onClick={() => setStep(1)} variant="outline" className="flex-1">
                Back
              </Button>
              <Button
                onClick={() => setStep(3)}
                disabled={!formData.dreamUseCase || (formData.dreamUseCase === "other" && !formData.dreamUseCaseCustom)}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Community Size */}
        {step === 3 && (
          <div className="space-y-6 py-4">
            <div>
              <Label className="text-lg font-semibold mb-4 block">How many members are in your Skool community?</Label>
              <RadioGroup value={formData.communitySize} onValueChange={(value) => handleInputChange("communitySize", value)}>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-3 border-2 rounded-lg p-4 hover:bg-accent hover:border-blue-500 transition-all cursor-pointer">
                    <RadioGroupItem value="50-100" id="size-50" />
                    <Label htmlFor="size-50" className="cursor-pointer flex-1 font-normal">50-100</Label>
                  </div>
                  <div className="flex items-center space-x-3 border-2 rounded-lg p-4 hover:bg-accent hover:border-blue-500 transition-all cursor-pointer">
                    <RadioGroupItem value="100-250" id="size-100" />
                    <Label htmlFor="size-100" className="cursor-pointer flex-1 font-normal">100-250</Label>
                  </div>
                  <div className="flex items-center space-x-3 border-2 rounded-lg p-4 hover:bg-accent hover:border-blue-500 transition-all cursor-pointer">
                    <RadioGroupItem value="250-500" id="size-250" />
                    <Label htmlFor="size-250" className="cursor-pointer flex-1 font-normal">250-500</Label>
                  </div>
                  <div className="flex items-center space-x-3 border-2 rounded-lg p-4 hover:bg-accent hover:border-blue-500 transition-all cursor-pointer">
                    <RadioGroupItem value="500+" id="size-500" />
                    <Label htmlFor="size-500" className="cursor-pointer flex-1 font-normal">500+</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div className="flex gap-3">
              <Button onClick={() => setStep(2)} variant="outline" className="flex-1">
                Back
              </Button>
              <Button
                onClick={() => setStep(4)}
                disabled={!formData.communitySize}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Name */}
        {step === 4 && (
          <div className="space-y-6 py-4">
            <p className="text-muted-foreground">
              Almost there! Let us know how to reach you.
            </p>

            <div>
              <Label htmlFor="name" className="text-lg font-semibold mb-2 block">Your Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Dylan James"
                className="text-base p-6"
              />
            </div>

            <div className="flex gap-3">
              <Button onClick={() => setStep(3)} variant="outline" className="flex-1">
                Back
              </Button>
              <Button
                onClick={() => setStep(5)}
                disabled={!formData.name}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 5: Email & Skool Link */}
        {step === 5 && (
          <div className="space-y-6 py-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-lg font-semibold mb-2 block">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="dylan@community.com"
                  className="text-base p-6"
                />
              </div>

              <div>
                <Label htmlFor="skoolLink" className="text-lg font-semibold mb-2 block">
                  Skool Community Link <span className="text-sm font-normal text-muted-foreground">(Optional)</span>
                </Label>
                <Input
                  id="skoolLink"
                  value={formData.skoolLink}
                  onChange={(e) => handleInputChange("skoolLink", e.target.value)}
                  placeholder="https://www.skool.com/your-community"
                  className="text-base p-6"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Helps us understand your community better before our call
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button onClick={() => setStep(4)} variant="outline" className="flex-1">
                Back
              </Button>
              <Button
                onClick={() => setStep(6)}
                disabled={!formData.email}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 6: Calendly Scheduling */}
        {step === 6 && (
          <div className="space-y-6 py-4">
            <div className="text-center space-y-4">
              <p className="text-muted-foreground">
                Pick a time that works for you. This will be a relaxed 30-minute conversation. No pressure, no pitch, just collaboration.
              </p>

              <div className="p-6 border-2 border-blue-500 rounded-lg bg-blue-50 dark:bg-blue-950/20">
                <p className="font-semibold mb-4">Schedule Your Call</p>
                <p className="text-sm text-muted-foreground mb-6">
                  Click below to choose a time on our calendar. Your information will be automatically filled in.
                </p>
                
                <Button
                  onClick={async () => {
                    // Submit form data first
                    await handleSubmit()
                    // Then open Calendly
                    window.open(calendlyUrl, '_blank', 'width=800,height=800')
                  }}
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Saving your information...
                    </>
                  ) : (
                    <>
                      Open Calendly Scheduler
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground mt-4">
                  A new window will open with available time slots
                </p>
              </div>

              <div className="p-4 bg-muted rounded-lg text-left">
                <p className="font-semibold mb-2">What happens next:</p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Your information will be saved</li>
                  <li>• Choose a time that works for you in the popup</li>
                  <li>• Get instant calendar confirmation</li>
                  <li>• Receive email reminder before our call</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-3">
              <Button onClick={() => setStep(5)} variant="outline" className="flex-1">
                Back
              </Button>
            </div>
          </div>
        )}

        {/* Step 7: Confirmation */}
        {step === 7 && (
          <div className="space-y-6 py-8 text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-950 rounded-full flex items-center justify-center mx-auto">
              <Send className="w-8 h-8 text-green-600" />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">You're All Set!</h3>
              <p className="text-muted-foreground mb-4">
                Check your email for calendar confirmation
              </p>
              <p className="text-sm text-muted-foreground">
                Once you schedule on Calendly, you'll receive a confirmation email at {formData.email} with the meeting details and video link.
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg text-left">
              <p className="font-semibold mb-2">What to expect on the call:</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Casual conversation about your community</li>
                <li>• Brainstorm AI use cases together</li>
                <li>• Explore pricing models that make sense</li>
                <li>• See if there's a fit for pilot collaboration</li>
              </ul>
            </div>

            <Button onClick={onClose} className="w-full bg-blue-600 hover:bg-blue-700">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
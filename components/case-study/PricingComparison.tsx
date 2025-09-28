"use client"

import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, XCircle, Clock, Zap } from 'lucide-react'
import { QuizButton } from '@/components/quiz/QuizButton'
import ScrollReveal from '@/components/effects/ScrollReveal'
import { ArrowRight } from 'lucide-react'

export function PricingComparison() {
  const options = [
    {
      title: "Keep Doing It Manually",
      icon: <Clock className="w-8 h-8" />,
      cost: "10-15 hours/week forever",
      result: "Revenue capped, burnout likely, members frustrated",
      borderColor: "border-l-red-500",
      bgColor: "bg-red-50/50 dark:bg-red-950/20",
      recommended: false
    },
    {
      title: "Wait for Someone Else",
      icon: <XCircle className="w-8 h-8" />,
      cost: "Unknown timeline",
      result: "OpenAI promised 14 months ago. Meanwhile, Hormozi made $81M with custom AI",
      borderColor: "border-l-yellow-500",
      bgColor: "bg-yellow-50/50 dark:bg-yellow-950/20",
      recommended: false
    },
    {
      title: "Do What Hormozi Did",
      icon: <Zap className="w-8 h-8" />,
      cost: "Fraction of opportunity cost",
      result: "70%+ questions automated, time back for revenue activities, members delighted",
      borderColor: "border-l-green-500",
      bgColor: "bg-green-50/50 dark:bg-green-950/20",
      recommended: true
    }
  ]

  const pricingBenchmarks = [
    {
      provider: "Hormozi's Model",
      price: "$18,000",
      duration: "6 months",
      savings: "95% cheaper"
    },
    {
      provider: "Tony Robbins",
      price: "$99/month",
      duration: "monthly",
      savings: "2-4x but customized"
    },
    {
      provider: "Hiring Assistant",
      price: "$3,000+/month",
      duration: "monthly",
      savings: "Fraction of cost"
    }
  ]

  return (
    <section className="px-4 py-24 bg-gradient-to-b from-muted/10 to-background">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Bottom Line
            </h2>
            <p className="text-xl text-muted-foreground">
              You have three options
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {options.map((option, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <Card className={`
                border-l-4 ${option.borderColor} ${option.bgColor} h-full
                ${option.recommended ? 'ring-2 ring-green-500 shadow-2xl' : ''}
              `}>
                <CardHeader className="space-y-4">
                  {option.recommended && (
                    <Badge className="bg-green-600 text-white w-fit">
                      Recommended
                    </Badge>
                  )}
                  <div className="flex items-center gap-3">
                    <div className={`
                      ${option.recommended ? 'text-green-600' : 
                        index === 0 ? 'text-red-600' : 'text-yellow-600'}
                    `}>
                      {option.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{option.title}</h3>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Cost:</p>
                    <p className="font-bold text-lg">{option.cost}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Result:</p>
                    <p className="text-muted-foreground leading-relaxed">{option.result}</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up">
          <Card className="mb-12 border-2 border-skool-yellow bg-yellow-50/50 dark:bg-yellow-950/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">The Math is Simple</h3>
              
              <div className="space-y-4 mb-8">
                <div className="text-center">
                  <p className="text-lg font-semibold mb-4">
                    If Hormozi can charge $18,000 for 6 months of AI + community...
                  </p>
                  <p className="text-lg font-semibold">
                    And Robbins charges $99/month for AI coaching...
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 my-8">
                  {pricingBenchmarks.map((benchmark, index) => (
                    <div key={index} className="p-4 bg-background rounded-lg border">
                      <p className="text-sm text-muted-foreground mb-1">{benchmark.provider}</p>
                      <p className="text-2xl font-bold mb-1">{benchmark.price}</p>
                      <p className="text-xs text-muted-foreground mb-2">{benchmark.duration}</p>
                      <Badge variant="outline" className="text-xs">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {benchmark.savings}
                      </Badge>
                    </div>
                  ))}
                </div>

                <div className="text-center text-xl font-bold border-t pt-6">
                  Then $199-399/month for an AI assistant that saves you $5,000+/month is:
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>95% cheaper than Hormozi's model</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>2-4x Robbins, but customized to YOUR content</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Fraction of hiring an assistant</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Less than you're losing to support time</span>
                  </div>
                </div>
              </div>

              <div className="text-center p-6 bg-background rounded-lg border-2 border-skool-red">
                <p className="text-xl mb-2">You're not paying for "a chatbot."</p>
                <p className="text-2xl font-bold">
                  You're paying for what Hormozi calls "access to your brain, 24/7" - for your members.
                </p>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center">
            <QuizButton className="bg-skool-red hover:bg-skool-red/90 text-white text-xl px-12 py-8 shadow-2xl shadow-skool-red/20" size="lg">
              Do What Hormozi Did - See if You Qualify
              <ArrowRight className="ml-3 h-6 w-6" />
            </QuizButton>
            <p className="text-sm text-muted-foreground mt-4">
              10-community pilot • First-come, first-served • Only 3 spots remaining
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
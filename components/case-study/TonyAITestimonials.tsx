"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Quote } from 'lucide-react'
import ScrollReveal from '@/components/effects/ScrollReveal'

interface TonyAIReview {
  title: string
  quote: string
  author: string
  rating: number
  highlight: string
}

export function TonyAITestimonials() {
  const reviews: TonyAIReview[] = [
    {
      title: "Tony Robbin's AI",
      quote: "Already exceeded my expectations! Hearing Tony's voice is so spot on it makes you truly feel you are speaking to him as if we are in an actual one on one coaching session!",
      author: "iOS App Store User",
      rating: 5,
      highlight: "Feels like real 1-on-1 coaching"
    },
    {
      title: "Wow! Thank you!",
      quote: "This is basically a clone of Tony Robbins in your pocket. Comprehensive knowledge base, daily motivational support, culturally adaptable insights, and commute-friendly coaching.",
      author: "OrigMedia - iOS App Store",
      rating: 5,
      highlight: "Tony Robbins in your pocket"
    },
    {
      title: "Great App! Makes a Huge Difference",
      quote: "It is the only truly positive influence in my life right now and it makes a huge difference in my daily focus ability. Helps recognize personal blocks, provides quick answers, and offers motivational support.",
      author: "iOS App Store User",
      rating: 5,
      highlight: "Huge difference in daily focus"
    },
    {
      title: "Skeptical... But Blown Away",
      quote: "I was skeptical… but blown away. It's Tony's voice, energy, and real strategy. The AI-powered experience is incredibly well done—his insights are spot-on.",
      author: "Early User Review",
      rating: 5,
      highlight: "Insights are spot-on"
    },
    {
      title: "Life-Changing After 4 Days",
      quote: "Extremely helpful and useful for clarifying next actions and going from victim mode to taking action to change. I've implemented so many changes into my life after 4 days of using it.",
      author: "Verified User",
      rating: 5,
      highlight: "Changes implemented in 4 days"
    },
    {
      title: "Surprisingly Helpful",
      quote: "While they're a little too tailored and structured... it's impossible to ignore how helpful this tool could be for so many people who struggle to get vulnerable and introspective. The questions were helping.",
      author: "YourTango Review",
      rating: 4,
      highlight: "Helps people get introspective"
    }
  ]

  return (
    <section className="px-4 py-24 bg-gradient-to-b from-muted/10 to-background">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-lg px-4 py-2 bg-skool-darkblue text-white">
              Real User Feedback
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Users Say About Tony Robbins AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Tony's AI coaching app has a 4.9-star rating with 1,500+ reviews on iOS
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold">4.9</span>
              <span className="text-muted-foreground">/ 5.0</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.05}>
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-skool-darkblue">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  </div>

                  <h3 className="font-bold text-lg">{review.title}</h3>

                  <Badge className="bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400">
                    {review.highlight}
                  </Badge>

                  <p className="text-muted-foreground leading-relaxed">
                    "{review.quote}"
                  </p>

                  <p className="text-sm font-semibold text-foreground pt-2 border-t">
                    — {review.author}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.3}>
          <Card className="border-2 border-skool-darkblue bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-950">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">The Pattern: AI-Powered Coaching Works</h3>
                  <p className="text-muted-foreground mb-4">
                    Users consistently report that AI coaching feels personal, delivers quick insights, and helps them take action immediately.
                  </p>
                  <p className="text-muted-foreground">
                    Whether it's Tony Robbins at $99/month or Khanmigo saving teachers 7-10 hours/week — the technology proves itself through real user outcomes.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-background rounded-lg">
                    <p className="text-3xl font-bold text-green-600 mb-1">1,500+</p>
                    <p className="text-sm text-muted-foreground">iOS Reviews</p>
                  </div>
                  <div className="p-4 bg-background rounded-lg">
                    <p className="text-3xl font-bold text-yellow-600 mb-1">4.9★</p>
                    <p className="text-sm text-muted-foreground">Average Rating</p>
                  </div>
                  <div className="p-4 bg-background rounded-lg">
                    <p className="text-3xl font-bold text-blue-600 mb-1">$99</p>
                    <p className="text-sm text-muted-foreground">Per Month</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  )
}
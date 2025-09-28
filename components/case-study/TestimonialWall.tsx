"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Quote, TrendingUp } from 'lucide-react'
import ScrollReveal from '@/components/effects/ScrollReveal'

interface Testimonial {
  source: string
  category: string
  stat: string
  quote: string
  categoryColor: string
}

export function TestimonialWall() {
  const testimonials: Testimonial[] = [
    {
      source: "MagicSchool AI",
      category: "Education",
      stat: "7-10 hrs/week saved",
      quote: "Over 5 million educators report saving 7-10 hours each week using MagicSchool to help with lesson planning, differentiation, writing assessments, and communicating clearly.",
      categoryColor: "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400"
    },
    {
      source: "Healthify",
      category: "Fitness & Coaching",
      stat: "70% more weight loss",
      quote: "Stanford Research based on Healthify's data shows that AI-enabled human coaching helps clients lose 70% more weight than just AI coaching alone.",
      categoryColor: "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400"
    },
    {
      source: "Camping World",
      category: "Customer Support",
      stat: "43% ticket deflection",
      quote: "43% of tickets deflected by AI agents, 50% reduction in ticket volume due to self-service, and 9.44% increase in customer satisfaction.",
      categoryColor: "bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-400"
    },
    {
      source: "Unity Platform",
      category: "Enterprise",
      stat: "$1.3M saved",
      quote: "By connecting with Unity's knowledge base, the AI agent deflected 8,000 tickets, which resulted in $1.3 million in savings.",
      categoryColor: "bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-400"
    },
    {
      source: "Khanmigo",
      category: "Education",
      stat: "Zero failing students",
      quote: "At Enid High School, after one semester of using Khanmigo for geometry, there were no students failing in that class.",
      categoryColor: "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400"
    },
    {
      source: "FitnessAI",
      category: "Fitness & Coaching",
      stat: "20% more weight lifted",
      quote: "Users lift 20% more weight on average after their first 30 days. I used to pay a personal trainer $350 a month, but not anymore.",
      categoryColor: "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400"
    },
    {
      source: "XP Inc.",
      category: "Enterprise",
      stat: "9,000 hours saved",
      quote: "Uses Microsoft 365 Copilot to automate tasks, significantly boosting productivity by saving more than 9,000 hours and increasing audit team efficiency by 30%.",
      categoryColor: "bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-400"
    },
    {
      source: "Axon Enterprise",
      category: "Enterprise",
      stat: "82% time reduction",
      quote: "Created an AI tool that led to an 82% reduction in the time officers spend on reports.",
      categoryColor: "bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-400"
    },
    {
      source: "Sprinklr Platform",
      category: "Customer Support",
      stat: "75% faster response",
      quote: "Sprinklr cut their average response time from 5 hours 42 minutes to 70 minutes in a single year, leading to improved sentiment and happier customers.",
      categoryColor: "bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-400"
    },
    {
      source: "Heights Platform",
      category: "Course Creators",
      stat: "Thousands in revenue",
      quote: "Dino and Micol launched a membership site about Italian Cooking with 10 online courses, 100s of students, and thousands in revenue in less than one year.",
      categoryColor: "bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-400"
    },
    {
      source: "European Tech Company",
      category: "Customer Support",
      stat: "50% automated in 1 week",
      quote: "Automated 50% of their inbound conversations within just one week after launching their AI chatbot, with a 70% reduction in negative social media mentions.",
      categoryColor: "bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-400"
    },
    {
      source: "Community Manager",
      category: "Community Management",
      stat: "20 hours/week saved",
      quote: "AI can save up to 20 hours per week by automatically handling FAQs, moderating discussions, and initiating customer interactions via direct messages.",
      categoryColor: "bg-yellow-100 dark:bg-yellow-950 text-yellow-700 dark:text-yellow-400"
    }
  ]

  return (
    <section className="px-4 py-24 bg-gradient-to-b from-muted/10 to-background">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-lg px-4 py-2 bg-skool-cyan text-white">
              Proven Across Industries
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real People, Real Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From education to fitness to enterprise - AI assistants are transforming how experts serve their communities
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.05}>
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-skool-cyan">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <Badge className={testimonial.categoryColor}>
                      {testimonial.category}
                    </Badge>
                    <Quote className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  </div>

                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="font-bold text-lg text-green-600">
                      {testimonial.stat}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  <p className="text-sm font-semibold text-foreground pt-2 border-t">
                    — {testimonial.source}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.3}>
          <Card className="mt-12 border-2 border-skool-cyan bg-cyan-50/50 dark:bg-cyan-950/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">The Pattern is Clear</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Whether you teach, coach, run a community, or lead a business - AI assistants deliver measurable results
              </p>
              <div className="grid md:grid-cols-4 gap-4 mt-6">
                <div className="p-4 bg-background rounded-lg">
                  <p className="text-3xl font-bold text-blue-600">6M+</p>
                  <p className="text-sm text-muted-foreground">Educators using AI</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <p className="text-3xl font-bold text-green-600">70%</p>
                  <p className="text-sm text-muted-foreground">Better outcomes</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <p className="text-3xl font-bold text-purple-600">$1.3M</p>
                  <p className="text-sm text-muted-foreground">Saved by Unity</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <p className="text-3xl font-bold text-orange-600">9,000</p>
                  <p className="text-sm text-muted-foreground">Hours saved</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  )
}
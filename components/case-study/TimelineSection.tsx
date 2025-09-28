"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, XCircle, TrendingUp } from 'lucide-react'
import ScrollReveal from '@/components/effects/ScrollReveal'

export function TimelineSection() {
  const timelineEvents = [
    {
      date: "January 10, 2024",
      title: "GPT Store Launches",
      description: "OpenAI launches GPT Store with big promises",
      status: "launched"
    },
    {
      date: "Q1 2024 Promise",
      title: "Revenue Sharing 'Coming Soon'",
      description: "OpenAI promises revenue sharing for US creators by end of Q1",
      status: "promised"
    },
    {
      date: "August 16, 2025",
      title: "Hormozi Makes $81M with Custom AI",
      description: "While everyone waits, Hormozi launches ACQ AI and generates $81M in a single day",
      status: "success"
    },
    {
      date: "Today",
      title: "Still Waiting...",
      description: "14+ months later, no revenue sharing program from OpenAI",
      status: "failed"
    }
  ]

  return (
    <section className="px-4 py-24 bg-gradient-to-b from-background to-red-50/30 dark:to-red-950/10">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <Badge variant="destructive" className="mb-4 text-lg px-4 py-2">
              The Timeline Everyone Forgets
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              OpenAI's Promise vs. Reality
            </h2>
            <p className="text-xl text-muted-foreground">
              While creators waited for OpenAI, the smart ones built their own
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <ScrollReveal key={index} direction="right" delay={index * 0.1}>
                <div className="relative flex items-start gap-6">
                  {/* Timeline dot */}
                  <div className={`
                    relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 flex-shrink-0
                    ${event.status === 'success' ? 'bg-green-500 border-green-600' : 
                      event.status === 'failed' ? 'bg-red-500 border-red-600' :
                      event.status === 'promised' ? 'bg-yellow-500 border-yellow-600' :
                      'bg-blue-500 border-blue-600'}
                  `}>
                    {event.status === 'success' ? <TrendingUp className="w-8 h-8 text-white" /> :
                     event.status === 'failed' ? <XCircle className="w-8 h-8 text-white" /> :
                     <Calendar className="w-8 h-8 text-white" />}
                  </div>

                  {/* Content card */}
                  <Card className={`
                    flex-1 border-l-4
                    ${event.status === 'success' ? 'border-l-green-500 bg-green-50/50 dark:bg-green-950/20' :
                      event.status === 'failed' ? 'border-l-red-500 bg-red-50/50 dark:bg-red-950/20' :
                      event.status === 'promised' ? 'border-l-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/20' :
                      'border-l-blue-500 bg-blue-50/50 dark:bg-blue-950/20'}
                  `}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold">{event.title}</h3>
                        <Badge variant="outline" className="ml-4 whitespace-nowrap">
                          {event.date}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal direction="up" delay={0.5}>
          <Card className="mt-12 border-2 border-red-500 bg-red-50/50 dark:bg-red-950/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">The Smart Move</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                While everyone waits for OpenAI to "fix" monetization, entrepreneurs like Hormozi and Robbins 
                are making millions with custom AI.
              </p>
              <p className="text-xl font-bold mt-4">
                You don't need OpenAI's permission to build an AI assistant for YOUR community.
              </p>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  )
}
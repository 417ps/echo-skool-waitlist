"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, DollarSign, Target, Lightbulb } from "lucide-react"

const topics = [
  {
    icon: Target,
    title: "Use Cases",
    question: "Where could AI help most?",
    examples: [
      "24/7 member support",
      "Onboarding automation",
      "Content recommendations",
      "Engagement tracking",
    ],
    color: "text-skool-darkblue",
    bgColor: "bg-skool-darkblue/10 dark:bg-skool-darkblue/20",
    borderColor: "border-skool-darkblue/30 dark:border-skool-darkblue/50",
  },
  {
    icon: DollarSign,
    title: "Business Model",
    question: "What pricing feels right?",
    examples: [
      "Per-member pricing",
      "Flat monthly fee",
      "Revenue share",
      "Tiered packages",
    ],
    color: "text-skool-yellow",
    bgColor: "bg-skool-yellow/10 dark:bg-skool-yellow/20",
    borderColor: "border-skool-yellow/30 dark:border-skool-yellow/50",
  },
  {
    icon: MessageCircle,
    title: "Problems",
    question: "What's keeping you up at night?",
    examples: [
      "Member churn",
      "Time management",
      "Scaling support",
      "Engagement drops",
    ],
    color: "text-skool-cyan",
    bgColor: "bg-skool-cyan/10 dark:bg-skool-cyan/20",
    borderColor: "border-skool-cyan/30 dark:border-skool-cyan/50",
  },
  {
    icon: Lightbulb,
    title: "Vision",
    question: "Simple bot or full AI assistant?",
    examples: [
      "Basic Q&A bot",
      "Smart recommendations",
      "Personalized journeys",
      "Community copilot",
    ],
    color: "text-skool-salmon",
    bgColor: "bg-skool-salmon/10 dark:bg-skool-salmon/20",
    borderColor: "border-skool-salmon/30 dark:border-skool-salmon/50",
  },
]

export function DiscussionTopics() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {topics.map((topic, index) => {
        const Icon = topic.icon
        return (
          <Card
            key={index}
            className={`${topic.borderColor} border-2 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer`}
          >
            <CardHeader className={topic.bgColor}>
              <div className="flex items-start gap-3">
                <div className={`p-2 ${topic.bgColor} rounded-lg`}>
                  <Icon className={`w-6 h-6 ${topic.color}`} />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg mb-1">{topic.title}</CardTitle>
                  <p className={`text-sm font-semibold ${topic.color}`}>{topic.question}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">We'd love to explore:</p>
              <ul className="space-y-2">
                {topic.examples.map((example, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className={`mt-1 w-1.5 h-1.5 rounded-full ${topic.color.replace('text-', 'bg-')} flex-shrink-0`} />
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ScrollReveal from "@/components/effects/ScrollReveal"

const metrics = [
  {
    category: "Education",
    platform: "MagicSchool AI",
    users: "6M teachers",
    metric: "7-10 hours saved per week",
    context: "Nearly every US school district",
    tier: "gold",
  },
  {
    category: "Health & Coaching",
    platform: "Healthify",
    users: "Stanford Research",
    metric: "70% better weight loss results",
    context: "AI-enabled human coaching vs AI alone",
    tier: "gold",
  },
  {
    category: "Customer Support",
    platform: "Camping World",
    users: "Enterprise",
    metric: "43% ticket deflection, 9.44% satisfaction increase",
    context: "AI agents handling support tickets",
    tier: "gold",
  },
  {
    category: "Enterprise",
    platform: "Unity",
    users: "Platform-wide",
    metric: "$1.3M saved",
    context: "8,000 tickets deflected by AI",
    tier: "gold",
  },
  {
    category: "Community",
    platform: "Sprinklr",
    users: "Community Management",
    metric: "Response time: 5h 42m → 70 minutes",
    context: "75% faster community responses",
    tier: "gold",
  },
  {
    category: "Fitness",
    platform: "FitnessAI",
    users: "Individual users",
    metric: "20% more weight lifted in 30 days",
    context: "Replaced $350/month personal trainer",
    tier: "gold",
  },
]

export function SuccessMetrics() {
  return (
    <div className="space-y-8">
      <ScrollReveal direction="up">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">
            Real Results from Real Companies
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI Support That Actually Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These aren't projections or promises. These are verified results from companies already using AI to support their communities.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((item, index) => (
          <ScrollReveal key={index} direction="up" delay={index * 0.1}>
            <Card className="border-2 hover:shadow-lg transition-all h-full">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                    {item.tier === "gold" && (
                      <Badge variant="outline" className="text-xs border-amber-500 text-amber-700 dark:text-amber-400">
                        Verified
                      </Badge>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.platform}</h3>
                    <p className="text-sm text-muted-foreground">{item.users}</p>
                  </div>

                  <div className="pt-3 border-t border-border">
                    <p className="text-2xl font-bold text-blue-600 mb-2">
                      {item.metric}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.context}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal direction="up" delay={0.6}>
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/30 mt-8">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold text-blue-600 mb-2">20 hrs/week</p>
                <p className="text-sm text-muted-foreground">Average time saved handling FAQs and moderation</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600 mb-2">$3.50</p>
                <p className="text-sm text-muted-foreground">Average ROI for every $1 invested in AI support</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600 mb-2">30%</p>
                <p className="text-sm text-muted-foreground">Decrease in customer service operational costs (Gartner)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.7}>
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Sources: Microsoft AI Customer Stories, OpenAI Case Studies, Gartner Research, Stanford Research
          </p>
        </div>
      </ScrollReveal>
    </div>
  )
}
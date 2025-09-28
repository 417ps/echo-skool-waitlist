"use client"

import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, DollarSign, Users, Zap } from 'lucide-react'
import CountUp from '@/components/effects/CountUp'
import ScrollReveal from '@/components/effects/ScrollReveal'

interface InfluencerCardProps {
  name: string
  title: string
  mainStat: {
    value: string
    label: string
    prefix?: string
    suffix?: string
  }
  features: string[]
  pricing: {
    amount: string
    label: string
  }[]
  lesson: string
  borderColor: string
  delay?: number
}

export function InfluencerCard({
  name,
  title,
  mainStat,
  features,
  pricing,
  lesson,
  borderColor,
  delay = 0
}: InfluencerCardProps) {
  return (
    <ScrollReveal direction="up" delay={delay}>
      <Card className={`border-l-4 ${borderColor} hover:shadow-2xl transition-shadow duration-300`}>
        <CardHeader className="space-y-4">
          <div>
            <h3 className="text-3xl font-bold mb-2">{name}</h3>
            <p className="text-lg text-muted-foreground">{title}</p>
          </div>
          
          <div className="text-center py-6 bg-muted/30 rounded-lg">
            <div className="text-5xl md:text-6xl font-bold mb-2">
              {mainStat.prefix}
              <CountUp to={parseInt(mainStat.value.replace(/[^0-9]/g, ''))} duration={2000} />
              {mainStat.suffix}
            </div>
            <p className="text-muted-foreground">{mainStat.label}</p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              Key Features
            </h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t pt-6">
            <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              Pricing Strategy
            </h4>
            <div className="space-y-3">
              {pricing.map((tier, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <span className="text-sm text-muted-foreground">{tier.label}</span>
                  <Badge variant="outline" className="text-lg font-bold">{tier.amount}</Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t pt-6">
            <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              The Lesson
            </h4>
            <p className="text-foreground font-medium leading-relaxed">
              {lesson}
            </p>
          </div>
        </CardContent>
      </Card>
    </ScrollReveal>
  )
}
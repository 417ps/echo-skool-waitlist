"use client"

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, TrendingUp, Clock, Users, DollarSign, BookOpen, Info } from 'lucide-react'
import CountUp from '@/components/effects/CountUp'
import ScrollReveal from '@/components/effects/ScrollReveal'
import { scenarioData, scenarioTabs, ScenarioData } from '@/lib/scenario-data'

function MetricCard({ 
  label, 
  value, 
  isAfter = false 
}: { 
  label: string
  value: string
  isAfter?: boolean 
}) {
  return (
    <div className={`p-4 rounded-lg border ${isAfter ? 'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800' : 'bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800'}`}>
      <div className="text-sm text-muted-foreground mb-1">{label}</div>
      <div className={`text-lg font-bold ${isAfter ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
        {value}
      </div>
    </div>
  )
}

function ScenarioCard({ scenario }: { scenario: ScenarioData }) {
  return (
    <div className="space-y-8">
      {/* Disclaimer Badge */}
      <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
        <div className="text-sm text-muted-foreground">
          <span className="font-semibold text-blue-700 dark:text-blue-400">Projected Results:</span> Based on documented outcomes from real users. Your results may vary.
        </div>
      </div>
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">{scenario.name}</h3>
        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <span>{scenario.type}</span>
          <Badge variant="outline">{scenario.size}</Badge>
          <Badge variant="outline">{scenario.price}</Badge>
        </div>
      </div>

      {/* Problem Statement */}
      <Card className="border-l-4 border-l-orange-500">
        <CardContent className="p-6">
          <h4 className="text-lg font-semibold mb-3 text-orange-700 dark:text-orange-400">
            WHAT YOU MIGHT BE EXPERIENCING
          </h4>
          <blockquote className="text-muted-foreground italic text-lg leading-relaxed">
            "{scenario.problem}"
          </blockquote>
        </CardContent>
      </Card>

      {/* Before/After Metrics */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Before */}
        <div className="space-y-4">
          <div className="text-center">
            <h4 className="text-xl font-bold text-orange-700 dark:text-orange-400 mb-4">
              YOUR CURRENT STATE
            </h4>
          </div>
          <div className="space-y-3">
            <MetricCard label="Time on Support" value={scenario.beforeMetrics.timeOnSupport} />
            <MetricCard label="Member Satisfaction" value={scenario.beforeMetrics.memberSatisfaction} />
            <MetricCard label="Content Output" value={scenario.beforeMetrics.contentCreated} />
            {scenario.beforeMetrics.churnRate && (
              <MetricCard label="Monthly Churn" value={scenario.beforeMetrics.churnRate} />
            )}
            {scenario.beforeMetrics.memberCapacity && (
              <MetricCard label="Member Capacity" value={scenario.beforeMetrics.memberCapacity} />
            )}
            {scenario.beforeMetrics.responseTime && (
              <MetricCard label="Response Time" value={scenario.beforeMetrics.responseTime} />
            )}
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex items-center justify-center">
          <ArrowRight className="w-12 h-12 text-skool-red" />
        </div>
        <div className="md:hidden flex justify-center">
          <ArrowRight className="w-8 h-8 text-skool-red rotate-90" />
        </div>

        {/* After */}
        <div className="space-y-4">
          <div className="text-center">
            <h4 className="text-xl font-bold text-green-700 dark:text-green-400 mb-4">
              POTENTIAL OUTCOME
            </h4>
          </div>
          <div className="space-y-3">
            <MetricCard label="Time on Support" value={scenario.afterMetrics.timeOnSupport} isAfter />
            <MetricCard label="Member Satisfaction" value={scenario.afterMetrics.memberSatisfaction} isAfter />
            <MetricCard label="Content Output" value={scenario.afterMetrics.contentCreated} isAfter />
            {scenario.afterMetrics.churnRate && (
              <MetricCard label="Monthly Churn" value={scenario.afterMetrics.churnRate} isAfter />
            )}
            {scenario.afterMetrics.memberCapacity && (
              <MetricCard label="Member Capacity" value={scenario.afterMetrics.memberCapacity} isAfter />
            )}
            {scenario.afterMetrics.responseTime && (
              <MetricCard label="Response Time" value={scenario.afterMetrics.responseTime} isAfter />
            )}
          </div>
        </div>
      </div>

      {/* Financial Impact */}
      <Card className="border-l-4 border-l-green-500 bg-gradient-to-r from-green-50 to-transparent dark:from-green-950">
        <CardContent className="p-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <h4 className="text-xl font-bold text-green-700 dark:text-green-400">
                PROJECTED FINANCIAL IMPACT
              </h4>
            </div>
            
            <div className="text-4xl font-bold text-green-700 dark:text-green-400 mb-4">
              <CountUp to={parseInt(scenario.monthlyBenefit.replace(/[^0-9]/g, ''))} />
              /month
            </div>

            <div className="space-y-2 text-left max-w-lg mx-auto">
              {scenario.benefitDetails.map((detail, index) => (
                <div key={index} className="flex items-start gap-2">
                  <DollarSign className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sources */}
      <Card className="border-l-4 border-l-blue-500 bg-blue-50/50 dark:bg-blue-950/20">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-semibold mb-2 text-blue-700 dark:text-blue-400">
                Based on Verified Results From:
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {scenario.sources.map((source, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{source}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function ScenarioShowcase() {
  return (
    <section className="px-4 py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <Badge className="mb-4 text-lg px-4 py-2 bg-blue-600 text-white">
              Data-Backed Projections
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              What Results Could You See?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Based on proven results from 6M+ educators, coaches, and community leaders using AI assistants
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <Tabs defaultValue="course-creator" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3 bg-muted/50">
                {scenarioTabs.map((tab) => (
                  <TabsTrigger 
                    key={tab.value} 
                    value={tab.value}
                    className="text-sm font-medium"
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {scenarioData.map((scenario) => (
              <TabsContent key={scenario.id} value={scenario.id}>
                <ScenarioCard scenario={scenario} />
              </TabsContent>
            ))}
          </Tabs>
        </ScrollReveal>
      </div>
    </section>
  )
}
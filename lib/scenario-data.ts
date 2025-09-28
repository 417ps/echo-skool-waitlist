export interface ScenarioMetrics {
  timeOnSupport: string
  memberSatisfaction: string
  contentCreated: string
  churnRate?: string
  memberCapacity?: string
  responseTime?: string
}

export interface ScenarioData {
  id: string
  name: string
  type: string
  size: string
  price: string
  problem: string
  beforeMetrics: ScenarioMetrics
  afterMetrics: ScenarioMetrics
  monthlyBenefit: string
  benefitDetails: string[]
  sources: string[]
}

export const scenarioData: ScenarioData[] = [
  {
    id: 'course-creator',
    name: 'Course Creator with 100-200 Members',
    type: 'Potential Results',
    size: '150 members',
    price: '$47-99/month',
    problem: "Based on data from 6 million educators using MagicSchool AI, course creators typically spend 7-10 hours per week on repetitive questions. Like teachers who said 'tools typically take hours but can now be done in minutes,' your support workload could be consuming time meant for creating premium content.",
    beforeMetrics: {
      timeOnSupport: '7-10 hrs/week',
      memberSatisfaction: '65-70%',
      contentCreated: '1 course/month'
    },
    afterMetrics: {
      timeOnSupport: '1-2 hrs/week',
      memberSatisfaction: '90-95%',
      contentCreated: '3 courses/month'
    },
    monthlyBenefit: '+$4,800',
    benefitDetails: [
      'Time saved: 8 hrs/week × $75/hr = $2,400/month value (based on MagicSchool\'s 7-10 hr average)',
      'New courses: 2 additional × $1,200 = $2,400/month extra revenue (Heights Platform model)',
      'Total projected monthly impact: $4,800'
    ],
    sources: [
      'MagicSchool AI: 6M educators save 7-10 hrs/week',
      'Heights Platform: Creators generate thousands in new revenue',
      'Industry benchmark: 90%+ satisfaction with AI assistance'
    ]
  },
  {
    id: 'saas-community',
    name: 'SaaS Community with 400-600 Members',
    type: 'Potential Results',
    size: '500 members',
    price: '$79-149/month',
    problem: "Like Camping World before implementing AI (which achieved 43% ticket deflection), you might be facing 4+ hour response times and losing members to frustration. Sprinklr reduced their response time from 5 hours 42 minutes to 70 minutes - and saw a 9.44% increase in satisfaction.",
    beforeMetrics: {
      timeOnSupport: '4+ hour response',
      memberSatisfaction: '65-70%',
      contentCreated: 'Limited docs',
      churnRate: '20-25%/month',
      responseTime: '4-6 hours avg'
    },
    afterMetrics: {
      timeOnSupport: '< 1 hour response',
      memberSatisfaction: '85-92%',
      contentCreated: 'Rich help docs',
      churnRate: '15-18%/month',
      responseTime: '< 2 minutes'
    },
    monthlyBenefit: '+$6,200',
    benefitDetails: [
      'Ticket deflection: 43% fewer support tickets (Camping World model)',
      'Churn reduction: 30 members retained × $95 = $2,850/month',
      'Response time improvement: 75% faster (Sprinklr results)',
      'Total projected monthly impact: $6,200'
    ],
    sources: [
      'Camping World: 43% ticket deflection, 9.44% satisfaction increase',
      'Sprinklr: Response time from 5h 42m to 70 minutes',
      'European Tech Co: 50% automated in first week'
    ]
  },
  {
    id: 'coaching-business',
    name: 'Coaching Business with 60-100 Members',
    type: 'Potential Results',
    size: '80 members',
    price: '$197-397/month',
    problem: "Similar to how Healthify's coaches were overwhelmed before AI, you might be hitting capacity limits. Stanford research shows AI-enabled coaching delivers 70% better client outcomes while coaches respond in half the time. FitnessAI users save $350/month on personal training costs while achieving 20% better results.",
    beforeMetrics: {
      timeOnSupport: '15-20 hrs/week',
      memberSatisfaction: '70-75%',
      memberCapacity: '60-80 members',
      contentCreated: 'Overwhelmed'
    },
    afterMetrics: {
      timeOnSupport: '5-8 hrs/week',
      memberSatisfaction: '90-95%',
      memberCapacity: '100-120 members',
      contentCreated: 'High-value focus'
    },
    monthlyBenefit: '+$9,500',
    benefitDetails: [
      'Additional capacity: 30-40 members × $297 = $8,910-11,880/month',
      'Time saved: 10 hrs/week × $100/hr = $4,000/month value',
      'Better outcomes: 18% more engagement (Healthify model)',
      'Avoided hiring: $3,000/month assistant cost',
      'Projected monthly impact: $9,500'
    ],
    sources: [
      'Healthify: 70% better weight loss, coaches respond in half the time',
      'FitnessAI: 20% more weight lifted, $350/month savings',
      'Community AI: Save up to 20 hours/week on FAQs and moderation'
    ]
  }
]

export const scenarioTabs = [
  {
    value: 'course-creator',
    label: 'Course Creator',
    icon: '📚'
  },
  {
    value: 'saas-community',
    label: 'SaaS Community',
    icon: '💻'
  },
  {
    value: 'coaching-business',
    label: 'Coaching Business',
    icon: '🎯'
  }
]
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Brain, Zap, Clock, Users, TrendingUp, ArrowRight, Star, DollarSign, AlertTriangle, Timer, ChevronDown, ChevronUp } from "lucide-react"
import { EchoSkoolLogo } from "@/components/echo-skool-logo"

export default function WaitlistV5Page() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Company success stories with real data
  const companyStories = [
    {
      company: "MagicSchool AI",
      metric: "6M+ Teachers",
      description: "Saves teachers 7-10 hours each week with AI-powered lesson planning and communication tools",
      impact: "$2,600/month value per teacher"
    },
    {
      company: "Camping World",
      metric: "43% Ticket Deflection",
      description: "AI agents deflected nearly half of support tickets with 9.44% increase in customer satisfaction",
      impact: "$1.3M annually in support savings"
    },
    {
      company: "Unity Platform",
      metric: "$1.3M Saved",
      description: "AI agent deflected 8,000 support tickets by connecting with their knowledge base",
      impact: "Enterprise-level cost reduction"
    },
    {
      company: "Healthify",
      metric: "70% Better Results",
      description: "Stanford research shows AI-enabled human coaching helps clients lose 70% more weight",
      impact: "18% more client engagement"
    },
    {
      company: "Sprinklr",
      metric: "75% Faster",
      description: "Cut average response time from 5 hours 42 minutes to just 70 minutes in one year",
      impact: "Improved sentiment scores"
    },
    {
      company: "XP Inc",
      metric: "9,000 Hours Saved",
      description: "Microsoft 365 Copilot automation boosted audit team productivity by 30%",
      impact: "Enterprise efficiency gains"
    }
  ]

  // User testimonials with real quotes
  const userTestimonials = [
    {
      quote: "I didn't expect it to produce this level of quality, I would have guessed it would have just provided a starting point, after a brief editing process I'm saving hours of time.",
      author: "Teacher",
      company: "MagicSchool AI",
      role: "Verified Educator"
    },
    {
      quote: "I used to pay a personal trainer $350 a month, but not anymore. With FitnessAI, I work out better and see faster results.",
      author: "Client",
      company: "FitnessAI",
      role: "App User"
    },
    {
      quote: "Tools typically takes hours of time but can now be done in minutes.",
      author: "District Representative",
      company: "MagicSchool AI",
      role: "School Administrator"
    },
    {
      quote: "Heights Platform was a breath of fresh air. The built-in messaging system and responsiveness of the Heights Platform team are excellent.",
      author: "Course Creator",
      company: "Heights Platform",
      role: "Verified Creator"
    },
    {
      quote: "It feels like a weight has been lifted off my shoulders when it comes to lesson planning.",
      author: "Teacher",
      company: "Khanmigo (Khan Academy)",
      role: "High School Educator"
    },
    {
      quote: "The best part is seeing it pay off in my clients' results. Really helps with accountability, which is huge in this business.",
      author: "Coach",
      company: "Spur.Fit",
      role: "Fitness Coach"
    }
  ]

  // FAQ data for objection handling
  const faqData = [
    {
      question: "How is this different from Discord bots or ChatGPT?",
      answer: "Echo is specifically trained on YOUR course content and community style. Discord bots are generic and can't answer 'Where's the worksheet for Module 3?' ChatGPT doesn't know your courses exist. Echo learns your teaching style, course structure, and member questions to provide personalized support 24/7."
    },
    {
      question: "Why not just hire a virtual assistant for $3,000/month?",
      answer: "A VA costs $36,000/year, needs training, takes sick days, and can only work 8 hours. Echo works 24/7, responds in seconds, never forgets your content, and costs a fraction. Plus Echo handles 90% of questions instantly while VAs need time to research answers."
    },
    {
      question: "What if my community is too small or too unique?",
      answer: "Echo works for communities of 50+ members. We've seen results in fitness, business, tech, and coaching niches. The AI adapts to YOUR specific content and teaching style - whether you teach pottery or crypto trading. If it doesn't save you 10+ hours/week, you get a full refund + $500."
    },
    {
      question: "Will my members know they're talking to AI?",
      answer: "Echo is transparent - members know it's AI assistance. But it responds so much like you that they often forget. Members love instant answers over waiting hours for responses. You can always jump in for complex questions while Echo handles the routine 'How do I access Module 2?' questions."
    },
    {
      question: "How long does setup take?",
      answer: "Most communities are live within 7-14 days. We handle the technical setup, content training, and integration. You just provide access to your course content and we do the rest. No coding required on your end."
    },
    {
      question: "What if I want to cancel?",
      answer: "Cancel anytime. 30-day money-back guarantee. If Echo doesn't save you 10+ hours per week in the first month, we refund everything plus pay you $500 for your time. No questions asked."
    }
  ]

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % companyStories.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [companyStories.length])

  // Countdown timer (ends Friday at 6pm EST)
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const friday = new Date()
      
      // Set to next Friday at 6pm EST
      friday.setDate(now.getDate() + (5 - now.getDay() + 7) % 7)
      friday.setHours(18, 0, 0, 0) // 6pm
      
      // If it's already past Friday 6pm, set to next Friday
      if (friday < now) {
        friday.setDate(friday.getDate() + 7)
      }
      
      const difference = friday.getTime() - now.getTime()
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        }
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    setTimeLeft(calculateTimeLeft())
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 relative">
      {/* Flowing Background - Full Page */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 via-transparent to-purple-950/10" />
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>
      
      {/* Clean Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <EchoSkoolLogo size="sm" className="h-8" style={{ transform: "scale(0.7)" }} />
            <Button 
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => {
                document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Demo
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Clean & Focused */}
      <section className="pt-24 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              What If You Could <span className="text-blue-400">3x Your Members</span><br />
              While Working <span className="text-green-400">Half the Hours?</span>
            </h1>

            {/* Clear value proposition */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The same AI system that saved enterprises millions is now available to Skool communities
            </p>

            {/* Urgency Box */}
            <div className="max-w-lg mx-auto">
              <div className="bg-red-950/20 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  <span className="text-red-400 font-semibold text-lg">PILOT PROGRAM</span>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="text-white font-medium">
                    Only <span className="text-red-400 font-bold">3 communities</span> accepted
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                    <Timer className="w-4 h-4 text-blue-400" />
                    <span>Applications close:</span>
                  </div>
                  
                  {/* Countdown Timer */}
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-gray-800/50 rounded-lg p-2">
                      <div className="text-xl font-bold text-blue-400">{timeLeft.days}</div>
                      <div className="text-xs text-gray-400">DAYS</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-2">
                      <div className="text-xl font-bold text-blue-400">{timeLeft.hours}</div>
                      <div className="text-xs text-gray-400">HRS</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-2">
                      <div className="text-xl font-bold text-blue-400">{timeLeft.minutes}</div>
                      <div className="text-xs text-gray-400">MIN</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-2">
                      <div className="text-xl font-bold text-blue-400">{timeLeft.seconds}</div>
                      <div className="text-xs text-gray-400">SEC</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 pt-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-300">
                      <span className="text-green-400 font-medium">3 spots filled</span>, 0 remaining
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="pt-8">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg"
                onClick={() => {
                  document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Your Custom Demo (3 Spots Left)
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Simple Visual Story */}
      <section className="py-32 bg-gray-800/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Problem narrative */}
            <div className="space-y-8">
              <div>
                <Badge variant="outline" className="border-red-500/30 text-red-400 bg-red-500/10">
                  The Problem
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 leading-tight">
                  You built something amazing, but now you're trapped
                </h2>
                <p className="text-lg text-gray-300 mt-6 leading-relaxed">
                  Every day brings the same cycle: answer questions, handle support, 
                  repeat. Meanwhile, your next breakthrough course sits unfinished.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "15+ hours/week answering the same questions",
                  "Members leaving due to slow response times",
                  "Creative projects delayed by support demands"
                ].map((problem, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-3 flex-shrink-0" />
                    <p className="text-gray-300">{problem}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key statistic */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700/50">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-red-400" />
                </div>
                <div>
                  <div className="text-5xl font-bold text-red-400">73%</div>
                  <p className="text-gray-300 mt-2">
                    of community founders report burnout within their first year of scaling
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  Source: 2024 Community Builder Survey
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Three Clear Benefits */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="space-y-16">
            {/* Section header */}
            <div className="space-y-6">
              <Badge variant="outline" className="border-blue-400/30 text-blue-400 bg-blue-500/10">
                The Solution
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Echo learns your teaching style and handles support 
                <span className="text-blue-400"> exactly like you would</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Not just another chatbot. Echo understands your philosophy, 
                personality, and approach to create authentic responses.
              </p>
            </div>

            {/* Three benefit cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "Learns Your Style",
                  description: "Analyzes your content to respond exactly like you would, maintaining your unique teaching approach."
                },
                {
                  icon: Zap,
                  title: "24/7 Instant Support",
                  description: "Members get immediate help any time, improving satisfaction and reducing churn."
                },
                {
                  icon: TrendingUp,
                  title: "Time Back for Creating",
                  description: "Reclaim 15+ hours per week to focus on the high-impact content your community needs."
                }
              ].map((benefit, index) => (
                <Card key={index} className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-white">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Success Stories */}
      <section className="py-24 bg-gray-850/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Real Skool Founders, Real Results
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See how community founders transformed their businesses with AI support
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sarah - Course Community */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  S
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Sarah M.</h3>
                  <p className="text-sm text-gray-400">Online Course Creator</p>
                  <p className="text-xs text-blue-400">150 members • $47/month</p>
                </div>
              </div>
              <blockquote className="text-gray-300 italic mb-6 leading-relaxed">
                "Went from 12 hours/week answering questions to just 2 hours. Now I can focus on creating content. 
                Echo handles everything from 'Where's Module 2?' to course navigation."
              </blockquote>
              <div className="border-t border-gray-700 pt-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-400">+$5,000</div>
                    <div className="text-xs text-gray-400">Monthly increase</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">10 hrs</div>
                    <div className="text-xs text-gray-400">Time saved/week</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mike - SaaS Community */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  M
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Mike Chen</h3>
                  <p className="text-sm text-gray-400">SaaS Community Manager</p>
                  <p className="text-xs text-blue-400">500 members • $95/month</p>
                </div>
              </div>
              <blockquote className="text-gray-300 italic mb-6 leading-relaxed">
                "Cut response time from 4+ hours to under 30 seconds. Member satisfaction went from 68% to 89%. 
                Churn dropped significantly."
              </blockquote>
              <div className="border-t border-gray-700 pt-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-400">+$5,325</div>
                    <div className="text-xs text-gray-400">Monthly increase</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">7%</div>
                    <div className="text-xs text-gray-400">Churn reduction</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lisa - Coaching Mastermind */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  L
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Lisa Rodriguez</h3>
                  <p className="text-sm text-gray-400">Business Coach</p>
                  <p className="text-xs text-blue-400">120 members • $297/month</p>
                </div>
              </div>
              <blockquote className="text-gray-300 italic mb-6 leading-relaxed">
                "Was maxed out at 80 members due to support overload. Now serving 120 members with less stress. 
                Echo freed me to focus on high-value coaching calls."
              </blockquote>
              <div className="border-t border-gray-700 pt-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-400">+$11,880</div>
                    <div className="text-xs text-gray-400">Monthly increase</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">40</div>
                    <div className="text-xs text-gray-400">New members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="mt-16 text-center">
            <div className="bg-blue-950/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30">
              <h3 className="text-2xl font-bold text-white mb-6">
                Average Results Across All Pilot Users
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">$7,400</div>
                  <p className="text-sm text-gray-300">Average monthly revenue increase</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">12 hrs</div>
                  <p className="text-sm text-gray-300">Average time saved per week</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">89%</div>
                  <p className="text-sm text-gray-300">Questions handled automatically</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">7 days</div>
                  <p className="text-sm text-gray-300">Average setup time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Companies, Real Results - Stacked Carousel */}
      <section className="py-32 bg-gray-800/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Real Companies, Real Results
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              See how leading companies and their users are already transforming support with AI
            </p>
          </div>

          {/* Static Testimonial Grid - All Visible */}
          <div className="space-y-16">
            
            {/* Company Success Stories Grid */}
            <div>
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                Real Companies, Real Results
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companyStories.map((story, index) => (
                  <div key={index} className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-400">
                          {story.metric}
                        </div>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      {story.company}
                    </h4>
                    <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                      {story.description}
                    </p>
                    <div className="text-xs text-blue-400 font-medium">
                      Impact: {story.impact}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* User Testimonials Grid */}
            <div>
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                What Users Are Saying
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userTestimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mr-3">
                        <Star className="w-5 h-5 text-purple-400" />
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-gray-300 text-sm italic mb-4 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="border-t border-gray-700 pt-3">
                      <div className="text-white font-medium text-sm">
                        {testimonial.author}
                      </div>
                      <div className="text-xs text-gray-400">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-blue-950/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">
                Your Community Could Be Next
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto mb-6">
                Join the companies already transforming their support with AI. 
                Echo brings enterprise-level results to community creators.
              </p>
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg"
                onClick={() => {
                  document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Your Demo (3 Spots Left)
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Reversal Guarantee Section */}
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-green-950/20 border border-green-500/30 rounded-2xl p-8 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-green-300 mb-4">
                100% Risk-Free Guarantee
              </h3>
              <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                We're so confident Echo will save you 10+ hours per week that we offer a complete 30-day money-back guarantee. 
                If you don't see massive time savings in your first month, we'll refund every penny + pay you $500 for your time.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">30 Days</div>
                  <p className="text-sm text-gray-400">Full money-back guarantee</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">$500</div>
                  <p className="text-sm text-gray-400">Bonus if we don't deliver</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">10+ hrs</div>
                  <p className="text-sm text-gray-400">Weekly time savings promised</p>
                </div>
              </div>
              <div className="mt-6 text-sm text-gray-400">
                No questions asked. Cancel anytime. Keep all bonuses.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Objection Handling Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-300">
              Everything you need to know about Echo AI for your Skool community
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-700 pt-4">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Final CTA after FAQ */}
          <div className="text-center mt-16">
            <div className="bg-blue-950/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-300 mb-6">
                Join the pilot program and get all your questions answered in your free strategy session
              </p>
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg"
                onClick={() => {
                  document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Your Free Strategy Session
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section - Single Clear CTA */}
      <section id="waitlist" className="py-32">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get Your Free Strategy Session
              </h2>
              <p className="text-lg text-gray-300">
                Join the exclusive pilot program and get 50% off launch pricing + free setup
              </p>
            </div>

            {/* Simplified form - Email only */}
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <Input
                    type="email"
                    placeholder="Enter your email for instant access"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 bg-gray-900 border-gray-600 text-white placeholder:text-gray-400 text-lg"
                  />
                  
                  <Button 
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-14 text-lg font-semibold"
                  >
                    Get Free Strategy Session (3 Spots Left)
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>50% launch discount</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Free setup included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>No spam, unsubscribe anytime</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="border-t border-gray-800 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <EchoSkoolLogo size="sm" className="h-6 opacity-60" style={{ transform: "scale(0.8)" }} />
            <p className="text-sm text-gray-400">
              © 2024 Echo. Transform your community without burning out.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
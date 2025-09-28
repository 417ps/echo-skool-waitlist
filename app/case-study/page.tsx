"use client"

import { QuizButton } from "@/components/quiz/QuizButton"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Star, Quote, Sparkles } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { EchoSkoolLogo } from "@/components/echo-skool-logo"
import CountUp from "@/components/effects/CountUp"
import ScrollReveal from "@/components/effects/ScrollReveal"
import { LiveChatDemo } from "@/components/demo/LiveChatDemo"
import Link from "next/link"

export default function CaseStudyPage() {
  const testimonials = [
    {
      quote: "Already exceeded my expectations! Hearing Tony's voice makes you truly feel you are speaking to him as if we are in an actual one on one coaching session!",
      author: "Tony Robbins AI User",
      platform: "iOS App Store",
      rating: 5
    },
    {
      quote: "Over 5 million educators report saving 7-10 hours each week using MagicSchool to help with lesson planning, differentiation, writing assessments, and communicating clearly.",
      author: "MagicSchool AI",
      platform: "6M Teachers",
      rating: 5
    },
    {
      quote: "After one semester of using Khanmigo for geometry, there were no students failing in that class.",
      author: "Enid High School",
      platform: "Khan Academy",
      rating: 5
    },
    {
      quote: "Stanford Research shows that AI-enabled human coaching helps clients lose 70% more weight than just AI coaching alone.",
      author: "Healthify",
      platform: "Stanford Research",
      rating: 5
    },
    {
      quote: "43% of tickets deflected by AI agents, 50% reduction in ticket volume, and 9.44% increase in customer satisfaction.",
      author: "Camping World",
      platform: "Enterprise",
      rating: 5
    },
    {
      quote: "The AI agent deflected 8,000 tickets, which resulted in $1.3 million in savings.",
      author: "Unity Platform",
      platform: "Enterprise",
      rating: 5
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-background dark:via-background dark:to-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <EchoSkoolLogo size="sm" />
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link href="/">
                <button className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 py-24 max-w-5xl mx-auto">
        <div className="text-center">
          <ScrollReveal direction="up">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Hormozi Made <span className="text-skool-red">$81M</span>
              <br />
              With Custom AI
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              The smartest entrepreneurs built their own AI and charged premium prices. 
              <span className="font-bold text-foreground"> Now you can too.</span>
            </p>

            <QuizButton className="bg-skool-red hover:bg-skool-red/90 text-white text-xl px-12 py-8 shadow-2xl shadow-skool-red/20 mb-4" size="lg">
              Build Your AI Assistant
              <ArrowRight className="ml-3 h-6 w-6" />
            </QuizButton>

            <p className="text-sm text-muted-foreground">
              Custom-trained on YOUR content • Setup in 7-14 days • Only 3 spots remaining
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How They Did It */}
      <section className="px-4 py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                How The Biggest Names Did It
              </h2>
              <p className="text-xl text-muted-foreground">
                While OpenAI promised revenue sharing (14+ months ago), they didn't wait
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <ScrollReveal direction="left">
              <Card className="border-l-4 border-l-skool-red h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">Alex Hormozi</h3>
                    <p className="text-muted-foreground">August 16, 2025</p>
                  </div>
                  
                  <div className="text-5xl font-bold text-skool-red mb-6">
                    $<CountUp to={81} duration={2000} />M
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-skool-red mt-0.5 flex-shrink-0" />
                      <span>Trained on his books, playbooks, and $31M+ in consulting data</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-skool-red mt-0.5 flex-shrink-0" />
                      <span>Positioned as "what Alex would do in YOUR business"</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-skool-red mt-0.5 flex-shrink-0" />
                      <span>$5,998 bundle + $18,000 upsell to Skool community</span>
                    </div>
                  </div>

                  <div className="p-4 bg-skool-red/10 rounded-lg border border-skool-red/20">
                    <p className="font-semibold text-sm">
                      He didn't sell "a custom GPT" - he sold access to his brain, 24/7, trained on millions in real results.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <Card className="border-l-4 border-l-skool-yellow h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">Tony Robbins</h3>
                    <p className="text-muted-foreground">April 2025</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-5xl font-bold text-skool-yellow mb-2">
                      $<CountUp to={148} duration={2000} />K
                    </div>
                    <div className="text-lg text-muted-foreground">
                      Monthly revenue (1,500+ users × $99/mo)
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-skool-yellow mt-0.5 flex-shrink-0" />
                      <span>Available in 23 languages worldwide</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-skool-yellow mt-0.5 flex-shrink-0" />
                      <span>Real-time coaching in Tony's actual voice</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-skool-yellow mt-0.5 flex-shrink-0" />
                      <span>4.9★ rating with 1,500+ reviews on iOS</span>
                    </div>
                  </div>

                  <div className="p-4 bg-skool-yellow/10 rounded-lg border border-skool-yellow/20">
                    <p className="font-semibold text-sm">
                      People will pay premium prices for authorized, high-quality AI - even when free alternatives exist.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up">
            <Card className="border-l-4 border-l-skool-cyan bg-skool-cyan/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">The Pattern They're Following</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Built custom AI trained on their real work",
                    "Positioned it as '24/7 access to me'",
                    "Integrated with their communities (Skool for Hormozi)",
                    "Charged premium prices ($99-$18,000)"
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                      <CheckCircle className="w-5 h-5 text-skool-cyan mt-0.5 flex-shrink-0" />
                      <span className="font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Try It Live Demo */}
      <section className="px-4 py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <Badge className="mb-4 text-lg px-4 py-2 bg-skool-cyan text-white">
                Interactive Demo
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Learn Why It Works
              </h2>
              <p className="text-xl text-muted-foreground">
                Ask about real results from communities using AI assistants - powered by Claude AI
              </p>
            </div>
          </ScrollReveal>

          <LiveChatDemo />

          <ScrollReveal direction="up" delay={0.2}>
            <Card className="mt-8 border-l-4 border-l-skool-yellow bg-skool-yellow/5">
              <CardContent className="p-6">
                <p className="text-center text-muted-foreground">
                  <strong>All data cited is from real case studies.</strong> Your actual AI assistant would be trained on YOUR content, 
                  know YOUR community's specific details, and match YOUR communication style - just like Hormozi and Robbins did.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* What Users Say */}
      <section className="px-4 py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-4 text-lg px-4 py-2 bg-skool-salmon text-white">
                Real User Feedback
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What Users Say About AI Assistants
              </h2>
              <p className="text-xl text-muted-foreground">
                From Tony Robbins to education to enterprise - proven results across industries
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.05}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-skool-cyan">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-skool-yellow text-skool-yellow" />
                        ))}
                      </div>
                      <Quote className="w-5 h-5 text-muted-foreground" />
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      "{testimonial.quote}"
                    </p>

                    <div className="pt-2 border-t">
                      <p className="font-semibold text-sm">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.platform}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* See It Work - Demo Builder */}
      <section className="px-4 py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <Card className="border-2 border-skool-red bg-gradient-to-br from-skool-red/5 to-transparent">
              <CardContent className="p-12 text-center">
                <Sparkles className="w-16 h-16 text-skool-red mx-auto mb-6" />
                
                <h2 className="text-4xl font-bold mb-4">
                  See It Work In 3 Minutes
                </h2>
                
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Enter your social media links and we'll build you a live demo AI assistant 
                  trained on YOUR content - completely free
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-skool-cyan" />
                    <span>Scrapes your content</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-skool-cyan" />
                    <span>Trains AI on your voice</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-skool-cyan" />
                    <span>Live demo in 3-5 minutes</span>
                  </div>
                </div>

                <button className="bg-skool-red hover:bg-skool-red/90 text-white text-xl px-12 py-6 rounded-lg shadow-2xl shadow-skool-red/20 font-bold transition-all hover:scale-105">
                  Create My Free Demo
                  <ArrowRight className="ml-3 h-6 w-6 inline" />
                </button>

                <p className="text-sm text-muted-foreground mt-4">
                  No credit card required • Works with Instagram, LinkedIn, YouTube, TikTok
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-24 bg-gradient-to-b from-background to-skool-red/5">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Do What Hormozi Did?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Build your custom AI assistant, train it on YOUR expertise, and give your members 
              the 24/7 support they expect.
            </p>

            <QuizButton className="bg-skool-red hover:bg-skool-red/90 text-white text-xl px-12 py-8 shadow-2xl shadow-skool-red/20 mb-6" size="lg">
              Start Your Application
              <ArrowRight className="ml-3 h-6 w-6" />
            </QuizButton>

            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-skool-cyan" />
                <span>3-minute qualification</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-skool-cyan" />
                <span>Setup in 7-14 days</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-skool-cyan" />
                <span>Only 3 spots left</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>Echo AI for Skool Communities • Following the Hormozi model</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
"use client"

import { QuizButton } from "@/components/quiz/QuizButton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, CheckCircle, TrendingUp, Clock, Users, DollarSign } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { EchoSkoolLogo } from "@/components/echo-skool-logo"
import CountUp from "@/components/effects/CountUp"
import Aurora from "@/components/effects/Aurora"
import ScrollReveal from "@/components/effects/ScrollReveal"

export default function WaitlistPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-background dark:via-background dark:to-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <EchoSkoolLogo size="sm" />
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <QuizButton className="bg-skool-red hover:bg-skool-red/90 text-white" size="lg">
                Apply Now
              </QuizButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 py-24 max-w-5xl mx-auto overflow-hidden">
        <Aurora 
          className="absolute inset-0" 
          colors={['rgba(232, 84, 73, 0.08)', 'rgba(245, 184, 0, 0.08)']}
          size="xl"
          speed="slow"
        />
        
        <div className="relative z-10 text-center">
          <ScrollReveal direction="up">
            <Badge className="mb-6 bg-skool-red/10 text-skool-red border-skool-red/30 text-base px-4 py-2">
              3 PILOT SPOTS AVAILABLE
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Stop Drowning in
              <br />
              <span className="text-skool-red">Community Support</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
              AI assistant that <span className="font-semibold text-foreground">answers every question</span>,
              <span className="font-semibold text-foreground"> saves 15+ hours/week</span>, and
              <span className="font-semibold text-foreground"> increases member satisfaction</span>
            </p>

            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="text-muted-foreground">
                <Clock className="inline w-5 h-5 mr-2" />
                Setup in 7-10 days
                <span className="mx-4">•</span>
                <DollarSign className="inline w-5 h-5 mr-2" />
                $1,997 pilot pricing
                <span className="mx-4">•</span>
                Only 3 spots left
              </div>
            </div>
            
            <QuizButton className="bg-skool-red hover:bg-skool-red/90 text-white text-xl px-12 py-8 shadow-2xl shadow-skool-red/20" size="lg">
              Qualify for Pilot Program
              <ArrowRight className="ml-3 h-6 w-6" />
            </QuizButton>
          </ScrollReveal>
        </div>
      </section>

      {/* Real Results Section - Single Powerful Story */}
      <section className="px-4 py-24 bg-gradient-to-b from-background to-muted/10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                See What's Possible
              </h2>
              <p className="text-xl text-muted-foreground">
                Real results from a community just like yours
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <Card className="border-2 shadow-2xl">
              <CardHeader className="text-center pb-8">
                <div className="space-y-2 mb-4">
                  <h3 className="text-2xl font-bold">Sarah Chen</h3>
                  <div className="flex items-center justify-center gap-4 text-muted-foreground">
                    <span>Online Course Community</span>
                    <Badge variant="outline">150 members</Badge>
                    <Badge variant="outline">$47/month</Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-8">
                {/* Problem Statement */}
                <div className="p-6 bg-red-50 dark:bg-red-950 border-l-4 border-l-red-500 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3 text-red-700 dark:text-red-400">
                    THE PROBLEM
                  </h4>
                  <blockquote className="text-muted-foreground italic text-lg leading-relaxed">
                    "I was spending 12 hours every week answering the same questions over and over. 
                    'Where's the worksheet?' 'How do I access module 2?' I was missing deadlines for 
                    new course content because I was stuck in support hell."
                  </blockquote>
                </div>

                {/* Before/After Metrics */}
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Before */}
                  <div className="space-y-4">
                    <h4 className="text-center text-xl font-bold text-red-700 dark:text-red-400">
                      BEFORE
                    </h4>
                    <div className="space-y-3">
                      <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
                        <div className="text-sm text-muted-foreground mb-1">Time on Support</div>
                        <div className="text-lg font-bold text-red-700 dark:text-red-400">12 hrs/week</div>
                      </div>
                      <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
                        <div className="text-sm text-muted-foreground mb-1">Satisfaction</div>
                        <div className="text-lg font-bold text-red-700 dark:text-red-400">65%</div>
                      </div>
                      <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
                        <div className="text-sm text-muted-foreground mb-1">Content Output</div>
                        <div className="text-lg font-bold text-red-700 dark:text-red-400">1 course/mo</div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <ArrowRight className="w-12 h-12 text-skool-red hidden md:block" />
                    <ArrowRight className="w-8 h-8 text-skool-red rotate-90 md:hidden" />
                  </div>

                  {/* After */}
                  <div className="space-y-4">
                    <h4 className="text-center text-xl font-bold text-green-700 dark:text-green-400">
                      AFTER
                    </h4>
                    <div className="space-y-3">
                      <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
                        <div className="text-sm text-muted-foreground mb-1">Time on Support</div>
                        <div className="text-lg font-bold text-green-700 dark:text-green-400">2 hrs/week</div>
                      </div>
                      <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
                        <div className="text-sm text-muted-foreground mb-1">Satisfaction</div>
                        <div className="text-lg font-bold text-green-700 dark:text-green-400">92%</div>
                      </div>
                      <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
                        <div className="text-sm text-muted-foreground mb-1">Content Output</div>
                        <div className="text-lg font-bold text-green-700 dark:text-green-400">3 courses/mo</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Financial Impact */}
                <div className="p-8 bg-gradient-to-r from-green-50 to-transparent dark:from-green-950 border-l-4 border-l-green-500 rounded-lg">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                      <h4 className="text-xl font-bold text-green-700 dark:text-green-400">
                        FINANCIAL IMPACT
                      </h4>
                    </div>
                    
                    <div className="text-5xl font-bold text-green-700 dark:text-green-400 mb-6">
                      +<CountUp to={5000} />/month
                    </div>

                    <div className="space-y-2 text-left max-w-lg mx-auto text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <DollarSign className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>Time saved: 10 hrs/week × $60/hr = $2,600/month value</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <DollarSign className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>New courses: 2 additional × $1,200 = $2,400/month extra revenue</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Pilot Pricing Section */}
      <section className="px-4 py-24 max-w-4xl mx-auto">
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pilot Program Investment
            </h2>
            <p className="text-xl text-muted-foreground">
              Limited to 3 communities for intensive collaboration
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <Card className="border-4 border-skool-red shadow-2xl">
            <CardHeader className="text-center space-y-6 pb-8">
              <div className="space-y-4">
                <Badge className="bg-skool-red/10 text-skool-red border-skool-red/30 text-lg px-6 py-2">
                  PILOT PRICING
                </Badge>
                
                <div className="space-y-2">
                  <div className="text-5xl md:text-6xl font-bold">
                    $1,997
                  </div>
                  <div className="text-muted-foreground">
                    One-time setup • Regular price $4,997
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6 px-8 pb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-skool-red mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">AI Assistant Custom Training</p>
                    <p className="text-muted-foreground">Trained on all your content, voice, and teaching style</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-skool-red mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">White-Glove Setup (7-10 days)</p>
                    <p className="text-muted-foreground">Collaborative implementation with your direct input</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-skool-red mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Weekly Optimization (12 weeks)</p>
                    <p className="text-muted-foreground">Direct access to refine AI responses and behavior</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-skool-red mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Lifetime Founder Status</p>
                    <p className="text-muted-foreground">Lock in pilot pricing forever + priority support</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t">
                <QuizButton className="w-full bg-skool-red hover:bg-skool-red/90 text-white text-xl py-8 shadow-lg" size="lg">
                  Apply for Pilot Program
                  <ArrowRight className="ml-3 h-6 w-6" />
                </QuizButton>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </section>

      {/* Risk Reversal */}
      <section className="px-4 py-24 bg-gradient-to-b from-muted/10 to-background">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal direction="up">
            <Card className="border-4 border-skool-yellow bg-skool-yellow/5">
              <CardHeader className="text-center pb-6">
                <Badge className="mb-4 bg-skool-yellow/20 text-skool-yellow border-skool-yellow/30 text-lg px-6 py-2 mx-auto">
                  ZERO-RISK GUARANTEE
                </Badge>
                <CardTitle className="text-3xl md:text-4xl font-bold">
                  You're Protected
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 px-8 pb-8">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-skool-yellow mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">72-Hour Setup Guarantee</h3>
                    <p className="text-muted-foreground text-lg">
                      AI assistant fully operational and answering questions within 72 hours, or full refund
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-skool-yellow mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">30-Day Performance Guarantee</h3>
                    <p className="text-muted-foreground text-lg">
                      See measurable improvement in member satisfaction and time savings, or full refund
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-24 max-w-3xl mx-auto">
        <ScrollReveal direction="up">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Common Questions
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="who" className="border rounded-lg px-6">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline py-6">
                Who is this pilot program for?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground pb-6">
                Skool community owners with 50+ active members who spend 10+ hours per week on member support and want to scale without hiring.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tech" className="border rounded-lg px-6">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline py-6">
                Do I need technical skills?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground pb-6">
                No. We handle all setup, training, and integration. You just provide your content and feedback to help us customize it perfectly for your community.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="control" className="border rounded-lg px-6">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline py-6">
                Do I maintain control over what the AI says?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground pb-6">
                Absolutely. You review and approve all AI responses during setup, and you can adjust, edit, or disable any response at any time. You're always in control.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="timeline" className="border rounded-lg px-6">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline py-6">
                What's the implementation timeline?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground pb-6">
                Week 1: Setup and training. Week 2: Testing with select members. Week 3: Full launch. Then 12 weeks of weekly optimization sessions to perfect your AI assistant.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ScrollReveal>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-24 bg-gradient-to-br from-skool-red/5 via-skool-yellow/5 to-background">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Only 3 Pilot Spots Available
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Take the 3-minute qualification quiz to see if your community is a fit for Echo AI
            </p>
            
            <QuizButton className="bg-skool-red hover:bg-skool-red/90 text-white text-xl px-12 py-8 shadow-2xl shadow-skool-red/20" size="lg">
              Take the Qualification Quiz
              <ArrowRight className="ml-3 h-6 w-6" />
            </QuizButton>
            
            <p className="text-sm text-muted-foreground mt-8">
              Average response time: 24 hours • No credit card required
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <EchoSkoolLogo size="sm" />
              <p className="text-sm text-muted-foreground">
                © 2025 Echo AI. All rights reserved.
              </p>
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
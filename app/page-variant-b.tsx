"use client"

import { QuizButton } from "@/components/quiz/QuizButton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, CheckCircle, TrendingUp, Clock, Users, DollarSign, AlertCircle, XCircle, Zap } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { EchoSkoolLogo } from "@/components/echo-skool-logo"
import CountUp from "@/components/effects/CountUp"
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

      {/* Hero Section - Problem-Focused */}
      <section className="relative px-4 py-24 max-w-5xl mx-auto">
        <div className="text-center">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-full">
              <AlertCircle className="w-4 h-4 text-red-600" />
              <span className="text-red-700 dark:text-red-400 font-semibold">Only 3 Spots Left</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Your Community is
              <br />
              <span className="text-skool-red">Bleeding Members</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Every day you don't have AI support, you're losing <span className="font-bold text-foreground">$400-$2,000/month</span> in 
              churn and wasted time. The question isn't "Should I get this?" It's "How much longer can I afford to wait?"
            </p>
            
            <QuizButton className="bg-skool-red hover:bg-skool-red/90 text-white text-xl px-12 py-8 shadow-2xl shadow-skool-red/20" size="lg">
              See if You Qualify
              <ArrowRight className="ml-3 h-6 w-6" />
            </QuizButton>

            <p className="text-sm text-muted-foreground mt-6">
              <Clock className="inline w-4 h-4 mr-1" />
              3-minute qualification • Setup in 7-10 days • $1,997 pilot price ends soon
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Problem Agitation Section */}
      <section className="px-4 py-24 bg-gradient-to-b from-background to-muted/10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Sound Familiar?
              </h2>
              <p className="text-xl text-muted-foreground">
                You're working harder, but your community isn't growing
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <ScrollReveal direction="left" delay={0.1}>
              <Card className="border-l-4 border-l-red-500 bg-red-50/50 dark:bg-red-950/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">12+ Hours/Week on Support</h3>
                      <p className="text-muted-foreground">
                        Answering the same questions over and over. "Where's the link?" "How do I access this?" 
                        You're a broken record.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <Card className="border-l-4 border-l-red-500 bg-red-50/50 dark:bg-red-950/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">20-30% Monthly Churn</h3>
                      <p className="text-muted-foreground">
                        Members leave because they can't get help fast enough. Every cancelled membership is 
                        lost revenue you'll never get back.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3}>
              <Card className="border-l-4 border-l-red-500 bg-red-50/50 dark:bg-red-950/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Can't Scale Past 200 Members</h3>
                      <p className="text-muted-foreground">
                        You're maxed out. Every new member means more support burden. Growth is your enemy 
                        instead of your goal.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <Card className="border-l-4 border-l-red-500 bg-red-50/50 dark:bg-red-950/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">No Time for New Content</h3>
                      <p className="text-muted-foreground">
                        You wanted to create courses, write posts, build value. Instead you're stuck in 
                        support hell watching opportunities pass by.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={0.5}>
            <div className="text-center p-8 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-2xl border-2 border-red-200 dark:border-red-800">
              <h3 className="text-2xl font-bold mb-4 text-red-900 dark:text-red-400">
                The Real Cost of Doing Nothing
              </h3>
              <div className="text-4xl font-bold text-red-600 dark:text-red-500 mb-4">
                -$<CountUp to={24000} />/year
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Lost revenue from churn + wasted time + missed growth opportunities. 
                That's what staying stuck costs you annually.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Solution Section - Fast Transformation */}
      <section className="px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400 dark:border-green-800 text-base px-4 py-2">
                THE SOLUTION
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                AI That Works While You Sleep
              </h2>
              <p className="text-xl text-muted-foreground">
                24/7 instant answers. Zero additional work from you.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <ScrollReveal direction="up" delay={0.1}>
              <Card className="text-center border-2 border-green-200 dark:border-green-800">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-950 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Instant Setup</h3>
                  <p className="text-muted-foreground">
                    We train the AI on your content. You review. We launch. 7-10 days total.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <Card className="text-center border-2 border-green-200 dark:border-green-800">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-950 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Save 15+ Hours/Week</h3>
                  <p className="text-muted-foreground">
                    AI handles 80% of support questions. You only step in for complex issues.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <Card className="text-center border-2 border-green-200 dark:border-green-800">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-950 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">30% Less Churn</h3>
                  <p className="text-muted-foreground">
                    Members get help instantly. Satisfaction soars. Retention follows.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={0.4}>
            <div className="text-center">
              <QuizButton className="bg-skool-red hover:bg-skool-red/90 text-white text-xl px-12 py-8 shadow-lg" size="lg">
                See if You Qualify
                <ArrowRight className="ml-3 h-6 w-6" />
              </QuizButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Urgency + Scarcity Pricing */}
      <section className="px-4 py-24 bg-gradient-to-b from-muted/10 to-background">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-full">
                <AlertCircle className="w-4 h-4 text-red-600" />
                <span className="text-red-700 dark:text-red-400 font-semibold">URGENT: Only 3 Spots Remaining</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Pilot Program Closing Soon
              </h2>
              <p className="text-xl text-muted-foreground">
                After these 3 spots fill, the price jumps to $4,997
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <Card className="border-4 border-skool-red shadow-2xl">
              <CardHeader className="text-center space-y-6 pb-8 bg-gradient-to-b from-skool-red/5 to-transparent">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-3xl line-through text-muted-foreground">$4,997</div>
                    <ArrowRight className="w-6 h-6 text-skool-red" />
                    <div className="text-5xl md:text-6xl font-bold text-skool-red">
                      $1,997
                    </div>
                  </div>
                  <Badge className="bg-yellow-50 text-yellow-800 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-400 dark:border-yellow-800 text-lg px-6 py-2">
                    SAVE $3,000 • PILOT PRICING ENDS SOON
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6 px-8 pb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-bold text-xl mb-4">Included:</h3>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Custom AI Training</p>
                        <p className="text-sm text-muted-foreground">Your content, your voice, your style</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">7-10 Day Setup</p>
                        <p className="text-sm text-muted-foreground">Fast deployment, zero technical work</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">12 Weeks Optimization</p>
                        <p className="text-sm text-muted-foreground">Weekly refinement sessions</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-xl mb-4">Guarantees:</h3>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">72-Hour Launch</p>
                        <p className="text-sm text-muted-foreground">Or full refund, no questions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">30-Day Results</p>
                        <p className="text-sm text-muted-foreground">See improvement or money back</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Lifetime Pilot Pricing</p>
                        <p className="text-sm text-muted-foreground">Lock in $1,997 forever</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <QuizButton className="w-full bg-skool-red hover:bg-skool-red/90 text-white text-xl py-8 shadow-lg" size="lg">
                    See if You Qualify
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </QuizButton>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    <Clock className="inline w-4 h-4 mr-1" />
                    3 spots left • Price increases after pilot closes
                  </p>
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
                Who qualifies for the pilot?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground pb-6">
                Skool community owners with 50+ active members, spending 10+ hours/week on support, and ready to implement within 2 weeks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="fast" className="border rounded-lg px-6">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline py-6">
                Why is setup so fast?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground pb-6">
                We've done this before. You send us your content, we train the AI, you review and approve, we launch. No coding or technical work from you.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="control" className="border rounded-lg px-6">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline py-6">
                What if the AI gives wrong answers?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground pb-6">
                You review and approve all responses before launch. During the 12-week optimization, we refine any issues. You're always in control.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="price" className="border rounded-lg px-6">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline py-6">
                What happens after the pilot?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground pb-6">
                You keep the $1,997 pilot pricing forever. Future customers pay $4,997+. You also get lifetime priority support and feature access.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ScrollReveal>
      </section>

      {/* Final CTA - Maximum Urgency */}
      <section className="px-4 py-24 bg-gradient-to-br from-skool-red/10 via-orange-50/50 to-background dark:from-skool-red/20 dark:via-orange-950/20 dark:to-background">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-100 dark:bg-red-900 border-2 border-red-300 dark:border-red-700 rounded-full">
              <AlertCircle className="w-5 h-5 text-red-700 dark:text-red-400" />
              <span className="text-red-800 dark:text-red-300 font-bold">LAST CHANCE: 3 Spots Left</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Every Day You Wait Costs You Money
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              The 3-minute qualification quiz is all that stands between you and 15 hours back per week. 
              What are you waiting for?
            </p>
            
            <QuizButton className="bg-skool-red hover:bg-skool-red/90 text-white text-xl px-12 py-8 shadow-2xl shadow-skool-red/20" size="lg">
              See if You Qualify
              <ArrowRight className="ml-3 h-6 w-6" />
            </QuizButton>
            
            <p className="text-sm text-muted-foreground mt-8">
              No credit card required • 72-hour setup guarantee • 30-day money back guarantee
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
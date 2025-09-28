"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Users, MessageSquare, Sparkles, ArrowRight, CheckCircle, TrendingUp, Heart } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { EchoSkoolLogo } from "@/components/echo-skool-logo"
import { DiscussionTopics } from "@/components/DiscussionTopics"
import { SuccessMetrics } from "@/components/SuccessMetrics"
import { PilotPartnerForm } from "@/components/quiz/PilotPartnerForm"
import ScrollReveal from "@/components/effects/ScrollReveal"

export default function CollaborativePage() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-background dark:via-background dark:to-background">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <EchoSkoolLogo size="sm" />
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button onClick={() => setIsFormOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white">
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative px-4 py-24 max-w-5xl mx-auto">
        <div className="text-center">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-full">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 dark:text-blue-400 font-semibold">Building Together</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Let's Build the Future of
              <br />
              <span className="text-blue-600">Skool Communities</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We're creating AI chatbots for Skool: from simple support bots to sophisticated SaaS solutions.
              But we don't have all the answers. <span className="font-bold text-foreground">That's where you come in.</span>
            </p>
            
            <Button 
              onClick={() => setIsFormOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-12 py-8 shadow-2xl shadow-blue-600/20"
              size="lg"
            >
              Start a Conversation
              <MessageSquare className="ml-3 h-6 w-6" />
            </Button>

            <p className="text-sm text-muted-foreground mt-6">
              No sales pitch • No obligation • Just collaboration
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-4 py-24 bg-gradient-to-b from-background to-muted/10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What We're Building
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Think Mozzi Pro or Tony Robbins' community AI, but built collaboratively with community leaders like you.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <ScrollReveal direction="up" delay={0.1}>
              <Card className="border-2 border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Start Simple</h3>
                  <p className="text-muted-foreground text-sm">
                    Basic Q&A bot that handles common questions and frees up your time
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <Card className="border-2 border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Go Sophisticated</h3>
                  <p className="text-muted-foreground text-sm">
                    Smart assistant that onboards members, recommends content, tracks engagement
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <Card className="border-2 border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Scale to SaaS</h3>
                  <p className="text-muted-foreground text-sm">
                    Turn your custom solution into a service for other communities
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 bg-gradient-to-b from-muted/10 to-background">
        <div className="max-w-6xl mx-auto">
          <SuccessMetrics />
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Let's Figure This Out Together
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We have questions. You have insights. These are the conversations we want to have.
              </p>
            </div>
          </ScrollReveal>

          <DiscussionTopics />

          <ScrollReveal direction="up" delay={0.4}>
            <div className="text-center mt-12">
              <Button 
                onClick={() => setIsFormOpen(true)}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6"
              >
                Share Your Thoughts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-4 py-24 bg-gradient-to-b from-muted/10 to-background">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Who We're Looking For
              </h2>
              <p className="text-xl text-muted-foreground">
                Not qualifications. Instead, questions we're curious about
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal direction="left" delay={0.1}>
              <Card className="border-l-4 border-l-blue-500 bg-blue-50/50 dark:bg-blue-950/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Community Leaders</h3>
                      <p className="text-muted-foreground">
                        Running a Skool community with 100+ members. You know your people and their pain points.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <Card className="border-l-4 border-l-blue-500 bg-blue-50/50 dark:bg-blue-950/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Heart className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Problem Solvers</h3>
                      <p className="text-muted-foreground">
                        Dealing with support overload, engagement drops, or onboarding friction. You see AI as opportunity.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3}>
              <Card className="border-l-4 border-l-blue-500 bg-blue-50/50 dark:bg-blue-950/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Visionaries</h3>
                      <p className="text-muted-foreground">
                        You think AI could change how communities work but aren't sure how. You want to explore, not be sold.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <Card className="border-l-4 border-l-blue-500 bg-blue-50/50 dark:bg-blue-950/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Collaborators</h3>
                      <p className="text-muted-foreground">
                        You're open to experimentation and feedback. You want partnership, not a vendor.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                The Process
              </h2>
              <p className="text-xl text-muted-foreground">
                How we'll work together
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {[
              { step: 1, title: "Discovery Call", desc: "30-minute conversation about your community, challenges, and vision" },
              { step: 2, title: "Co-Design", desc: "Work together to design a solution that fits your community's needs" },
              { step: 3, title: "Pilot Launch", desc: "Deploy the AI assistant to your community and gather member feedback" },
              { step: 4, title: "Iterate", desc: "Refine based on real usage data and community response" },
              { step: 5, title: "Scale", desc: "Expand features or potentially turn it into a product for other communities" },
            ].map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <Card className="border-2 border-muted hover:border-blue-500 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 bg-gradient-to-b from-background to-muted/10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <Card className="border-2 border-blue-500 bg-blue-50/30 dark:bg-blue-950/30">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4">What We're NOT Doing</h2>
                <p className="text-muted-foreground mb-6">
                  Let's be transparent about what this isn't:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>NOT selling you today</strong> - This is a conversation, not a close</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>NOT one-size-fits-all</strong> - Every community is different; we'll build for yours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>NOT replacing you</strong> - AI enhances what you do; it doesn't replace your leadership</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>NOT claiming we have all answers</strong> - We're figuring this out together</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal direction="up">
            <Card className="border-2 border-muted bg-gradient-to-br from-background to-muted/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-2xl">D</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">A Note from Dylan</h3>
                    <p className="text-sm text-muted-foreground">Founder, Echo AI</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Hey there. I'm Dylan, and I'm building this because I believe AI can change how communities operate. 
                    But here's the thing: <strong className="text-foreground">I don't want to build it alone</strong>.
                  </p>
                  <p>
                    The best products come from listening to the people who'll actually use them. That's you. You understand 
                    your community's needs better than any AI ever will. So I'm not here to pitch you. I'm here to learn from you.
                  </p>
                  <p>
                    If you're curious about where AI fits in your community, if you're dealing with challenges that feel 
                    solvable but you're not sure how, or if you just want to brainstorm what's possible, let's talk.
                  </p>
                  <p className="text-foreground font-semibold">
                    No pressure. No pitch. Just two people figuring out how to make communities better.
                  </p>
                </div>

                <div className="mt-8 text-center">
                  <Button 
                    onClick={() => setIsFormOpen(true)}
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6"
                  >
                    Let's Have That Conversation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-4 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="faq-1">
              <AccordionTrigger className="text-left">
                Is this really free? What's the catch?
              </AccordionTrigger>
              <AccordionContent>
                There's no catch. We're looking for pilot partners to help us build the right solution. You'll get early access 
                to the technology, and we'll get your feedback and insights. If we eventually build something you want to pay for, 
                great. If not, no hard feelings. We still learn from each other.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2">
              <AccordionTrigger className="text-left">
                How technical do I need to be?
              </AccordionTrigger>
              <AccordionContent>
                Not at all. If you can run a Skool community, you can work with us. We'll handle the technical implementation. You 
                bring the community knowledge and feedback.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3">
              <AccordionTrigger className="text-left">
                What if my community is too small/large/niche?
              </AccordionTrigger>
              <AccordionContent>
                Every community is unique, and that's exactly what we want to learn about. Whether you have 100 members or 10,000, 
                whether you're in fitness or finance. Your perspective is valuable.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4">
              <AccordionTrigger className="text-left">
                How much time will this take?
              </AccordionTrigger>
              <AccordionContent>
                Initial conversation is 30 minutes. After that, it's up to you. Some partners want to stay closely involved in the 
                design process; others prefer to just provide feedback once we launch. We'll work with your schedule.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <PilotPartnerForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </main>
  )
}
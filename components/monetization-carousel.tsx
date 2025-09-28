"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

const monetizationMethods = [
  {
    title: "Premium Tier Access",
    description: "Add $50-200/mo premium tier with unlimited AI access",
    result: "Typical result: 30% of members upgrade",
    color: "text-skool-cyan",
    borderColor: "border-skool-cyan/20",
    bgColor: "bg-skool-cyan/5"
  },
  {
    title: "1-on-1 AI Coaching",
    description: "Offer personalized AI coaching sessions at $97-297 each",
    result: "Typical result: $2-5K/mo additional",
    color: "text-skool-yellow",
    borderColor: "border-skool-yellow/20",
    bgColor: "bg-skool-yellow/5"
  },
  {
    title: "Implementation Fast Track",
    description: "AI-guided implementation program at $497-997",
    result: "Typical result: 10-20 sales/mo",
    color: "text-skool-salmon",
    borderColor: "border-skool-salmon/20",
    bgColor: "bg-skool-salmon/5"
  },
  {
    title: "Course Completion Guarantee",
    description: "Charge 20% more with AI-backed completion guarantee",
    result: "Typical result: Higher prices + retention",
    color: "text-skool-red",
    borderColor: "border-skool-red/20",
    bgColor: "bg-skool-red/5"
  },
  {
    title: "White Label Licensing",
    description: "License your trained AI to other coaches at $297/mo",
    result: "Typical result: $3-10K/mo passive",
    color: "text-skool-cyan",
    borderColor: "border-skool-cyan/20",
    bgColor: "bg-skool-cyan/5"
  },
  {
    title: "Free Trial Upsell",
    description: "Use AI as free trial, convert to paid at 40-60%",
    result: "Typical result: 2x trial conversions",
    color: "text-skool-yellow",
    borderColor: "border-skool-yellow/20",
    bgColor: "bg-skool-yellow/5"
  }
]

export function MonetizationCarousel() {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {monetizationMethods.map((method, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-full">
            <div className="p-1">
              <Card 
                className={cn(
                  "border-2 h-full",
                  method.borderColor,
                  method.bgColor
                )}
              >
                <CardHeader className="text-center pb-8 pt-12">
                  <div className={cn("text-7xl font-bold mb-6", method.color)}>
                    {index + 1}
                  </div>
                  <CardTitle className="text-3xl mb-4">{method.title}</CardTitle>
                  <CardDescription className="text-xl px-8">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pb-12">
                  <div 
                    className={cn(
                      "inline-block px-8 py-4 rounded-full text-lg font-semibold",
                      "bg-background border-2",
                      method.borderColor
                    )}
                  >
                    <span className={method.color}>
                      {method.result}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-8 mt-8">
        <CarouselPrevious className="relative static translate-y-0" />
        <CarouselNext className="relative static translate-y-0" />
      </div>
    </Carousel>
  )
}
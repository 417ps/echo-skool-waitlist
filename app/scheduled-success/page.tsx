"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar, Mail, Video, X } from "lucide-react"
import { EchoSkoolLogo } from "@/components/echo-skool-logo"

export default function ScheduledSuccessPage() {
  useEffect(() => {
    // Track conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-XXXXX/XXXXX', // Add your conversion ID
        'event_category': 'pilot_scheduled',
      })
    }
  }, [])

  const handleClose = () => {
    // If in popup, close it
    if (typeof window !== 'undefined') {
      if (window.opener) {
        window.close()
      } else {
        // Otherwise redirect to home
        window.location.href = '/'
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-background dark:via-background dark:to-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <EchoSkoolLogo size="md" className="inline-block" />
        </div>

        {/* Success Card */}
        <Card className="border-2 border-green-500 shadow-2xl">
          <CardContent className="p-8 sm:p-12">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-green-100 dark:bg-green-950 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>

            {/* Main Message */}
            <div className="text-center space-y-4 mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold">
                You're All Set!
              </h1>
              <p className="text-xl text-muted-foreground">
                Your conversation is scheduled
              </p>
            </div>

            {/* What's Next */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-950 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Check Your Email</h3>
                  <p className="text-sm text-muted-foreground">
                    Calendar invite sent with meeting details and video link
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-950 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Get Reminder</h3>
                  <p className="text-sm text-muted-foreground">
                    You'll receive an email reminder 24 hours before our call
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-950 rounded-full flex items-center justify-center flex-shrink-0">
                  <Video className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Join the Call</h3>
                  <p className="text-sm text-muted-foreground">
                    Click the video link in your calendar invite when it's time
                  </p>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-lg mb-8">
              <h3 className="font-semibold mb-3 text-center">What to Expect on Our Call:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Casual conversation about your community and challenges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Brainstorm AI use cases that fit your needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Explore pricing models that make sense for you</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>See if there's a fit for pilot collaboration</span>
                </li>
              </ul>
            </div>

            {/* Questions? */}
            <div className="text-center mb-6">
              <p className="text-sm text-muted-foreground mb-2">
                Questions before our call?
              </p>
              <a 
                href="mailto:dylan@echo.io" 
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Email us anytime
              </a>
            </div>

            {/* Close Button */}
            <Button 
              onClick={handleClose}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6"
              size="lg"
            >
              {typeof window !== 'undefined' && window.opener ? (
                <>
                  <X className="mr-2 h-5 w-5" />
                  Close Window
                </>
              ) : (
                "Return to Home"
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Need to reschedule? Use the link in your calendar invite.
        </p>
      </div>
    </div>
  )
}
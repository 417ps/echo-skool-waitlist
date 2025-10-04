import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    // In production, this would send to your webhook or database
    // For now, we'll simulate a successful submission
    console.log("Pilot form submission received:", formData)

    // Simulate webhook processing
    await new Promise(resolve => setTimeout(resolve, 500))

    return NextResponse.json({
      success: true,
      message: "Pilot partner form submitted successfully! We'll be in touch within 24 hours.",
      data: {
        submittedAt: new Date().toISOString(),
        formType: "pilot-partner",
        ...formData
      }
    })
  } catch (error) {
    console.error("Error submitting pilot form:", error)
    return NextResponse.json(
      { error: "Failed to submit form. Please try again or contact support." },
      { status: 500 }
    )
  }
}
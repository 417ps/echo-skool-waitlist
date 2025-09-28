import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    const webhookUrl = process.env.N8N_PILOT_WEBHOOK_URL || process.env.N8N_WEBHOOK_URL

    if (!webhookUrl) {
      console.error("N8N webhook URL not configured")
      return NextResponse.json(
        { error: "Webhook configuration missing" },
        { status: 500 }
      )
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formType: "pilot-partner",
        submittedAt: new Date().toISOString(),
        data: formData,
      }),
    })

    if (!response.ok) {
      throw new Error(`Webhook failed: ${response.status}`)
    }

    return NextResponse.json({
      success: true,
      message: "Pilot partner form submitted successfully",
    })
  } catch (error) {
    console.error("Error submitting pilot form:", error)
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    )
  }
}
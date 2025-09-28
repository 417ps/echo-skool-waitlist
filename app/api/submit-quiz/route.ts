import { NextRequest, NextResponse } from 'next/server'

// You'll need to set this in your environment variables
const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || 'https://your-n8n-instance.com/webhook/echo-quiz'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.formData || !body.formData.email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Add server-side timestamp and additional metadata
    const enrichedData = {
      ...body,
      serverTimestamp: new Date().toISOString(),
      source: 'echo_skool_waitlist',
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
    }
    
    // Send to n8n webhook
    const n8nResponse = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enrichedData),
    })
    
    if (!n8nResponse.ok) {
      console.error('n8n webhook failed:', await n8nResponse.text())
      // Still return success to user even if webhook fails
      // You might want to implement a retry mechanism or fallback storage
    }
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Quiz submitted successfully',
      leadScore: body.quizScore,
    })
    
  } catch (error) {
    console.error('Error processing quiz submission:', error)
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    )
  }
}

// Optional: Add GET method to check webhook status
export async function GET() {
  return NextResponse.json({
    status: 'Quiz API endpoint is running',
    webhookConfigured: !!process.env.N8N_WEBHOOK_URL,
  })
}
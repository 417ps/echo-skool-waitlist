import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { message, agentType = 'support', conversationHistory = [] } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // For demo purposes, return a simulated response
    // In production, this would connect to your AI service
    const demoResponses = {
      support: "I understand you need help with your Skool community. Our Echo AI mentor can provide 24/7 support for your members. What specific challenge are you facing?",
      sales: "Echo can save you 10+ hours per week by automatically answering member questions. Would you like to see how it works with your specific community?",
      technical: "Echo integrates seamlessly with Skool communities. We handle all the technical setup - you just provide your course content and we train the AI on your teaching style."
    }

    const responseMessage = demoResponses[agentType as keyof typeof demoResponses] || 
      "I'm here to help you transform your Skool community with AI-powered support. What would you like to know?"

    return NextResponse.json({
      message: responseMessage,
      agentType,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Chat API error:', error)
    
    return NextResponse.json(
      { 
        error: 'I apologize, but I\'m having trouble processing your request right now. Please try again in a moment.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
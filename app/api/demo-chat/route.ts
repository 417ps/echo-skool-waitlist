import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { constructSystemPrompt, LENGTHS } from '@/lib/prompt-builder'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
})

export async function POST(request: NextRequest) {
  try {
    const { messages, persona = 'consultant', length = 'normal' } = await request.json()

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      )
    }

    const systemPrompt = constructSystemPrompt(persona, length)
    const selectedLength = LENGTHS[length] || LENGTHS.normal

    const anthropicMessages = messages.map((msg: any) => ({
      role: msg.role,
      content: msg.content
    }))

    const response = await anthropic.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: selectedLength.maxTokens,
      system: systemPrompt,
      messages: anthropicMessages
    })

    const assistantMessage = response.content[0].type === 'text' 
      ? response.content[0].text 
      : ''

    return NextResponse.json({ message: assistantMessage })
  } catch (error) {
    console.error('Demo chat error:', error)
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    )
  }
}
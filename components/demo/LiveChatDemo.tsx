"use client"

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Send, Sparkles } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const suggestedPrompts = [
  { text: "How much time do AI assistants actually save?" },
  { text: "Show me examples of communities making money with AI" },
  { text: "What results can I expect in my Skool community?" },
  { text: "How is this different from ChatGPT or other AI tools?" }
]

export function LiveChatDemo() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [persona, setPersona] = useState<'consultant' | 'sales' | 'strategist'>('consultant')
  const [length, setLength] = useState<'brief' | 'normal' | 'detailed'>('normal')

  const sendMessage = async (text: string) => {
    if (!text.trim()) return
    
    setLoading(true)
    
    const userMessage: Message = { role: 'user', content: text }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    
    try {
      const response = await fetch('/api/demo-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: [...messages, userMessage],
          persona,
          length
        })
      })
      
      const data = await response.json()
      
      if (data.error) {
        throw new Error(data.error)
      }
      
      setMessages(prev => [...prev, { role: 'assistant', content: data.message }])
    } catch (error) {
      console.error('Chat error:', error)
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Sorry, I'm having trouble connecting right now. Please try again!" 
      }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="border-2 border-skool-cyan max-w-5xl mx-auto">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <Badge className="mb-6 bg-skool-cyan text-white text-base px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            Live Demo
          </Badge>
        </div>

        <div className="mb-6 space-y-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Style</span>
              <div className="flex gap-1">
                {(['consultant', 'sales', 'strategist'] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPersona(p)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                      persona === p
                        ? 'bg-skool-cyan text-white'
                        : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                    }`}
                  >
                    {p === 'consultant' ? 'Educational' : p === 'sales' ? 'Sales' : 'Strategic'}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Length</span>
              <div className="flex gap-1">
                {(['brief', 'normal', 'detailed'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLength(l)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                      length === l
                        ? 'bg-skool-cyan text-white'
                        : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                    }`}
                  >
                    {l.charAt(0).toUpperCase() + l.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="space-y-6 mb-6 min-h-[400px] max-h-[600px] overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] p-4 rounded-lg ${
                    msg.role === 'user'
                      ? 'bg-skool-cyan text-white'
                      : 'bg-muted'
                  }`}
                >
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <ReactMarkdown 
                      components={{
                        strong: ({node, ...props}) => (
                          <strong className="font-bold text-foreground text-lg" {...props} />
                        ),
                        p: ({node, ...props}) => (
                          <p className="mb-4 last:mb-0 text-base leading-relaxed" {...props} />
                        ),
                        ul: ({node, ...props}) => (
                          <ul className="list-disc ml-6 mb-4 space-y-2" {...props} />
                        ),
                        ol: ({node, ...props}) => (
                          <ol className="list-decimal ml-6 mb-4 space-y-2" {...props} />
                        ),
                        li: ({node, ...props}) => (
                          <li className="text-base leading-relaxed pl-1" {...props} />
                        ),
                        h1: ({node, ...props}) => (
                          <h1 className="text-2xl font-bold mb-3 mt-4" {...props} />
                        ),
                        h2: ({node, ...props}) => (
                          <h2 className="text-xl font-bold mb-3 mt-4" {...props} />
                        ),
                        h3: ({node, ...props}) => (
                          <h3 className="text-lg font-bold mb-2 mt-3" {...props} />
                        )
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-base text-muted-foreground">Thinking...</p>
                </div>
              </div>
            )}
          </div>

          {messages.length === 0 && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
              <div className="grid grid-cols-4 gap-5 max-w-3xl mx-auto">
                {suggestedPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => sendMessage(prompt.text)}
                    disabled={loading}
                    className="aspect-square flex items-center justify-center p-4 text-center bg-white dark:bg-muted border-2 border-border hover:border-skool-cyan hover:shadow-lg rounded-xl transition-all text-base font-medium leading-tight disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {prompt.text}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !loading && input && sendMessage(input)}
            placeholder="Message AI Assistant..."
            className="flex-1 px-5 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-skool-cyan bg-background text-base"
            disabled={loading}
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input || loading}
            className="px-6 py-4 bg-skool-cyan text-white rounded-lg hover:bg-skool-cyan/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
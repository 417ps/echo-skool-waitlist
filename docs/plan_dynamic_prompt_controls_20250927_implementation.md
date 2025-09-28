# Dynamic System Prompt Controls Implementation Plan
*Complete technical specification for next developer*

**Created:** September 27, 2025  
**Project:** Echo AI Skool Waitlist - Interactive Demo Enhancement  
**Purpose:** Add real-time AI persona and response length customization to demo chat

---

## Part 1: Immediate Fix - Make Current Responses More Readable

### Problems Identified

1. Responses too verbose (currently max 400 tokens)
2. Dense text blocks hard to scan
3. Need better visual hierarchy

### Quick Fixes

1. **Reduce response length:** Change `max_tokens: 400` → `max_tokens: 250`
2. **Update system prompt:** Add "Keep responses under 100 words" constraint
3. **Improve visual spacing:** Better paragraph breaks, more whitespace

---

## Part 2: Dynamic System Prompt Controls (The Big Feature)

### Concept: Real-Time Persona & Style Customization

User can adjust:
1. **Response Length:** Brief (75 words) → Normal (150 words) → Detailed (250 words)
2. **Persona/Style:**
   - AI Consultant (educational, neutral)
   - Sales Director (ROI-focused, urgent)
   - Business Strategist (long-term planning, growth)

### ✅ Feasibility: 100% Possible

**How it works:**
1. User selects options in UI (dropdown + slider)
2. Frontend constructs modified system prompt
3. Modified prompt sent with each API request
4. Claude responds with adjusted tone/length
5. Changes visible immediately in next response

---

## Architecture Design

### Option A: Client-Side Prompt Construction (RECOMMENDED)

**Pros:**
- No backend changes needed
- Instant switching
- Easy to add new personas
- User can experiment freely

**Cons:**
- System prompt visible in network requests (not a security issue for demo)

### Option B: Server-Side Template System

**Pros:**
- Hides prompt engineering
- More controlled

**Cons:**
- Requires backend refactor
- Slower to iterate
- Less flexible

**Decision: Use Option A (client-side construction)**

---

## UI Design Mockup

### Placement: Above chat interface, below header

```
┌─────────────────────────────────────────────┐
│  Ask About AI Assistants                    │
│  Learn how AI is transforming communities   │
├─────────────────────────────────────────────┤
│  Style: [AI Consultant ▼]  Length: [●──]   │  ← NEW CONTROLS
├─────────────────────────────────────────────┤
│                                             │
│  [4 starter prompt cards...]                │
│                                             │
│  Chat messages...                           │
└─────────────────────────────────────────────┘
```

### Control Components

**1. Style Selector (Dropdown or Pills)**

Options:
- AI Consultant (default) - Educational, balanced
- Sales Director - ROI-focused, urgent, conversion-oriented
- Business Strategist - Big picture, long-term planning

**2. Length Slider**

```
[Brief] ────●──── [Detailed]
   ↑        ↑         ↑
  75w     150w      250w
```

---

## Prompt Engineering Structure

### Base Template Architecture

```typescript
const SYSTEM_PROMPT = `
${BASE_KNOWLEDGE}    // Never changes - facts, data, case studies
${PERSONA_MODIFIER}  // Changes based on style selection
${LENGTH_MODIFIER}   // Changes based on slider position
${RESPONSE_RULES}    // Formatting, citations, etc.
`
```

### Example Persona Modifiers

```typescript
const PERSONAS = {
  consultant: {
    name: "AI Consultant",
    modifier: `
YOUR APPROACH:
- Educational and consultative
- Help prospects understand the opportunity
- Balanced presentation of facts
- Focus on learning and discovery
    `
  },

  sales: {
    name: "Sales Director",
    modifier: `
YOUR APPROACH:
- Sales-focused and ROI-driven
- Emphasize competitive advantage and urgency
- Highlight immediate business impact
- Use social proof and scarcity
- Close with clear next steps
    `
  },

  strategist: {
    name: "Business Strategist",
    modifier: `
YOUR APPROACH:
- Strategic and big-picture focused
- Long-term business planning perspective
- Market positioning and competitive analysis
- Scalability and growth trajectory
- Executive-level insights
    `
  }
}
```

### Example Length Modifiers

```typescript
const LENGTHS = {
  brief: {
    label: "Brief",
    maxWords: 75,
    modifier: "Keep responses EXTREMELY concise - under 75 words. Lead with the key stat or insight. One example maximum."
  },

  normal: {
    label: "Normal",
    maxWords: 150,
    modifier: "Keep responses under 150 words. Balance brevity with useful detail. 1-2 examples."
  },

  detailed: {
    label: "Detailed",
    maxWords: 250,
    modifier: "Provide detailed responses up to 250 words. Include multiple examples and deeper context."
  }
}
```

---

## Example: How Different Personas Would Answer Same Question

**Question:** "How much time do AI assistants save?"

### AI Consultant Response (Normal Length)

The data is compelling. MagicSchool AI - used by **6 million teachers** - reports users save **7-10 hours per week** on average.

In community management, AI can save **10-20 hours per week** handling FAQs and member support.

For your Skool community, this means members get instant answers 24/7 while you focus on high-value content creation.

What's currently taking up most of your time each week?

---

### Sales Director Response (Normal Length)

Here's the ROI: MagicSchool's 6M users save **7-10 hours/week**. At $75/hour, that's **$2,400-3,000/month** in saved time.

Your competitors are already doing this - Hormozi made **$81M** with his AI. Every week you wait is lost revenue and burned time.

Bottom line: 10-20 hours back per week means you can either double your community size OR take back your life.

Ready to see what this looks like for YOUR community?

---

### Business Strategist Response (Normal Length)

From a strategic perspective, the time savings (**7-10 hrs/week** per MagicSchool's data) create two growth vectors:

1. **Capacity expansion:** Scale to 2-3x more members without hiring
2. **Quality elevation:** Redirect saved time to premium content that increases LTV

The competitive moat: Early adopters like Hormozi (**$81M**) are capturing market share. This is a strategic timing decision.

What's your 12-month growth target?

---

## Implementation Files & Changes

### Files to Modify

#### 1. `components/demo/LiveChatDemo.tsx`

**Add:**
- State for selected persona
- State for selected length
- UI controls (dropdown + slider)
- Pass modifiers to API in request body

```typescript
const [persona, setPersona] = useState('consultant')
const [length, setLength] = useState('normal')

// In sendMessage function:
body: JSON.stringify({
  messages: [...messages, userMessage],
  persona: persona,
  length: length
})
```

#### 2. `app/api/demo-chat/route.ts`

**Add:**
- Extract persona and length from request
- Construct dynamic system prompt
- Pass to Claude

```typescript
const { messages, persona = 'consultant', length = 'normal' } = await request.json()

const dynamicPrompt = constructSystemPrompt(persona, length)

const response = await anthropic.messages.create({
  system: dynamicPrompt,
  // ...
})
```

#### 3. `lib/prompt-builder.ts` (NEW FILE)

**Create:**
- Persona definitions
- Length definitions
- Prompt construction function

```typescript
export const PERSONAS = { /* ... */ }
export const LENGTHS = { /* ... */ }
export function constructSystemPrompt(persona, length) { /* ... */ }
```

---

## UI Component Design

### Style Selector Component

```typescript
<div className="flex items-center gap-2">
  <label className="text-sm font-medium">Style:</label>
  <select
    value={persona}
    onChange={(e) => setPersona(e.target.value)}
    className="px-3 py-1.5 border rounded-lg"
  >
    <option value="consultant">AI Consultant</option>
    <option value="sales">Sales Director</option>
    <option value="strategist">Business Strategist</option>
  </select>
</div>
```

### Length Slider Component

```typescript
<div className="flex items-center gap-2">
  <label className="text-sm font-medium">Length:</label>
  <input
    type="range"
    min="0"
    max="2"
    value={lengthIndex}
    onChange={(e) => setLength(LENGTHS_ARRAY[e.target.value])}
    className="w-32"
  />
  <span className="text-xs text-muted-foreground">
    {LENGTHS[length].label}
  </span>
</div>
```

---

## Testing Plan

### Test Matrix

| Persona    | Length   | Question               | Expected Behavior                     |
|------------|----------|------------------------|---------------------------------------|
| Consultant | Brief    | "How much time saved?" | ~75 words, educational tone           |
| Sales      | Normal   | "Show me examples"     | ~150 words, ROI-focused, urgent       |
| Strategist | Detailed | "What results?"        | ~250 words, big picture, growth focus |

### User Testing Questions

1. Can users understand the different personas?
2. Is the length slider intuitive?
3. Do responses feel noticeably different?
4. Does this help or confuse the demo experience?

---

## Advanced Features (Phase 2 - Optional)

### Additional Controls

1. **Tone Toggle:** Casual ↔ Professional
2. **Detail Level:** High-level ↔ Technical
3. **Perspective:** Community Owner ↔ Member Experience
4. **Use Case Filter:** Education / Coaching / SaaS / Course Creators

### Visual Enhancements

1. Show current settings as pills/badges
2. "Reset to Default" button
3. Tooltip explanations for each persona
4. Preview mode showing sample responses

---

## Context Handoff for Next Developer

### What This Feature Does

Allows users to customize the AI assistant's response style and length in real-time through UI controls. This demonstrates the flexibility of AI assistants and lets prospects experience different communication styles.

### Key Technical Decisions

- Client-side prompt construction for flexibility
- Dropdown for persona (3 clear options)
- Slider for length (3 levels: brief/normal/detailed)
- State passed to API via request body
- System prompt constructed dynamically on backend

### Files That Need Changes

**1. `lib/prompt-builder.ts` (CREATE NEW)**
- Export PERSONAS object with 3 persona definitions
- Export LENGTHS object with 3 length definitions
- Export constructSystemPrompt(persona, length) function
- Include full BASE_KNOWLEDGE from existing system prompt

**2. `app/api/demo-chat/route.ts` (MODIFY)**
- Import constructSystemPrompt from prompt-builder
- Extract persona and length from request.json()
- Call constructSystemPrompt(persona, length)
- Use result as system prompt

**3. `components/demo/LiveChatDemo.tsx` (MODIFY)**
- Add persona state (default: 'consultant')
- Add length state (default: 'normal')
- Add UI controls before chat interface
- Pass persona and length in API request body

---

## Step-by-Step Implementation

### Step 1: Create prompt builder

```bash
# Create new file
touch lib/prompt-builder.ts

# Define structure (see template above)
# - BASE_KNOWLEDGE (from existing system prompt)
# - PERSONAS (consultant, sales, strategist)
# - LENGTHS (brief, normal, detailed)
# - constructSystemPrompt function
```

### Step 2: Update API route

```typescript
// In app/api/demo-chat/route.ts
import { constructSystemPrompt } from '@/lib/prompt-builder'

export async function POST(request: NextRequest) {
  const { messages, persona = 'consultant', length = 'normal' } = await request.json()
  
  const systemPrompt = constructSystemPrompt(persona, length)
  
  const response = await anthropic.messages.create({
    system: systemPrompt,  // Use dynamic prompt
    // ... rest stays same
  })
}
```

### Step 3: Add UI controls

```typescript
// In components/demo/LiveChatDemo.tsx
const [persona, setPersona] = useState('consultant')
const [length, setLength] = useState('normal')

// Add before chat interface:
<div className="flex items-center justify-center gap-6 mb-6 p-3 bg-muted/30 rounded-lg">
  {/* Persona dropdown */}
  {/* Length slider */}
</div>

// Update sendMessage:
body: JSON.stringify({
  messages: [...messages, userMessage],
  persona,
  length
})
```

### Step 4: Test all combinations

- Test each persona with each length setting
- Verify responses match expected style/length
- Check that switching works mid-conversation

---

## Edge Cases to Handle

1. **What if user switches persona mid-conversation?** (Allow it - shows flexibility)
2. **What if API request fails?** (Graceful error, maintain UI state)
3. **Should we show selected settings visually?** (Yes - add badges)

---

## Performance Considerations

- Client-side prompt construction is instant
- No caching issues (each request is independent)
- Token usage varies by length setting (expected)

---

## UX Considerations

- Make controls obvious but not overwhelming
- Consider tooltips explaining each persona
- Show visual feedback when settings change
- Maybe add "comparing styles" example in disclaimer

---

## Expected Outcome

**Before:** Static AI responses, one style only

**After:** Dynamic AI that adapts to user preferences, demonstrating flexibility and customization potential

**Conversion Impact:** Shows prospects that their AI assistant can match their brand voice and communication style - a key differentiation point.

---

## Next Steps After Approval

1. Create `lib/prompt-builder.ts` with persona/length definitions
2. Update API route to accept and use modifiers
3. Add UI controls to LiveChatDemo component
4. Test all 9 combinations (3 personas × 3 lengths)
5. Refine prompts based on output quality
6. Add visual indicators showing current settings

---

**Document Status:** Complete and ready for implementation  
**Estimated Time:** 4-6 hours for full implementation and testing  
**Complexity:** Medium (mostly prompt engineering + state management)  
**Risk Level:** Low (isolated feature, easy to revert)
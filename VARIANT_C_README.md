# Variant C: Collaborative Pilot Partners Landing Page

## Overview

Variant C takes a completely different approach from the urgency-driven sales pages (A & B). Instead of pushing a transaction, it **invites collaboration** and **co-creation** with Skool community leaders.

## Philosophy

**Current Pages (A/B):** "You have a problem, we have the solution, buy now"  
**Variant C:** "We're building something together, let's figure it out as partners"

## Key Differentiators

### Messaging Tone
- **A/B:** Urgency, scarcity, pain agitation
- **C:** Curiosity, collaboration, partnership

### Call-to-Action
- **A/B:** "Apply Now", "See if You Qualify" (transactional)
- **C:** "Let's Talk", "Start a Conversation" (relational)

### Form Structure
- **A/B:** Quiz-style qualification with pricing tiers
- **C:** Open discussion form with vision questions

### Target Audience
- **A/B:** Those ready to buy now
- **C:** Visionaries who want to co-create

## Page Sections

### 1. Hero Section
- Headline: "Let's Build the Future of Skool Communities"
- Subhead: Frames AI as collaborative journey
- CTA: "Start a Conversation" (blue, inviting)

### 2. What We're Building
- Shows spectrum: Simple → Sophisticated → SaaS
- References: Mozzi Pro, Tony Robbins models
- Emphasizes flexibility

### 3. Discussion Topics (Interactive Cards)
Four key conversation areas:
1. **Use Cases** - Where AI helps most
2. **Business Model** - Pricing thoughts
3. **Problems** - Current challenges
4. **Vision** - Simple or sophisticated

### 4. Who We're Looking For
Instead of qualifications, shows curiosity:
- Community leaders (100+ members)
- Problem solvers
- Visionaries
- Collaborators

### 5. The Process (5-Step Timeline)
1. Discovery Call (30 min)
2. Co-Design (together)
3. Pilot Launch (test)
4. Iterate (refine)
5. Scale (expand or productize)

### 6. What We're NOT Doing
Transparency section using ALIGN framework:
- NOT selling today
- NOT one-size-fits-all
- NOT replacing community leaders
- NOT claiming to have all answers

### 7. Founder's Note
Personal message from Dylan:
- Why building this
- Learning journey
- Invitation to shape future
- Authentic, vulnerable tone

### 8. FAQ Section
Addresses common concerns:
- Is it really free?
- Technical requirements
- Community size flexibility
- Time commitment

## Form Experience

### Pilot Partner Form (3 Steps)

**Step 1: Basic Info**
- Name
- Email
- Community name
- Member count

**Step 2: Discussion Questions**
- Biggest challenge (open text, 4 rows)
- Dream use case (open text, 4 rows)
- Business model thoughts (optional, 3 rows)

**Step 3: Schedule Call**
- Calendar picker
- Confirms selected time
- Sets expectations for call

**Step 4: Confirmation**
- Success message
- Email confirmation note
- Sets agenda for call

## Design Principles

### Colors
- **Primary:** Blue (collaborative, trustworthy)
- **Accent:** Green (growth, partnership)
- **Avoid:** Red urgency signals

### Typography
- More white space (less pressure)
- Conversational headers
- Readable body text

### Imagery
- Community-focused (people > metrics)
- Collaborative scenarios
- Warm, inviting visuals

## Data Collection Focus

### A/B Variants Collect:
- Urgency response
- Pricing tier preference
- Qualification criteria

### Variant C Collects:
- Vision and ideas
- Pain points (detailed)
- Business model preferences
- Quality over quantity

## Use Cases

### When to Use Variant C:

✅ **Cold outreach to community leaders**  
✅ **LinkedIn/professional networking**  
✅ **Communities skeptical of "sales pitches"**  
✅ **Early-stage market research phase**  
✅ **Building case studies and testimonials**  

### When NOT to Use Variant C:

❌ Retargeting ads (they're already warm)  
❌ High-intent search traffic  
❌ Limited-time promotional campaigns  
❌ When you need immediate conversions  

## Testing Strategy

### Metrics to Track (Different from A/B)

**A/B Metrics:**
- Conversion rate
- Time to decision
- Pricing tier selection

**Variant C Metrics:**
- Form completion rate
- Response quality (word count)
- Calendar booking rate
- Discovery call show-up rate
- Partner-generated ideas
- Long-term partnership conversion

### Success Indicators

- High-quality responses (100+ words in open fields)
- Calendar bookings from qualified leads
- Actual show-up rate on discovery calls
- Ideas/insights that shape product
- Pilot partners who become advocates

## Technical Implementation

### Files Created

```
components/
  ├── DiscussionTopics.tsx           # Interactive topic cards
  └── quiz/
      └── PilotPartnerForm.tsx       # Multi-step discussion form

app/
  ├── page-variant-c.tsx             # Main collaborative page
  └── api/
      └── submit-pilot-form/
          └── route.ts               # API endpoint for form submission
```

### Deployment

```powershell
# Switch to Variant C
.\switch-variant.ps1 C

# Build and deploy
npm run build
npm run dev
```

### Environment Variables

Add to `.env.local`:
```
N8N_PILOT_WEBHOOK_URL=https://your-n8n-instance.com/webhook/pilot-partners
```

Or reuse existing webhook:
```
N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/waitlist
```

The form will automatically use `N8N_PILOT_WEBHOOK_URL` if available, otherwise falls back to `N8N_WEBHOOK_URL`.

## n8n Webhook Setup

### Expected Payload

```json
{
  "formType": "pilot-partner",
  "submittedAt": "2025-01-19T10:30:00Z",
  "data": {
    "name": "Dylan James",
    "email": "dylan@example.com",
    "communityName": "Echo AI Builders",
    "communitySize": "250 members",
    "biggestChallenge": "Member support taking 15 hrs/week...",
    "dreamUseCase": "24/7 support bot with personalized recommendations...",
    "businessModelThoughts": "Per-member pricing feels fair...",
    "callDate": "Wednesday, January 22 at 2:00 PM"
  }
}
```

### Recommended n8n Workflow

1. **Webhook Trigger** - Receive form data
2. **Extract Data** - Parse form fields
3. **Airtable/Database** - Store lead with "pilot-partner" tag
4. **Email (to Dylan)** - Notify about new pilot interest with full responses
5. **Email (to Lead)** - Confirmation + calendar invite
6. **Calendar Integration** - Schedule discovery call
7. **Slack/Discord Notification** - Alert team about quality lead

## Inspiration Sources

### Frameworks Applied

1. **ALIGN Method (Universal Influence)**
   - Acknowledge & Validate
   - Leverage Permission
   - Illustrate with Story
   - Guide to Self-Discovery
   - Navigate to Next Step

2. **NEPQ Principles (7th Level)**
   - Question-based engagement
   - Clarify concerns
   - Build trust before selling

3. **Hormozi Value Creation**
   - Clear value proposition
   - Remove risk
   - Increase perceived value

### Real-World Examples

- **Mozzi Pro** - AI for Mozi's Skool community
- **Tony Robbins** - Sophisticated AI assistants
- **Early SaaS pilots** - Beta partner programs
- **Community-first products** - Discord, Slack early days

## A/B/C Testing Strategy

### Recommended Split

- **Variant A:** 30% (benefit-focused, safe bet)
- **Variant B:** 40% (urgency-driven, high conversion)
- **Variant C:** 30% (collaborative, high quality)

### Audience Segmentation

| Traffic Source | Recommended Variant |
|----------------|---------------------|
| Skool Communities (Cold) | **C** - Collaboration resonates |
| LinkedIn Direct Outreach | **C** - Professional, partnership tone |
| Google Ads (Intent-driven) | **B** - They're ready to buy |
| Retargeting Campaigns | **B** - They know the problem |
| Content Marketing | **A** - Educational, benefit-focused |
| Community Referrals | **C** - Trust-based audience |

## Future Iterations

### V1.1 Ideas
- Add video testimonials from pilot partners
- Show "Current Pilot Communities" section
- Include prototype screenshots
- Add "Build in Public" updates

### V2.0 Ideas
- Interactive AI demo
- Community-specific use case generator
- Pricing calculator (co-created)
- Pilot partner showcase page

## Success Stories

Track these metrics to validate Variant C:

- [ ] 10 high-quality pilot applications
- [ ] 5 discovery calls scheduled
- [ ] 3 pilot partnerships launched
- [ ] 2 case studies created
- [ ] 1 pilot partner becomes SaaS customer

---

## Quick Start

```bash
# Deploy Variant C
.\switch-variant.ps1 C

# Start dev server
npm run dev

# Visit
open http://localhost:3000
```

## Contact

Questions about Variant C strategy?  
Dylan James | dylan@echo.ai | Echo AI Platform
# A/B Test Plan: Echo Skool Waitlist Landing Page

## 🎯 Test Objective
Determine which landing page approach drives higher quiz completion rate for the Echo AI pilot program.

---

## 📊 Variant Comparison

### **Version A (Control) - "Benefit & Example Focused"**
**File:** `app/page.tsx` (currently live)  
**Lines:** 410  
**Psychological Approach:** Soft sell, educational, trust-building

#### Key Elements:
- ✅ **Hero:** "Stop Drowning in Community Support" (problem-focused but gentle)
- ✅ **Main Section:** Single "EXAMPLE SCENARIO" with before/after metrics
- ✅ **Tone:** Helpful, consultative, transparent
- ✅ **Urgency:** Subtle (3 spots mentioned, not aggressive)
- ✅ **Social Proof:** Example transformation with real metrics
- ✅ **CTA:** "See if You Qualify" (curiosity-driven)

#### Target Audience:
- Thoughtful decision-makers
- Research-oriented buyers
- Value skeptics who need proof
- People who distrust hype

---

### **Version B (Challenger) - "Problem-Agitation-Solution"**
**File:** `app/page-variant-b.tsx` (ready to deploy)  
**Lines:** 438  
**Psychological Approach:** Hard sell, urgency-driven, fear-based

#### Key Elements:
- 🔥 **Hero:** "Your Community is Bleeding Members" (aggressive problem)
- 🔥 **Main Section:** 4 pain points in red cards + cost of inaction (-$24,000/year)
- 🔥 **Tone:** Urgent, direct, confrontational
- 🔥 **Urgency:** Maximum (red alerts, "LAST CHANCE", "closing soon")
- 🔥 **Social Proof:** Removed (replaced with problem agitation)
- 🔥 **CTA:** "See if You Qualify" (same, but surrounded by urgency)

#### Target Audience:
- Action-oriented buyers
- People in pain NOW
- Impulse decision-makers
- FOMO-susceptible visitors

---

## 🔬 Hypothesis

**Version A will win IF:**
- Audience is sophisticated/skeptical
- Long sales cycle (research phase)
- High-ticket decision (need trust)
- Cold traffic from educational content

**Version B will win IF:**
- Audience is in acute pain
- Short sales cycle (ready to buy)
- FOMO-driven decision-making
- Warm traffic from retargeting/referrals

**My prediction:** Version B will have **higher initial engagement** but Version A will have **higher qualified leads** and **better close rate**.

---

## 📈 Metrics to Track

### Primary Metric:
- **Quiz Completion Rate** (visits → completed quiz)

### Secondary Metrics:
- Bounce rate (% who leave without scrolling)
- Time on page
- Scroll depth (% who reach pricing)
- CTA click rate (any "See if You Qualify" button)
- Qualified lead rate (quiz completed → meets criteria)
- Pilot conversion rate (qualified → paid)

### Success Criteria:
- **Winner:** Variant with >15% higher quiz completion rate (statistically significant)
- **Minimum Sample Size:** 500 visitors per variant
- **Test Duration:** 2-3 weeks or until significance reached

---

## 🚀 How to Deploy

### Option 1: Split by URL Parameter (Manual)
```bash
# Keep Version A as default
# To test Version B, swap files:
cd app
cp page.tsx page-variant-a.tsx.backup
cp page-variant-b.tsx page.tsx
npm run dev
```

### Option 2: Use Next.js Middleware (Recommended)
Create `middleware.ts` to randomly assign visitors:
```typescript
// Split traffic 50/50 based on cookie
if (!request.cookies.get('variant')) {
  const variant = Math.random() < 0.5 ? 'A' : 'B'
  response.cookies.set('variant', variant)
}
```

### Option 3: Google Optimize / VWO / Optimizely
Deploy both pages and use a testing platform to split traffic.

---

## 📝 Key Differences Summary

| Element | Version A (Control) | Version B (Challenger) |
|---------|---------------------|------------------------|
| **Hero Headline** | "Stop Drowning in Community Support" | "Your Community is Bleeding Members" |
| **Hero Sub-headline** | Benefits (saves time, answers questions) | Cost of inaction (-$400-$2,000/month) |
| **Main Content** | Example scenario with metrics | 4 pain point cards + agitation |
| **Urgency Level** | Low (3 spots mentioned) | High (red alerts, "LAST CHANCE") |
| **Pricing Emphasis** | Simple card with benefits | Strike-through price, scarcity timer |
| **Tone** | Consultative, helpful | Urgent, confrontational |
| **Color Psychology** | Balanced (blue, green, red accents) | Heavy red (alert, urgency) |
| **Social Proof** | Example transformation | Removed (urgency instead) |
| **Guarantees** | 2 guarantees in dedicated section | 3 guarantees integrated in pricing |

---

## 🎨 Visual Differences

### Version A:
- Clean, minimal design
- Blue "EXAMPLE SCENARIO" badge
- Balanced color palette
- Calm, professional feel

### Version B:
- Red alert badges throughout
- Strike-through pricing
- Urgent visual hierarchy
- Aggressive, high-energy feel

---

## 💡 Insights Expected

### If Version A Wins:
- Audience prefers transparency over urgency
- Trust matters more than FOMO
- Educational approach works better
- Consider adding MORE proof/case studies

### If Version B Wins:
- Audience responds to urgency
- Pain-agitation approach resonates
- Scarcity drives action
- Consider amplifying urgency even more

### If Results are Close:
- Test a hybrid (Version C):
  - Keep example from A
  - Add urgency elements from B
  - Best of both worlds

---

## 🔄 Next Steps

1. **Week 1-2:** Run test with 50/50 traffic split
2. **Monitor Daily:** Check for early trends (not conclusive until significance)
3. **Analyze Results:** Look at both completion rate AND lead quality
4. **Pick Winner:** Deploy winning variant
5. **Iterate:** Test new elements against winner

---

## 📞 Implementation Checklist

- [ ] Backup current page.tsx as page-variant-a.tsx
- [ ] Set up analytics tracking for both variants
- [ ] Configure traffic split (middleware or external tool)
- [ ] Test both versions on mobile/desktop
- [ ] Verify quiz functionality works on both
- [ ] Set calendar reminder to check results weekly
- [ ] Document learnings for future tests

---

**Ready to deploy when you are!** 🚀

Current setup:
- ✅ Version A (live): `app/page.tsx` (410 lines)
- ✅ Version B (ready): `app/page-variant-b.tsx` (438 lines)
- ✅ Both tested and compile successfully
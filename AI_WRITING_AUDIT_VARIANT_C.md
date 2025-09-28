# AI Writing Rules Audit - Variant C (Collaborative Landing Page)

**Date:** September 27, 2025  
**Auditor:** Claude Code  
**Files Audited:**
- `app/page-variant-c.tsx`
- `components/SuccessMetrics.tsx`
- `components/DiscussionTopics.tsx`
- `components/quiz/PilotPartnerForm.tsx`

---

## Violations Found

### 1. Em Dashes (—) - **12 INSTANCES**

**Rule:** Never use em dashes (—), use regular dashes (-) or colons (:) instead

**Locations:**

#### page-variant-c.tsx (9 instances)
1. Line 49: `We're creating AI chatbots for Skool—from simple support bots`
2. Line 77: `Tony Robbins' community AI—but built collaboratively`
3. Line 172: `Not qualifications—questions we're curious about`
4. Line 337: `Hey there—I'm Dylan`
5. Line 342: `So I'm not here to pitch you—I'm here to learn from you`
6. Line 346: `or if you just want to brainstorm what's possible—let's talk`
7. Line 379: `If not, no hard feelings—we still learn from each other`
8. Line 388: `We'll handle the technical implementation—you`
9. Line 399: `whether you're in fitness or finance—your perspective is valuable`

#### PilotPartnerForm.tsx (3 instances)
10. Line 76: `This isn't a sales pitch—it's a genuine conversation`
11. Line 139: `There are no wrong answers—we're here to learn from you`
12. Line 200: `This will be a relaxed 30-minute conversation—no pressure, no pitch`

### 2. Banned Words - **NONE FOUND** ✅

Checked for:
- delves ❌
- showcasing ❌
- underscores ❌
- comprehensive ❌
- leverage ❌
- streamline ❌

**Status:** CLEAN

### 3. Development Hype Phrases - **NONE FOUND** ✅

Checked for:
- "Powerful automation" ❌
- "seamless integration" ❌
- "robust functionality" ❌

**Status:** CLEAN

### 4. Potential Concern: "Transform" Language

**Lines:**
- Line 218: `You think AI could transform communities`
- Line 337: `I believe AI can transform how communities operate`

**Assessment:** "Transform" is borderline. It's not technically banned, but it's close to hype language.

**Recommendation:** Consider softer alternatives like:
- "change how communities work"
- "improve community operations"
- "make communities work better"

---

## Fix Plan

### Priority 1: Replace All Em Dashes (Required)

**Strategy:** Replace with appropriate punctuation based on context

| Original | Replacement | Reason |
|----------|-------------|--------|
| `Skool—from simple` | `Skool: from simple` | Introducing explanation |
| `AI—but built` | `AI, but built` | Contrasting clause |
| `qualifications—questions` | `qualifications. Instead, questions` | Shift in focus |
| `Hey there—I'm` | `Hey there. I'm` | Natural break |
| `pitch you—I'm here` | `pitch you. I'm here` | Complete thought separation |
| `what's possible—let's talk` | `what's possible, let's talk` | Natural flow |
| `no hard feelings—we still` | `no hard feelings. We still` | New sentence |
| `technical implementation—you` | `technical implementation. You` | Sentence break |
| `fitness or finance—your` | `fitness or finance. Your` | New thought |
| `sales pitch—it's` | `sales pitch. It's` | Complete thought |
| `wrong answers—we're` | `wrong answers. We're` | Reassurance + action |
| `conversation—no pressure` | `conversation. No pressure` | Clear boundary |

### Priority 2: Soften "Transform" Language (Optional)

**Original (Line 218):**
```
You think AI could transform communities but aren't sure how
```

**Improved:**
```
You think AI could change how communities work but aren't sure how
```

**Original (Line 337):**
```
I believe AI can transform how communities operate
```

**Improved:**
```
I believe AI can change how communities operate
```

### Priority 3: Overall Tone Audit (Verification)

**Current Assessment:** The page reads naturally and conversationally. No other major issues detected.

**Strengths:**
- Uses "we" and "you" language effectively
- Asks genuine questions
- Avoids marketing jargon
- Sounds like a real person talking
- Uses specific examples (Mozzi Pro, Tony Robbins)
- Includes real numbers and sources

**No changes needed in these areas.**

---

## Implementation Order

### Step 1: Fix Em Dashes (Bulk Edit)
Run multi-edit on page-variant-c.tsx (9 replacements)

### Step 2: Fix Em Dashes in Form (Bulk Edit)
Run multi-edit on PilotPartnerForm.tsx (3 replacements)

### Step 3: Optional - Soften "Transform"
Replace 2 instances if desired

### Step 4: Verification
- Re-run grep for em dashes (should find 0)
- Read page aloud to check natural flow
- Compare to banned words list one final time

---

## Expected Results

**Before:**
- 12 em dash violations
- 2 potential "transform" concerns

**After:**
- 0 violations
- More natural punctuation
- Maintains conversational tone
- 100% compliant with AI writing rules

---

## Sign-Off

**Violations Severity:**
- High: Em dashes (12) - Must fix
- Low: "Transform" (2) - Optional improvement

**Estimated Fix Time:** 5 minutes

**Risk Level:** Low (punctuation changes only, no content restructuring)

**Recommendation:** Proceed with all Priority 1 fixes immediately.
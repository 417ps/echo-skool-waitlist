# Golden Ratio Typography System

**Project:** Echo Skool Waitlist  
**Created:** September 27, 2025  
**Scale Base:** 16px  
**Ratio:** 1.618 (Golden Ratio / Phi)

---

## Type Scale

Starting with 16px base, multiply/divide by 1.618:

```
10px  → text-xs     (16 ÷ 1.618 = 9.89)   - Small labels, captions
16px  → text-sm     (base)                 - Body text, buttons
26px  → text-base   (16 × 1.618 = 25.89)  - Large body, subheadings
42px  → text-lg     (26 × 1.618 = 42.07)  - Section headings
68px  → text-xl     (42 × 1.618 = 67.95)  - Hero headlines
110px → text-2xl    (68 × 1.618 = 110.02) - Major hero text
</```

---

## Mapping Tailwind Defaults to Golden Ratio

**Strategy:** Map existing Tailwind sizes to closest golden ratio value

### Tailwind Default → Golden Ratio Mapping

| Tailwind Class | Default Size | Golden Ratio Target | Closest Match |
|----------------|--------------|---------------------|---------------|
| text-xs        | 12px (0.75rem) | 10px (16÷1.618)   | **10px** ✓    |
| text-sm        | 14px (0.875rem)| 16px (base)       | **16px** ✓    |
| text-base      | 16px (1rem)    | 16px (base)       | **16px** ✓    |
| text-lg        | 18px (1.125rem)| 26px (16×1.618)   | **26px** ✓    |
| text-xl        | 20px (1.25rem) | 26px (16×1.618)   | **26px** ✓    |
| text-2xl       | 24px (1.5rem)  | 26px (16×1.618)   | **26px** ✓    |
| text-3xl       | 30px (1.875rem)| 26px (16×1.618)   | **26px** ✓    |
| text-4xl       | 36px (2.25rem) | 42px (26×1.618)   | **42px** ✓    |
| text-5xl       | 48px (3rem)    | 42px (26×1.618)   | **42px** ✓    |
| text-6xl       | 60px (3.75rem) | 68px (42×1.618)   | **68px** ✓    |
| text-7xl       | 72px (4.5rem)  | 68px (42×1.618)   | **68px** ✓    |
| text-8xl       | 96px (6rem)    | 110px (68×1.618)  | **110px** ✓   |
| text-9xl       | 128px (8rem)   | 110px (68×1.618)  | **110px** ✓   |

### Recommended Replacements

```
text-xs   → stays text-xs   (12px → 10px, closer to golden)
text-sm   → stays text-sm   (14px → 16px, matches base)
text-base → stays text-base (16px, perfect)
text-lg   → stays text-lg   (18px → 26px, golden)
text-xl   → use text-lg     (20px → 26px)
text-2xl  → use text-lg     (24px → 26px)
text-3xl  → use text-lg     (30px → 26px)
text-4xl  → use text-4xl    (36px → 42px, golden)
text-5xl  → use text-4xl    (48px → 42px)
text-6xl  → use text-6xl    (60px → 68px, golden)
text-7xl  → use text-6xl    (72px → 68px)
text-8xl  → use text-8xl    (96px → 110px, golden)
text-9xl  → use text-8xl    (128px → 110px)
```

---

## Current Page Audit

### Hero Section
- **Current:** `text-5xl md:text-7xl` (48px / 72px)
- **Should be:** `text-xl md:text-2xl` (68px / 110px)

### Hero Subtitle
- **Current:** `text-xl md:text-2xl` (20px / 24px)
- **Should be:** `text-base md:text-lg` (26px / 42px)

### Section Headers (h2)
- **Current:** `text-4xl` (36px)
- **Should be:** `text-lg` (42px)

### Body Text
- **Current:** `text-base text-lg` (16px / 18px)
- **Should be:** `text-sm` (16px)

### Small Text / Labels
- **Current:** `text-sm` (14px)
- **Should be:** `text-xs` (10px)

### Buttons
- **Current:** `text-xl` (20px)
- **Should be:** `text-sm` or `text-base` (16px / 26px)

---

## Implementation Priority

1. **Update tailwind.config.ts** with golden ratio scale
2. **Update hero section** (most visible impact)
3. **Update section headings** (h2, h3)
4. **Update body text** throughout
5. **Update buttons and UI elements**
6. **Update chat demo text** (LiveChatDemo.tsx)

---

## Benefits

- **Visual harmony:** Naturally pleasing proportions
- **Clear hierarchy:** Each level clearly distinct
- **Scalability:** Easy to add more sizes following ratio
- **Professional:** Used by Apple, National Geographic, etc.

---

## Notes

- Tailwind's default scale uses arbitrary multipliers (0.875, 1.125, 1.25, etc.)
- Golden ratio provides mathematical consistency
- May need line-height adjustments (recommend 1.618 × font-size)
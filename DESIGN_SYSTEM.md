# KLAWN Setup Wizard — Design System

> Canonical style guide for `setup.klawn.ai`
> Derived from the klawn-landing production site to ensure full brand consistency.

---

## 1. Color Palette

### 1.1 Brand Colors

| Token            | Hex       | Usage                                      |
| ---------------- | --------- | ------------------------------------------ |
| `navy`           | `#2D3561` | Primary brand, headings, dark backgrounds  |
| `navy-light`     | `#3D4578` | Hover states, secondary dark surfaces      |
| `navy-dark`      | `#1E2249` | Deepest backgrounds, high-contrast text    |
| `copper`         | `#C4875B` | Primary accent, CTAs, active states        |
| `copper-light`   | `#D49B72` | Hover accent, secondary highlights         |
| `copper-dark`    | `#A87049` | Pressed states, darker accents             |

### 1.2 Neutral / Surface Colors

| Token            | Hex       | Usage                                      |
| ---------------- | --------- | ------------------------------------------ |
| `surface`        | `#F0F1F5` | Card backgrounds, input backgrounds        |
| `surface-alt`    | `#E8E9EF` | Alternate surface, sidebar backgrounds     |
| `border`         | `#D0D2DC` | Default borders, dividers                  |
| `white`          | `#FFFFFF` | Page background, card foreground           |

### 1.3 Text Colors

| Token            | Hex       | Usage                                      |
| ---------------- | --------- | ------------------------------------------ |
| `foreground`     | `#1E2249` | Primary text (same as navy-dark)           |
| `muted`          | `#5A5E7A` | Secondary/helper text, descriptions        |

### 1.4 Semantic Colors

| Token     | Hex       | Usage                             |
| --------- | --------- | --------------------------------- |
| `success` | `#4ade80` | Completed steps, valid inputs     |
| `error`   | `#f87171` | Errors, invalid inputs            |
| `warning` | `#facc15` | Warnings, attention indicators    |

### 1.5 Opacity Scale (on white)

Used over dark backgrounds (`navy-dark`, `navy`):

```
white/80  — primary text on dark
white/70  — secondary text on dark
white/60  — dimmed text on dark
white/50  — placeholder text on dark
white/30  — very subtle hints
white/20  — ghost borders on dark
white/10  — faint dividers on dark
white/5   — barely visible surfaces
```

### 1.6 CSS Custom Properties

```css
:root {
  --color-navy: #2D3561;
  --color-navy-light: #3D4578;
  --color-navy-dark: #1E2249;
  --color-copper: #C4875B;
  --color-copper-light: #D49B72;
  --color-copper-dark: #A87049;
  --color-surface: #F0F1F5;
  --color-surface-alt: #E8E9EF;
  --color-border: #D0D2DC;
  --color-foreground: #1E2249;
  --color-muted: #5A5E7A;
  --color-background-dark: #1A1D3A;
}
```

---

## 2. Typography

### 2.1 Font Families

| Role      | Family                                     | Fallbacks                  |
| --------- | ------------------------------------------ | -------------------------- |
| **Sans**  | `Noto Sans KR`                             | `system-ui, sans-serif`    |
| **Mono**  | `Geist Mono`                               | `ui-monospace, monospace`  |

- Import `Noto Sans KR` weights: **400, 500, 600, 700** via Google Fonts
- Import `Geist Mono` from the `geist` npm package

### 2.2 Type Scale

| Element              | Size (Tailwind)                        | Weight       | Color              |
| -------------------- | -------------------------------------- | ------------ | ------------------ |
| Page title / Hero    | `text-3xl sm:text-5xl md:text-6xl`     | `font-bold`  | `text-white`       |
| Section heading      | `text-2xl sm:text-3xl`                 | `font-bold`  | `text-foreground`  |
| Card title           | `text-lg` or `text-xl`                 | `font-bold`  | `text-foreground`  |
| Body                 | `text-base` or `text-lg`               | normal (400) | `text-foreground`  |
| Helper / description | `text-sm`                              | normal (400) | `text-muted`       |
| Label / metadata     | `text-xs`                              | `font-medium`| `text-muted`       |
| Code / terminal      | `text-xs` or `text-[10px]`             | normal (400) | `text-white/80`    |

### 2.3 Line Height

| Context          | Value                |
| ---------------- | -------------------- |
| Headlines        | `leading-[1.25]`     |
| Body / paragraph | `leading-relaxed`    |
| Default          | Tailwind default 1.5 |

---

## 3. Spacing

### 3.1 Layout Containers

```
max-w-7xl  — 1280px  — primary page container
max-w-6xl  — 1152px  — narrower content
max-w-5xl  — 1024px  — medium sections
max-w-4xl  —  896px  — compact content
max-w-3xl  —  768px  — narrow forms
max-w-2xl  —  672px  — single-column wizard
max-w-xl   —  576px  — tight column
max-w-lg   —  512px  — modal/dialog width
```

**Wizard recommended:** `max-w-3xl` for form content, `max-w-5xl` for step overview layout.

### 3.2 Section Padding

```
py-20 sm:py-24          — vertical section padding (80px / 96px)
px-4 sm:px-6            — horizontal page padding (16px / 24px)
```

### 3.3 Component Padding

```
p-5 sm:p-6              — card / panel padding (20px / 24px)
p-4                     — compact card padding (16px)
px-8 py-3               — large button (32px × 12px)
px-6 py-2.5             — medium button (24px × 10px)
px-4 py-2               — small button (16px × 8px)
px-3 py-2               — input field padding
```

### 3.4 Gap Scale

```
gap-2   —  8px   — tight inline elements
gap-3   — 12px   — icon + label
gap-4   — 16px   — card grid (mobile)
gap-6   — 24px   — card grid (desktop)
gap-8   — 32px   — section subsections
gap-12  — 48px   — major section separation
```

---

## 4. Border Radius

| Token         | Value    | Usage                               |
| ------------- | -------- | ----------------------------------- |
| `rounded-full`| pill     | Buttons, badges, pills, progress    |
| `rounded-2xl` | `1rem`   | Large cards, modal containers       |
| `rounded-xl`  | `0.75rem`| Standard cards, panels              |
| `rounded-lg`  | `0.5rem` | Inputs, code blocks, inner elements |
| `rounded-md`  | `0.375rem`| Small detail elements               |

---

## 5. Shadows & Depth

| Level        | Class         | Usage                                      |
| ------------ | ------------- | ------------------------------------------ |
| None         | —             | Default state for cards and inputs          |
| Subtle       | `shadow-sm`   | Hover elevation on cards                    |
| Medium       | `shadow-lg`   | Active/focused card state                   |
| Deep         | `shadow-2xl`  | Modal overlays, wizard step panels          |

### Backdrop Blur

```
backdrop-blur-md   — navbar, floating elements
backdrop-blur-xl   — modal overlays, glass-effect panels
```

---

## 6. Component Specifications

### 6.1 Buttons

**Primary (CTA)**
```
rounded-full bg-copper px-8 py-3
text-base font-semibold text-white
transition-colors hover:bg-copper-light
```

**Secondary (Outline)**
```
rounded-full border border-copper/30 bg-copper/10
px-6 py-2.5 text-sm font-medium text-copper
transition-colors hover:bg-copper/20
```

**Ghost**
```
rounded-full bg-transparent
px-4 py-2 text-sm font-medium text-muted
transition-colors hover:text-foreground hover:bg-surface
```

**Disabled state** — add `opacity-50 cursor-not-allowed pointer-events-none`

### 6.2 Cards / Panels

**Standard card**
```
rounded-xl border border-border bg-white p-5 sm:p-6
transition duration-200
hover:border-copper/30 hover:shadow-lg
```

**Dark card (on dark sections)**
```
rounded-xl border border-white/10 bg-white/5 backdrop-blur
p-5 sm:p-6
```

**Active / selected card** — add `border-copper ring-1 ring-copper/20`

### 6.3 Form Inputs

**Text input**
```
w-full rounded-lg border border-border bg-surface
px-3 py-2.5 text-sm text-foreground
placeholder:text-muted/60
focus:border-copper focus:outline-none focus:ring-2 focus:ring-copper/20
transition duration-200
```

**Select / dropdown**
```
w-full rounded-lg border border-border bg-surface
px-3 py-2.5 text-sm text-foreground
focus:border-copper focus:outline-none focus:ring-2 focus:ring-copper/20
appearance-none
```

**Checkbox / toggle**
```
Checked: bg-copper border-copper
Unchecked: bg-white border-border
Transition: transition duration-200
```

**Textarea**
```
w-full rounded-lg border border-border bg-surface
px-3 py-3 text-sm text-foreground font-mono
placeholder:text-muted/60
focus:border-copper focus:outline-none focus:ring-2 focus:ring-copper/20
min-h-[120px] resize-y
```

**Input label**
```
text-sm font-medium text-foreground mb-1.5
```

**Helper text**
```
text-xs text-muted mt-1
```

**Error text**
```
text-xs text-error mt-1
```

### 6.4 Badges / Pills

**Accent badge**
```
rounded-full border border-copper/30 bg-copper/10
px-3 py-1 text-xs font-medium text-copper
```

**Neutral badge**
```
rounded-full border border-border bg-surface
px-3 py-1 text-xs font-medium text-muted
```

**Success badge**
```
rounded-full border border-green-400/30 bg-green-400/10
px-3 py-1 text-xs font-medium text-green-400
```

### 6.5 Code / Terminal Blocks

```
rounded-lg bg-navy-dark
px-3 py-2 sm:px-4 sm:py-2.5
font-mono text-xs text-white/80
overflow-x-auto
```

### 6.6 Step Indicator (Wizard-specific)

**Horizontal stepper:**
```
Step circle (completed): bg-copper text-white rounded-full h-8 w-8
Step circle (active):    border-2 border-copper text-copper rounded-full h-8 w-8
Step circle (upcoming):  border border-border text-muted rounded-full h-8 w-8
Connector line (done):   h-0.5 bg-copper flex-1
Connector line (todo):   h-0.5 bg-border flex-1
Step label:              text-xs font-medium mt-2
```

### 6.7 Progress Bar

```
Track:    h-2 rounded-full bg-surface w-full
Fill:     h-2 rounded-full bg-copper transition-all duration-500
```

### 6.8 Tooltip

```
rounded-lg bg-navy-dark text-white text-xs
px-3 py-2 shadow-lg
max-w-xs
```

### 6.9 Modal / Dialog

```
Overlay:  fixed inset-0 bg-navy-dark/60 backdrop-blur-md z-50
Panel:    rounded-2xl bg-white shadow-2xl max-w-lg w-full mx-4 p-6 sm:p-8
Title:    text-xl font-bold text-foreground
```

---

## 7. Wizard Layout Structure

### 7.1 Page Layout

```
┌──────────────────────────────────────────────────┐
│  Navbar  (sticky top, bg-white/90 backdrop-blur)  │
├──────────────────────────────────────────────────┤
│                                                  │
│  ┌────────────────────────────────────────────┐  │
│  │  Step Indicator (horizontal)               │  │
│  └────────────────────────────────────────────┘  │
│                                                  │
│  ┌────────────────────────────────────────────┐  │
│  │                                            │  │
│  │  Step Content Panel                        │  │
│  │  (rounded-2xl card, shadow-2xl)            │  │
│  │                                            │  │
│  │  ┌──────────────────────────────────────┐  │  │
│  │  │  Form fields, options, config        │  │  │
│  │  └──────────────────────────────────────┘  │  │
│  │                                            │  │
│  │  ┌──────────────┐  ┌──────────────────┐   │  │
│  │  │  ← Previous  │  │  Next Step →     │   │  │
│  │  └──────────────┘  └──────────────────┘   │  │
│  └────────────────────────────────────────────┘  │
│                                                  │
│  ┌────────────────────────────────────────────┐  │
│  │  Live Preview / Output Preview             │  │
│  │  (code block, terminal style)              │  │
│  └────────────────────────────────────────────┘  │
│                                                  │
└──────────────────────────────────────────────────┘
```

### 7.2 Recommended Containers

```
Outer wrapper:    mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16
Step panel:       mx-auto max-w-3xl
Preview panel:    mx-auto max-w-3xl mt-8
```

### 7.3 Navigation Bar

```
fixed top-0 left-0 right-0 z-50
bg-white/90 backdrop-blur-md border-b border-border
h-16 px-4 sm:px-6
flex items-center justify-between
```

---

## 8. Animations & Transitions

### 8.1 Standard Transitions

| Property                    | Duration | Easing      |
| --------------------------- | -------- | ----------- |
| Color / background changes  | `200ms`  | `ease`      |
| Shadow / border changes     | `200ms`  | `ease`      |
| Transform (scale, position) | `300ms`  | `ease-out`  |
| Opacity                     | `300ms`  | `ease`      |
| Layout (width, height)      | `500ms`  | `ease-out`  |

### 8.2 Wizard Step Transitions

```
Entering step:  opacity 0 → 1, translateY(12px) → 0   duration 400ms
Leaving step:   opacity 1 → 0, translateY(0) → -12px  duration 300ms
```

### 8.3 Interaction Micro-animations

```
Button press:     scale(0.98) on active
Card hover:       translateY(-2px) + shadow-lg
Input focus:      ring expansion 0 → 2px
Checkbox toggle:  scale bounce 1 → 1.1 → 1
Progress fill:    width transition 500ms ease-out
```

### 8.4 Loading States

```
Spinner:          animate-spin h-5 w-5 border-2 border-copper border-t-transparent rounded-full
Skeleton:         animate-pulse bg-surface rounded-lg h-4
Generating zip:   progress bar fill animation with copper gradient
```

---

## 9. Iconography

### 9.1 Icon Library

**Phosphor Icons** (`@phosphor-icons/react`)

- Weight: `light` for decorative, `regular` for UI, `bold` for emphasis
- Default size: `h-5 w-5` (20px)
- Navbar/header icons: `h-5 w-5`
- Card feature icons: `h-7 w-7` or `h-8 w-8`
- Inline with text: `h-4 w-4`
- Color: inherits from parent `text-*` class

### 9.2 Common Wizard Icons

```
Steps:        ArrowRight, Check, CaretRight
Config:       GearSix, Sliders, Wrench
Files:        FileZip, FileCode, FileDotted
Download:     DownloadSimple, CloudArrowDown
Security:     ShieldCheck, Lock, Key
Database:     Database, Table
API:          Plug, Lightning, Webhooks
Success:      CheckCircle, Confetti
Warning:      Warning, WarningCircle
```

---

## 10. Gradients & Decorative Elements

### 10.1 Primary Gradients

**Aurora gradient (hero / dark sections only):**
```css
background: linear-gradient(135deg, #2D3561 0%, #C4875B 35%, #3D4578 60%, #D49B72 85%, #2D3561 100%);
```

**Copper glow (radial):**
```css
background: radial-gradient(circle, #C4875B 0%, transparent 70%);
opacity: 0.2;
```

**Text gradient:**
```css
background: linear-gradient(to right, #2D3561, #C4875B);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### 10.2 Dot Grid Pattern

```css
background-image: radial-gradient(circle, rgba(196,135,91,0.15) 1px, transparent 1px);
background-size: 24px 24px;
```

Use sparingly as a subtle texture layer behind wizard content on light backgrounds.

### 10.3 Decorative Rules

- Keep decorative elements to **dark sections only** (hero, CTA banners)
- Wizard form areas should stay **clean and minimal** — no aurora, no beams
- Subtle dot grids or faint copper glow are acceptable as background accents
- Never let decoration compete with form readability

---

## 11. Responsive Breakpoints

| Prefix | Min-width | Target                |
| ------ | --------- | --------------------- |
| (base) | 0         | Mobile phones         |
| `sm:`  | 640px     | Large phones / tablet |
| `md:`  | 768px     | Tablets               |
| `lg:`  | 1024px    | Desktop               |

### Wizard-Specific Responsive Rules

```
Step indicator:    Horizontal on sm+, collapsed/vertical on mobile
Form grid:         Single column base, 2-col on md+ for paired fields
Navigation btns:   Full width stacked on mobile, inline on sm+
Preview panel:     Below form on mobile, optionally beside on lg+
```

---

## 12. Dark vs Light Sections

The wizard should primarily use **light mode** for form content (readability is paramount).

| Section           | Background        | Text             |
| ----------------- | ----------------- | ---------------- |
| Navbar            | `bg-white/90`     | `text-foreground`|
| Form content      | `bg-white`        | `text-foreground`|
| Card panels       | `bg-white`        | `text-foreground`|
| Input fields      | `bg-surface`      | `text-foreground`|
| Code preview      | `bg-navy-dark`    | `text-white/80`  |
| Download/CTA bar  | `bg-navy-dark`    | `text-white`     |
| Footer            | `bg-navy-dark`    | `text-white/70`  |

---

## 13. Accessibility

### 13.1 Contrast Ratios

| Combination                    | Ratio  | WCAG   |
| ------------------------------ | ------ | ------ |
| `foreground` on `white`        | 12.8:1 | AAA    |
| `muted` on `white`             | 5.1:1  | AA     |
| `copper` on `white`            | 3.5:1  | AA-lg  |
| `white` on `navy-dark`         | 12.8:1 | AAA    |
| `white/80` on `navy-dark`      | 9.5:1  | AAA    |

### 13.2 Focus States

All interactive elements must have visible focus rings:
```
focus:outline-none focus:ring-2 focus:ring-copper/30 focus:border-copper
```

### 13.3 Motion

Respect `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 14. File Download / Final Step

### 14.1 Download Button

```
rounded-full bg-copper px-8 py-3
text-lg font-semibold text-white
inline-flex items-center gap-2
transition-colors hover:bg-copper-light
shadow-lg hover:shadow-xl
```

### 14.2 Generated File Preview

```
rounded-xl border border-border bg-navy-dark overflow-hidden

File tab bar:
  bg-navy px-4 py-2 flex gap-4
  text-xs font-mono text-white/60
  Active tab: text-copper border-b-2 border-copper

File content:
  px-4 py-3 font-mono text-xs text-white/80
  overflow-x-auto
  line-numbers: text-white/30 mr-4 select-none
```

---

## 15. Quick Reference — Tailwind Classes

### Page Shell
```html
<body class="bg-white font-sans text-foreground antialiased">
```

### Section
```html
<section class="py-20 sm:py-24">
  <div class="mx-auto max-w-5xl px-4 sm:px-6">
```

### Heading
```html
<h2 class="text-2xl sm:text-3xl font-bold text-foreground">
```

### Subheading
```html
<p class="text-base text-muted mt-2 max-w-2xl">
```

### Card
```html
<div class="rounded-xl border border-border bg-white p-5 sm:p-6 transition duration-200 hover:border-copper/30 hover:shadow-lg">
```

### Primary Button
```html
<button class="rounded-full bg-copper px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-copper-light">
```

### Text Input
```html
<input class="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:border-copper focus:outline-none focus:ring-2 focus:ring-copper/20 transition duration-200" />
```

### Code Block
```html
<pre class="rounded-lg bg-navy-dark px-4 py-3 font-mono text-xs text-white/80 overflow-x-auto">
```

---

*This document should be treated as the single source of truth for all UI decisions on `setup.klawn.ai`. Any deviation should be intentional and documented.*

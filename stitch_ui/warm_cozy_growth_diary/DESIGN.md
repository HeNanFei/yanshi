---
name: Warm & Cozy Growth Diary
colors:
  surface: '#faf9f8'
  surface-dim: '#dadad9'
  surface-bright: '#faf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f2'
  surface-container: '#eeeeed'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e3e2e1'
  on-surface: '#1a1c1c'
  on-surface-variant: '#49473f'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f0f0'
  outline: '#7a776e'
  outline-variant: '#cbc6bb'
  surface-tint: '#625f4f'
  primary: '#625f4f'
  on-primary: '#ffffff'
  primary-container: '#fff9e5'
  on-primary-container: '#767262'
  inverse-primary: '#ccc6b4'
  secondary: '#785656'
  on-secondary: '#ffffff'
  secondary-container: '#fdcfcf'
  on-secondary-container: '#795657'
  tertiary: '#46645f'
  on-tertiary: '#ffffff'
  tertiary-container: '#e3fff9'
  on-tertiary-container: '#5a7873'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e8e2cf'
  primary-fixed-dim: '#ccc6b4'
  on-primary-fixed: '#1e1c10'
  on-primary-fixed-variant: '#4a4739'
  secondary-fixed: '#ffdad9'
  secondary-fixed-dim: '#e8bcbc'
  on-secondary-fixed: '#2d1415'
  on-secondary-fixed-variant: '#5e3e3f'
  tertiary-fixed: '#c8e9e2'
  tertiary-fixed-dim: '#adcdc7'
  on-tertiary-fixed: '#01201c'
  on-tertiary-fixed-variant: '#2f4c47'
  background: '#faf9f8'
  on-background: '#1a1c1c'
  surface-variant: '#e3e2e1'
  sky-blue: '#D1E9F6'
  text-main: '#5C5346'
  text-muted: '#A39788'
  warm-border: '#F2E8D5'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
  caption:
    fontFamily: Be Vietnam Pro
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  container-max: 800px
  gutter-mobile: 20px
---

## Brand & Style

The design system is built upon a "Warm and Cozy" narrative, specifically tailored to the nurturing and emotional nature of parenting. It evokes feelings of safety, gentleness, and joy, mimicking the soft textures and colors of a modern nursery.

The visual style is a blend of **Minimalism** and **Tactile Softness**. It utilizes extreme roundedness and ample whitespace to create a "breathable" and calm environment, ensuring parents feel relaxed rather than overwhelmed by data. Depth is created through soft, ambient shadows rather than lines, giving the interface a plush, physical quality reminiscent of a storybook.

**Key Brand Pillars:**
- **Nurturing:** Soft macaron tones and organic shapes.
- **Approachable:** Friendly rounded typography and hand-drawn icon aesthetics.
- **Clear:** High readability and intentional spacing to celebrate every milestone.

## Colors

The palette is inspired by "Macaron" tones—desaturated, warm, and creamy. 

- **Primary (Creamy Yellow):** Used for large surfaces and page backgrounds to create a sunny, warm foundation.
- **Secondary (Peach Pink):** The "emotional" accent, used for heart icons, milestones, and "Mom-related" content.
- **Tertiary (Mint Green):** Used for growth indicators, health stats, and "Baby-related" success states.
- **Sky Blue:** Reserved for "Dad-related" content and secondary interactive elements like tags.
- **Neutral:** A very soft off-white used for cards to provide subtle contrast against the primary background.

Text is never pure black; it uses **Text-Main (#5C5346)**, a deep warm charcoal, to maintain the soft aesthetic while ensuring high legibility.

## Typography

The system uses **Plus Jakarta Sans** for headings because of its friendly, geometric, and inherently rounded letterforms. **Be Vietnam Pro** is used for body text and labels to maintain a contemporary, approachable feel with high readability in dense diary entries.

- **Weight Strategy:** Use Bold (700) for names and numbers to create a clear hierarchy. Use Regular (400) with a generous line height (1.6) for diary body text to evoke the feel of a handwritten journal.
- **Scale:** On mobile, display sizes are slightly reduced to ensure long Chinese strings (common in names/titles) do not break awkwardly.

## Layout & Spacing

This design system uses a **Fluid Grid** with expanded margins to prioritize a sense of "calm." 

- **The 8px Rhythm:** All spacing and component heights should be multiples of 4px, with 8px and 16px being the primary increments for internal component padding.
- **Breathable Margins:** Mobile side margins are set to a generous 20px (gutter-mobile) to ensure content feels framed and precious.
- **Card-Based Layout:** Content is grouped into highly rounded containers. On mobile, these stack vertically with 16px gaps. On desktop, cards reflow into a 2 or 3-column grid depending on content type (Milestones vs. Diary Entries).

## Elevation & Depth

To maintain the "Warm & Cozy" theme, elevation is achieved through **Tonal Layers** and **Ambient Shadows**.

- **Shadow Character:** Shadows must be extremely soft and diffused. Use a large blur radius (20px+) with low opacity (5-10%). Shadow colors should be slightly tinted with the brand primary color (#FFF9E5) or secondary color (#FFD1D1) rather than neutral gray, making cards appear to glow softly against the background.
- **Hierarchy:** 
  - **Level 0 (Background):** Primary Creamy Yellow.
  - **Level 1 (Cards):** Pure White or Soft Neutral surfaces with a faint ambient shadow.
  - **Level 2 (Interactive/FAB):** Floating elements with a slightly tighter, more saturated tinted shadow to indicate "pressability."
- **No Harsh Borders:** Avoid 1px solid borders. If a separator is required, use a 2px stroke in a slightly darker "Warm Border" tone.

## Shapes

The shape language is defined by extreme roundedness. 

- **Base Corner Radius:** 24px for all primary containers (Diary cards, Hero sections).
- **Secondary Elements:** 16px for smaller items like input fields or action buttons.
- **Pill Shapes:** Labels, tags, and small badges must always be full-pill (999px).
- **Organic Accents:** Background decorative elements should use irregular, hand-drawn circle blobs to reinforce the "organic" feel of baby growth.

## Components

- **Buttons:** Use high rounded corners (16px to pill). Primary buttons use a soft gradient from Peach Pink to a deeper Rose tint. Secondary buttons use the Sky Blue or Mint Green.
- **Cards:** The "Diary Card" is the heart of the system. It features 24px corners, 20px internal padding, and a soft tinted shadow. Title text is prominent, and images have 12px rounded corners.
- **Chips & Tags:** Small, pill-shaped markers for categories (e.g., "Vaccination," "First Word"). They use the Tertiary and Sky Blue colors at 20% opacity with 100% opacity text for high legibility and a "macaron" feel.
- **Input Fields:** Soft Creamy Yellow background with 16px rounded corners and a subtle inset shadow to appear "pillowy."
- **Icons:** Use hand-drawn style iconography or soft 3D "clay-style" illustrations. Avoid thin-line, sharp technical icons. 
- **Floating Action Button (FAB):** A large circular button (56px) with a prominent soft shadow, containing the "Add Diary" (+) icon in a hand-drawn style.
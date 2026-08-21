# Nirman Color System & Palette Reference

A comprehensive, practical light and dark color system extracted from the Nirman theme architecture. Designed for seamless integration into web apps, Flutter, Tailwind CSS, or custom design systems.

---

## System Overview

| Metric | Value | Description |
| :--- | :--- | :--- |
| **Theme Values** | `46` | Total light & dark color tokens |
| **Semantic Pairs** | `23` | Light/Dark dual-mode pairs for UI components |
| **Protected Accents** | `9` | Brand & payment provider vector artwork colors |
| **Source Scope** | `lib/app/theme/nirman_colors.dart` + `assets/**/*.svg` | Centralized theme extension source |

---

## 1. Foundations & Interaction Palette (12 Pairs)

| Token Name | Description / Usage | Light Mode | Dark Mode |
| :--- | :--- | :---: | :---: |
| **Primary text** | Headings, key figures, primary copy | `#1A1918` | `#FAF8F6` |
| **Secondary stone** | Body copy, descriptions, sub-labels | `#3E3833` | `#D1CAC2` |
| **Tertiary ash** | Captions, timestamps, helper text | `#5C544D` | `#A89F95` |
| **Disabled fog** | Disabled and ghost states | `#A89F95` | `#5C544D` |
| **Signature terracotta** | Brand accent, CTA, active state | `#A85929` | `#F3AC6E` |
| **Terracotta tint** | Soft highlights, badges, icon wells | `#FBEDDD` | `#3D2B1C` |
| **Brand peach** | Hero and brand moments | `#FFCC99` | `#FFCC99` |
| **Primary action ink** | Primary button and action foreground | `#2B2A29` | `#FAF8F6` |
| **Focus ring ember** | Keyboard and input focus | `#E58A47` | `#FFCC99` |
| **Background canvas** | App frame and page background | `#FAF8F6` | `#1A1918` |
| **Surface paper** | Cards, panels, app bars | `#FFFFFF` | `#232220` |
| **Surface raised / lifted** | Modals, popovers, KPI tiles | `#FFFFFF` | `#2D2B29` |

---

## 2. Surfaces, Borders & Status Palette (11 Pairs)

| Token Name | Description / Usage | Light Mode | Dark Mode |
| :--- | :--- | :---: | :---: |
| **Surface sunken / well** | Inputs and recessed surfaces | `#F2EFEC` | `#141312` |
| **Border hairline** | Dividers and subtle borders | `#E6E1DC` | `#3E3833` |
| **Border strong** | Emphasized and outline borders | `#D1CAC2` | `#5C544D` |
| **Success sage** | Positive and completed states | `#4A7C59` | `#B5D4BE` |
| **Success soft** | Success background | `#E8F0EA` | `#1F2D24` |
| **Warning amber** | At-risk and due-soon states | `#E89F2B` | `#F4C775` |
| **Warning soft** | Warning background | `#FBEFD5` | `#2E2418` |
| **Danger brick** | Error and destructive states | `#C44536` | `#EBA39B` |
| **Danger soft** | Danger background | `#F8E0DC` | `#2E1B19` |
| **Info steel** | Informational and neutral notices | `#5B7080` | `#A8B8C5` |
| **Info soft** | Information background | `#E6EAEE` | `#1F262C` |

---

## 3. Protected Brand & Vector Accents (9 Colors)

> **Note**: These colors appear inside vector artwork and payment provider marks. **Do not recolor them for dark mode.**

| Name | Hex Code | Category / Usage |
| :--- | :---: | :--- |
| **Google Pay blue** | `#297AEC` | Payment-provider artwork |
| **Google Pay red** | `#EA4335` | Payment-provider artwork |
| **Google Pay yellow** | `#FDBD00` | Payment-provider artwork |
| **Google Pay green** | `#2DA94F` | Payment-provider artwork |
| **PhonePe purple** | `#5F259F` | Payment-provider artwork |
| **Paytm navy** | `#233266` | Payment-provider artwork |
| **Paytm cyan** | `#54C1F0` | Payment-provider artwork |
| **Illustration slate** | `#374957` | Auth/project check illustration |
| **Divider blue-gray** | `#6E7585` | Phone auth divider artwork |

---

## 4. Developer Implementation Guide

### A. CSS Custom Properties (`index.css` / Global Styles)

```css
:root {
  /* Foundations & Interaction */
  --color-text-primary: #1A1918;
  --color-text-secondary: #3E3833;
  --color-text-tertiary: #5C544D;
  --color-text-disabled: #A89F95;
  --color-brand-terracotta: #A85929;
  --color-brand-terracotta-tint: #FBEDDD;
  --color-brand-peach: #FFCC99;
  --color-action-ink: #2B2A29;
  --color-focus-ember: #E58A47;
  --color-bg-canvas: #FAF8F6;
  --color-surface-paper: #FFFFFF;
  --color-surface-raised: #FFFFFF;

  /* Surfaces & Borders */
  --color-surface-sunken: #F2EFEC;
  --color-border-hairline: #E6E1DC;
  --color-border-strong: #D1CAC2;

  /* Status Colors */
  --color-success-sage: #4A7C59;
  --color-success-soft: #E8F0EA;
  --color-warning-amber: #E89F2B;
  --color-warning-soft: #FBEFD5;
  --color-danger-brick: #C44536;
  --color-danger-soft: #F8E0DC;
  --color-info-steel: #5B7080;
  --color-info-soft: #E6EAEE;
}

.dark {
  /* Foundations & Interaction */
  --color-text-primary: #FAF8F6;
  --color-text-secondary: #D1CAC2;
  --color-text-tertiary: #A89F95;
  --color-text-disabled: #5C544D;
  --color-brand-terracotta: #F3AC6E;
  --color-brand-terracotta-tint: #3D2B1C;
  --color-brand-peach: #FFCC99;
  --color-action-ink: #FAF8F6;
  --color-focus-ember: #FFCC99;
  --color-bg-canvas: #1A1918;
  --color-surface-paper: #232220;
  --color-surface-raised: #2D2B29;

  /* Surfaces & Borders */
  --color-surface-sunken: #141312;
  --color-border-hairline: #3E3833;
  --color-border-strong: #5C544D;

  /* Status Colors */
  --color-success-sage: #B5D4BE;
  --color-success-soft: #1F2D24;
  --color-warning-amber: #F4C775;
  --color-warning-soft: #2E2418;
  --color-danger-brick: #EBA39B;
  --color-danger-soft: #2E1B19;
  --color-info-steel: #A8B8C5;
  --color-info-soft: #1F262C;
}
```

### B. Tailwind CSS / JavaScript Tokens Export

```javascript
// nirman-colors.js
export const nirmanColors = {
  text: {
    primary: 'var(--color-text-primary)',
    secondary: 'var(--color-text-secondary)',
    tertiary: 'var(--color-text-tertiary)',
    disabled: 'var(--color-text-disabled)',
  },
  brand: {
    terracotta: 'var(--color-brand-terracotta)',
    terracottaTint: 'var(--color-brand-terracotta-tint)',
    peach: '#FFCC99', // Constant across light and dark
  },
  bg: {
    canvas: 'var(--color-bg-canvas)',
    paper: 'var(--color-surface-paper)',
    raised: 'var(--color-surface-raised)',
    sunken: 'var(--color-surface-sunken)',
  },
  border: {
    hairline: 'var(--color-border-hairline)',
    strong: 'var(--color-border-strong)',
  },
  status: {
    success: { main: 'var(--color-success-sage)', soft: 'var(--color-success-soft)' },
    warning: { main: 'var(--color-warning-amber)', soft: 'var(--color-warning-soft)' },
    danger: { main: 'var(--color-danger-brick)', soft: 'var(--color-danger-soft)' },
    info: { main: 'var(--color-info-steel)', soft: 'var(--color-info-soft)' },
  },
  protected: {
    gpayBlue: '#297AEC',
    gpayRed: '#EA4335',
    gpayYellow: '#FDBD00',
    gpayGreen: '#2DA94F',
    phonePePurple: '#5F259F',
    paytmNavy: '#233266',
    paytmCyan: '#54C1F0',
    illustrationSlate: '#374957',
    dividerBlueGray: '#6E7585',
  }
};
```

---

## 5. Design & Usage Principles

1. **Semantic Naming Strategy**: Always reference semantic token names (e.g., `brand.terracotta`, `status.danger.main`) in product UI rather than raw hex values.
2. **Status Background Pairing**: Always pair status foreground colors with their corresponding soft backgrounds (e.g., `Success sage` text on `Success soft` background).
3. **Brand Peach Consistency**: `Brand peach` (`#FFCC99`) remains constant across both light and dark themes.
4. **Input Focus**: Use `Focus ring ember` for input borders, outlines, and keyboard focus states.
5. **Accessibility & Contrast**: Validate foreground/background contrast ratios in application context; do not rely on background color alone.

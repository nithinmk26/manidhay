# Manidhay Business Services — Modern Civil Engineering Website

[![Status](https://img.shields.io/badge/Status-Active%20%26%20Production%20Ready-success)](#)
[![Design System](https://img.shields.io/badge/Design%20System-Nirman%20Palette-orange)](#)
[![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20Vanilla%20CSS%20%7C%20Modern%20JS-blue)](#)
[![Structural Projects](https://img.shields.io/badge/Structural%20Projects-350%2B%20Pan--India-A85929)](#)

> **Manidhay Business Services** is a premier civil engineering practice providing end-to-end solutions — from architectural planning and structural engineering (over 350+ completed designs across India) to turnkey construction, precast aerated concrete walls, government approvals, and property valuations.

---

## 🏗️ Overview & Company Identity

- **Founded**: 2018 in Chikmagalur, Karnataka (Coffee capital of India).
- **Heritage**: Backed by a **3-decade family legacy** in the construction industry.
- **Head Office**: Raghavendra Swamy Math Building, Basavanahalli, Chikmagalur, Karnataka – 577101.
- **Branch Office**: Bangalore, Karnataka (Serving clients across India & globally via structured digital reviews).
- **Core Team**: 8 specialized engineering and administrative leaders (Structural Head, Administrator, Electrical & Plumbing Managers, Architect, Financial Advisor, Site Engineers).
- **Contact**: `+91 9986 470 846` | `info@manidhay.com`

---

## 🎨 Design System: Nirman Color Palette

The entire website is built on the **Nirman Color System**, combining warm Indian earth tones with architectural precision:

| Token Name | Value | Usage |
| :--- | :--- | :--- |
| **Canvas / Background** | `#FAF8F6` | Warm off-white page canvas |
| **Surface Paper** | `#FFFFFF` | Elevated card & container backgrounds |
| **Surface Sunken** | `#F2EFEC` | Recessed input fields, code blocks, technical boxes |
| **Surface Accent** | `#FBEDDD` | Light terracotta tint for callouts & metrics |
| **Brand Terracotta** | `#A85929` | Primary CTA buttons, key highlights, active tags |
| **Brand Peach** | `#FFCC99` | Badges, subtle accents, and tag outlines |
| **Primary Text (Ink)** | `#1A1918` | High-contrast headline typography |
| **Secondary Text (Stone)**| `#3E3833` | Clean, readable narrative body text |
| **Tertiary Text (Ash)** | `#5C544D` | Captions, metadata, breadcrumb links |
| **Hairline Border** | `#E6E1DC` | Subtle 1px card separators |
| **Strong Border** | `#D1CAC2` | Structural outlines and blueprint grids |

### Typography
- **Display Headings**: `Plus Jakarta Sans` (800 / 700 / 600 weight) with tight architectural character tracking.
- **Body Text**: `Inter` (400 / 500 / 600 weight) for crisp legibility across all screen sizes.
- **Motifs**: Blueprint grid linework, technical badges, and tactile card elevations.

---

## ⚡ Core Features & Interactive Capabilities

1. **Interactive Consultation Request Modal**:
   - Quick-access popup modal on all pages with structured discipline selection (Structural, Architecture, Turnkey, Precast, PMC, Approvals, Loans).
   - Client-side validation with non-intrusive toast notifications.
2. **Dynamic Portfolio Filtering**:
   - Instant client-side filtering across categories: *Building Construction*, *Precast Concrete Walls*, *Resorts & Homestays*, and *Institutional*.
3. **Animated Credibility Counters**:
   - `IntersectionObserver`-powered stat counters highlighting `350+` structural designs, `30+` years legacy, and `7` integrated engineering divisions.
4. **Mobile Navigation Drawer**:
   - Slide-out mobile menu with full site navigation and touch-optimized touch targets.
5. **SEO & Performance Optimization**:
   - Semantic HTML5 structure with single `<h1>` hierarchy per page.
   - Open Graph tags, canonical URLs, meta descriptions, and Schema.org `Organization` JSON-LD data.
   - Zero bulky framework overhead — ultra-fast load speed and 100% responsiveness.

---

## 📂 Site Map & Directory Structure

```text
├── index.html                                 # Redesigned Homepage (Hero, Services, Portfolio, Process, Sir MV Tribute)
├── about/
│   └── index.html                             # About Us, 3-Decade Heritage & 8 Core Team Member Profiles
├── services/
│   ├── index.html                             # 7 Civil Engineering Service Divisions Directory
│   └── structural-design-service/
│       └── index.html                         # 350+ Structural Design Projects Showcase (CCD, Rebus, Hospitals, Banks)
├── projects/
│   ├── index.html                             # Masonry Filterable Portfolio Directory
│   ├── aura-homestay-chikmagalur/             # Turnkey Hillside Homestay Case Study
│   ├── mahalakshmi-temple-chikmagalur/        # Traditional Temple Architecture & RCC Case Study
│   ├── vistara-county-resort-chikmagalur/     # Luxury Eco-Resort Case Study
│   ├── ready-made-aerated-concrete-wall-sai-angels-school-project-chikmagalur/
│   ├── ready-made-aerated-concrete-wall-vcnr-group-nelmangala-bangalore/
│   ├── ready-made-aerated-concrete-wall-godown-and-labour-shed-for-mr-p-k-ganapathy-madapura-somwarpet/
│   ├── ready-made-aerated-concrete-wall-hosur-project/
│   └── st-marys-school-project-chikmagalur/
├── contact/
│   └── index.html                             # Technical RFQ Form & Dual Office Info (Chikmagalur HQ & Bangalore Branch)
├── blog/
│   └── index.html                             # Technical Insights & "How to Hire a Structural Designer" Guide
├── podcasts/
│   └── index.html                             # "Civil Engineering Made Simple" Audio Series Hub
├── css/
│   └── manidhay-main.css                      # Core Nirman Design System Stylesheet
├── js/
│   └── manidhay-main.js                       # Interactive Engine (Header, Modal, Filters, Counters, Toasts)
├── package.json                               # Local development scripts configuration
└── README.md                                  # Documentation
```

---

## 🚀 Local Development & Preview

### Method 1: Using Node / npm
```bash
# Start local development server on port 8080
npm start
# or
npm run dev
```

### Method 2: Using Python
```bash
python -m http.server 8080
```

Once started, open your browser and navigate to:
```text
http://localhost:8080
```

---

## 🚢 Deployment Guide

Because the application is built with vanilla HTML5, CSS3, and JavaScript, it has zero build dependencies and can be deployed instantly:

### 1. GitHub Pages
1. Go to repository **Settings** $\rightarrow$ **Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Choose branch `master` (or `main`) and folder `/ (root)`, then click **Save**.

### 2. Vercel / Netlify
1. Connect your GitHub repository (`nithinmk26/manidhay`).
2. Leave Build Command empty and set Output Directory to `./` (root).
3. Click **Deploy**.

---

## 📄 License & Ownership

© 2026 **Manidhay Business Services**. All rights reserved.  
*One Stop Solution for all Civil Engineering Services.*

# Paystack Clone - Premium Fintech Interface

A high-performance, visually stunning landing page clone of Paystack, built with Next.js 15 and a focus on rich aesthetics, smooth animations, and modular architecture.

## 🚀 Built With

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Emotion JS](https://emotion.sh/) (Styled Components & Keyframes)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Components**: [Radix UI](https://www.radix-ui.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## ✨ Key Features

- **Premium Design System**: Implements a custom design system with `Boing` and `Graphik` typography, vibrant color palettes, and balanced whitespace.
- **Responsive Navigation**:
  - Dynamic top navigation with smooth interactions.
  - Mobile-first footer featuring a custom-built accordion for link groups.
- **Interactive Map Section**: A custom SVG world map with floating animations and interactive pointers for global presence.
- **Modular Hero Section**: Highly organized component structure with staggered entry animations for a seamless user experience.
- **High-Performance Image Optimization**: Leverages `next/image` for responsive, fast-loading assets.

## 📂 Project Structure

```text
├── app/
│   ├── _components/         # Feature-specific modular components
│   │   ├── footer/          # Responsive footer with accordion logic
│   │   ├── hero-section/    # Reusable hero layouts & animation files
│   │   └── features/        # Section-based feature showcases
│   ├── globals.css          # Tailwind CSS layer configurations
│   └── layout.tsx           # Global font loading and layout assembly
├── components/
│   ├── ui/                  # Reusable atom-level UI components (shadcn-inspired)
│   └── map-svg.tsx          # Custom interactive world map SVG
├── public/
│   └── assets/              # Premium fonts and static assets
└── package.json             # Core dependencies and scripts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+
- npm / yarn / pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone [repository-url]
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Design Philosophy

This project prioritizes **Visual Excellence**. It avoids generic layouts in favor of curated gradients, micro-animations, and custom SVG work. The typography (Boing for headings, Graphik for body) is tuned for maximum readability and a premium fintech feel.

## 📝 License

This project is for educational purposes as a demonstration of modern web engineering and design capabilities.

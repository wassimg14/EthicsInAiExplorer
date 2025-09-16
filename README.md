# Ethics-in-AI Explorer

A website that transforms AI use case descriptions into comprehensive risk assessments, actionable mitigations, and real-world case studies. Powered by OpenAI's GPT-4 for intelligent analysis.

## What This Website Does

The Ethics-in-AI Explorer is designed to help developers, product managers, and teams building AI-powered applications identify potential ethical and safety risks before they become real problems. 

When you describe your AI use case on the website, our system analyzes it using advanced AI to spot potential issues across seven key risk categories: bias and fairness problems, potential misuse, privacy concerns, user safety issues, compliance violations, confusing user experiences, and reliability problems like AI hallucinations.

The tool doesn't just point out problems - it gives you concrete, actionable steps to fix them. You'll get specific recommendations like "implement bias testing with diverse datasets" or "add clear disclaimers about AI-generated content" that you can actually implement in your project.

We also generate realistic case studies showing how similar issues have played out in the real world and how proper precautions could have prevented them. This helps you understand not just what could go wrong, but why it matters and how to prevent it.

The entire process takes just a few minutes, but it can save you months of headaches and potentially serious reputation or legal issues down the road. Think of it as a safety check for your AI project before you launch it to the world.

## Features

- **Intelligent Risk Assessment**: Identifies 7 key risk categories (bias, misuse, privacy, safety, compliance, UX, reliability)
- **Actionable Mitigations**: Provides concrete, implementable solutions for each identified risk
- **Visual Severity Scoring**: Dynamic severity gauge with color-coded risk levels (0-100)
- **Case Study Generation**: Creates realistic scenarios showing potential incidents and prevention strategies
- **Beautiful Modern UI**: Glass-morphism design with gradients, animations, and micro-interactions
- **Privacy-First**: Client-side PII redaction with secure API processing
- **Real-time Analysis**: Powered by OpenAI GPT-4 for accurate, contextual insights

## Getting Started

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript checks

## Architecture

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS with custom design system
- **AI Provider**: OpenAI GPT-4
- **Validation**: Zod schemas
- **Icons**: Lucide React

### Project Structure
```
├── app/
│   ├── api/analyze/          # OpenAI API integration
│   ├── globals.css           # Global styles & design system
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── AnalyzeForm.tsx      # Main input form
│   ├── ResultCard.tsx       # Analysis results display
│   ├── SeverityGauge.tsx    # Visual severity meter
│   ├── RiskBadges.tsx       # Risk category badges
│   ├── MitigationList.tsx   # Actionable mitigation checklist
│   ├── CaseStudy.tsx        # Generated case study
│   ├── CopyButton.tsx       # Copy-to-clipboard functionality
│   └── Header.tsx           # App header
└── lib/
    ├── schema.ts            # Zod validation schemas
    ├── prompts.ts           # AI prompt engineering
    ├── llm.ts              # OpenAI API client
    ├── scoring.ts          # Severity calculation
    ├── sanitization.ts     # PII redaction
    └── riskTaxonomy.ts     # Risk categorization
```

## Design System

The application features a modern design system with:

- **Glass-morphism effects** with backdrop blur and transparency
- **Gradient color schemes** for visual hierarchy and engagement  
- **Smooth animations** and micro-interactions
- **Responsive layout** optimized for all screen sizes
- **Accessibility-first** approach with proper contrast and focus states

### Color Palette
- Primary: Indigo to Purple gradient
- Secondary: Pink to Rose gradient  
- Accent: Cyan to Blue gradient
- Success: Green to Emerald gradient
- Warning: Yellow to Orange gradient
- Danger: Red gradient

## Privacy & Security

- **Client-side PII redaction** removes emails and sensitive numbers
- **Secure API processing** through OpenAI with enterprise encryption
- **No data storage** - prompts and results are not persisted
- **Transparent data handling** with clear privacy notices

## AI Integration

The application uses OpenAI's GPT-4 model with carefully engineered prompts to:

1. **Analyze use cases** for potential ethical and safety risks
2. **Generate specific mitigations** tailored to each risk category
3. **Calculate severity scores** based on likelihood and impact
4. **Create realistic case studies** showing prevention strategies

### Risk Categories
- **Bias & Fairness**: Discrimination and unfair treatment
- **Misuse/Abuse**: Malicious or harmful usage
- **Privacy & Data Leakage**: Personal information exposure
- **User Safety & Wellbeing**: Physical or psychological harm
- **Compliance & IP**: Legal and regulatory violations
- **Deceptive/Confusing UX**: Misleading user interfaces
- **Reliability & Hallucination**: Incorrect or fabricated outputs

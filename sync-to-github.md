# Sync to GitHub Instructions

## Files to copy to your GitHub repo:

### Root files:
- `package.json`
- `next.config.js` 
- `tailwind.config.js`
- `postcss.config.js`
- `tsconfig.json`
- `eslint.config.js`
- `README.md`
- `.env.example`

### App directory:
- `app/layout.tsx`
- `app/page.tsx`
- `app/globals.css`

### Components directory:
- `components/AnalyzeForm.tsx`
- `components/ResultCard.tsx`
- `components/Header.tsx`
- `components/CaseStudy.tsx`
- `components/CopyButton.tsx`
- `components/RiskBadges.tsx`
- `components/SeverityGauge.tsx`
- `components/MitigationList.tsx`

### Lib directory:
- `lib/schema.ts`
- `lib/prompts.ts`
- `lib/scoring.ts`
- `lib/riskTaxonomy.ts`
- `lib/sanitization.ts`

## Steps to sync:

1. **Create a new repo on GitHub**
2. **Clone it locally:**
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

3. **Copy all the files above** into your local repo

4. **Create a .env file** with your OpenAI API key:
   ```
   OPENAI_API_KEY=your-actual-api-key-here
   ```

5. **Install dependencies:**
   ```bash
   npm install
   ```

6. **Test locally:**
   ```bash
   npm run dev
   ```

7. **Commit and push:**
   ```bash
   git add .
   git commit -m "Initial commit: Ethics-in-AI Explorer"
   git push origin main
   ```

## Deploy to Vercel/Netlify:
- Connect your GitHub repo to Vercel or Netlify
- Add your `OPENAI_API_KEY` as an environment variable
- Deploy!

Your app will be live and working with AI risk analysis.
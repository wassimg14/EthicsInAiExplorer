"use client";
import { useState } from "react";
import type { Analysis } from "@/lib/schema";
import { redactPII } from "@/lib/sanitization";
import ResultCard from "./ResultCard";
import { Analysis as AnalysisSchema } from "@/lib/schema";

async function analyzeWithOpenAI(scenario: string): Promise<Analysis> {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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'
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: `You are an AI risk reviewer for software products using large language models or AI technologies.

CRITICAL: You ONLY analyze scenarios that involve AI, machine learning, automated decision-making, or AI-powered systems. 

Before analyzing anything, determine if the scenario involves AI technology:
- Does it mention AI, ML, algorithms, automated systems, chatbots, recommendation engines, computer vision, NLP, or similar?
- Does it involve automated decision-making or intelligent systems?
- Is it about building, deploying, or using AI-powered features?

If the scenario does NOT clearly involve AI technology, respond with exactly: "NOT_AI_RELATED"

If the scenario DOES involve AI, identify ethics & safety risks and concrete mitigations.
Be practical, specific, and concise. Output JSON only and match this schema:

{
  "severity": number (0..100),
  "risks": [
    {
      "id": string,
      "title": string,
      "explanation": string,
      "likelihood": number (0..1),
      "impact": number (0..1),
      "mitigations": string[]
    }
  ],
  "caseStudy": string
}

Notes:
- Choose 3–7 relevant risks.
- likelihood×impact should inform severity; cap severity at 100.
- Mitigations should be concrete (settings, policies, UX patterns, evals).
- Keep caseStudy to ~4–6 sentences.`
        },
        {
          role: 'user',
          content: `APP SCENARIO
${scenario}

TASKS
1) List relevant risks with a one-paragraph explanation each.
2) Give 2–4 concrete mitigations per risk.
3) Compute a severity score (0–100) from top risks (likelihood×impact).
4) Provide a short case study (4–6 sentences) of a plausible incident and averted outcome.

Return JSON only. Do not include any non-JSON commentary.`
        }
      ],
      temperature: 0.3,
      max_tokens: 1500
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenAI API error: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  const content = data.choices[0]?.message?.content;
  
  if (!content) {
    throw new Error("No response from OpenAI");
  }

  // Check if the scenario doesn't relate to AI
  if (content.trim() === "NOT_AI_RELATED" || content.includes("NOT_AI_RELATED")) {
    throw new Error("Sorry, I only answer ethics in AI questions");
  }

  // Parse JSON response
  const cleaned = content.trim().replace(/^```json\s*/i, "").replace(/```$/i, "");
  const parsed = JSON.parse(cleaned);

  // Validate with Zod
  return AnalysisSchema.parse(parsed);
}

export default function AnalyzeForm() {
  const [scenario, setScenario] = useState("");
  const [result, setResult] = useState<Analysis | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isInformationalError, setIsInformationalError] = useState(false);
  
  const disabled = !scenario.trim() || loading;

  async function onAnalyze(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setIsInformationalError(false);
    
    try {
      const input = redactPII(scenario.trim());
      const analysis = await analyzeWithOpenAI(input);
      setResult(analysis);
    } catch (err) {
      console.error("Analysis error:", err);
      if (err instanceof Error && err.message.includes("Sorry, I only answer ethics in AI questions")) {
        setError("Sorry, I only answer ethics in AI questions.");
        setIsInformationalError(true);
      } else if (err instanceof Error) {
        setError(`Analysis failed: ${err.message}`);
      } else {
        setError("Analysis failed. Please try again.");
      }
      setIsInformationalError(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <form onSubmit={onAnalyze} className="space-y-6">
        <div className="space-y-3">
          <label className="text-lg font-semibold text-white">
            Describe your AI use case
          </label>
          <div className="relative">
            <textarea
              className="input-field h-48 resize-none text-base leading-relaxed"
              placeholder="Example: We're building a chatbot for customer service that will handle sensitive customer data and make recommendations about financial products. The bot will analyze customer messages and automatically route them to appropriate departments while suggesting relevant products based on their inquiry history..."
              value={scenario}
              onChange={e => setScenario(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-white mb-1">Pro Tips for Better Analysis</p>
            <p className="text-xs text-slate-200 leading-relaxed">
              Describe AI/ML systems, automated decision-making, or AI-powered applications. 
              Include target demographics, data sensitivity, potential failure modes, and decision-making processes.
            </p>
          </div>
          
          <button
            className="btn-primary text-base px-8 py-3"
            disabled={disabled}
            type="submit"
          >
            {loading ? (
              <span>Analyzing...</span>
            ) : (
              <span>Analyze Risks</span>
            )}
          </button>
        </div>
      </form>
      
      {error && (
        <div className={`card border-l-4 ${
          isInformationalError 
            ? 'border-l-blue-500 bg-blue-900/20' 
            : 'border-l-red-500 bg-red-900/20'
        }`}>
          <div>
            <h4 className={`font-semibold ${
              isInformationalError ? 'text-blue-300' : 'text-red-300'
            }`}>
              {isInformationalError ? 'Scenario Not Applicable' : 'Analysis Failed'}
            </h4>
            <p className={`text-sm mt-1 ${
              isInformationalError ? 'text-blue-200' : 'text-red-200'
            }`}>
              {error}
            </p>
          </div>
        </div>
      )}
      
      {result && <ResultCard data={result} />}
    </div>
  );
}
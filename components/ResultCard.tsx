import type { Analysis } from "@/lib/schema";
import RiskBadges from "./RiskBadges";
import SeverityGauge from "./SeverityGauge";
import MitigationList from "./MitigationList";
import CaseStudy from "./CaseStudy";

export default function ResultCard({ data }: { data: Analysis }) {
  return (
    <section className="space-y-12 animate-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-white">Risk Assessment Complete</h2>
        <p className="text-slate-300 text-xl leading-relaxed max-w-3xl mx-auto">
          AI-powered analysis of your use case
        </p>
      </div>
      
      {/* Severity Score and Identified Risks - Horizontal Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Severity Score */}
        <div className="card">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Severity Score</h3>
          <div className="text-center space-y-4">
            <div className="text-6xl font-bold text-white">
              {data.severity} <span className="text-xl text-slate-300">out of 100</span>
            </div>
          </div>
        </div>
        
        {/* Identified Risks */}
        <div className="card">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Identified Risks</h3>
          <div className="space-y-4">
            {data.risks.map(risk => (
              <div key={risk.id} className="space-y-2">
                <h4 className="text-lg font-semibold text-white">{risk.title}</h4>
                <div className="text-sm text-slate-300">
                  Risk Score: {Math.round(risk.likelihood * risk.impact * 100)}% | 
                  Likelihood: {Math.round(risk.likelihood * 100)}% | 
                  Impact: {Math.round(risk.impact * 100)}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Risk Details - Direct Display */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white text-center">Risk Details</h3>
        <div className="space-y-6">
          {data.risks.map(risk => (
            <div key={risk.id} className="card">
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-white mb-2">{risk.title}</h4>
                <div className="flex items-center gap-6 text-sm text-slate-300 mb-4">
                  <span>Risk Score: {Math.round(risk.likelihood * risk.impact * 100)}% </span>
                  <span>Likelihood: {Math.round(risk.likelihood * 100)}% </span>
                  <span>Impact: {Math.round(risk.impact * 100)}% </span>
                </div>
              </div>
              <p className="text-slate-200 leading-relaxed text-base">{risk.explanation}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Concrete Solutions */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white text-center">Concrete Solutions</h3>
        <div className="space-y-8">
          {data.risks.map(risk => (
            <div key={risk.id} className="card">
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white">{risk.title}</h4>
              </div>
              
              <div className="space-y-3">
                {risk.mitigations.map((mitigation, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                    <p className="text-slate-200 leading-relaxed text-base">
                      {mitigation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Case Study */}
      <CaseStudy text={data.caseStudy} />
      
      {/* Footer */}
      <div className="card bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-white/20">
        <p className="text-slate-300 italic text-center">
          This analysis is for educational purposes and should complement, not replace, formal compliance reviews and expert consultation.
        </p>
      </div>
    </section>
  );
}
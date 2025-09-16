import type { Risk } from "@/lib/schema";

export default function RiskBadges({ risks }: { risks: Risk[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {risks.map(r => {
        const riskScore = Math.round(r.likelihood * r.impact * 100);
        
        return (
          <div 
            key={r.id} 
            className="risk-badge group cursor-pointer"
          >
            <div className="flex items-center gap-4 w-full">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm">{riskScore}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-white text-lg">{r.title}</div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span>Risk Score: {riskScore}%</span>
                  <span>L: {Math.round(r.likelihood*100)}%</span>
                  <span>I: {Math.round(r.impact*100)}%</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
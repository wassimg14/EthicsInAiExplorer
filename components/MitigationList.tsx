import type { Risk } from "@/lib/schema";
import CopyButton from "./CopyButton";

export default function MitigationList({ risks }: { risks: Risk[] }) {
  const all = risks.flatMap(r => r.mitigations.map(m => `- ${m} (${r.title})`)).join("\n");
  
  return (
    <div className="card border-l-4 border-l-emerald-500">
      <div className="mb-8 flex items-center justify-between">
        <h4 className="text-xl font-semibold text-white">Action Items</h4>
        <CopyButton text={all} label="Copy All" />
      </div>
      
      <div className="space-y-8">
        {risks.map(r => (
          <div key={r.id} className="relative">
            <div className="mb-4">
              <h5 className="text-lg font-semibold text-white">{r.title}</h5>
            </div>
            
            <div className="space-y-3">
              {r.mitigations.map((m, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 mt-2 flex-shrink-0 group-hover:bg-emerald-500 transition-colors duration-200"></div>
                  <p className="text-slate-200 leading-relaxed text-base group-hover:text-white transition-colors duration-200">
                    {m}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
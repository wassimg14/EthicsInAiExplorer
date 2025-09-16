export default function CaseStudy({ text }: { text: string }) {
  return (
    <div className="card border-l-4 border-l-blue-500 bg-gradient-to-br from-blue-900/20 to-indigo-900/20">
      <div className="mb-6">
        <h4 className="text-xl font-semibold text-white">Real-world Example</h4>
      </div>
      
      <div className="prose prose-slate max-w-none">
        <p className="text-slate-200 leading-relaxed text-lg italic">
          "{text}"
        </p>
      </div>
      
      <div className="mt-6 p-4 bg-white/10 rounded-lg border border-blue-400/30">
        <p className="text-sm text-slate-300">
          This scenario demonstrates how proactive risk management can prevent real-world incidents
        </p>
      </div>
    </div>
  );
}
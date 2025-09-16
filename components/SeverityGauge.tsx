export default function SeverityGauge({ value }: { value: number }) {
  const pct = Math.max(0, Math.min(100, value));
  
  // Color coding based on severity
  const getGradient = (severity: number) => {
    if (severity >= 80) return "from-red-500 to-red-600";
    if (severity >= 60) return "from-orange-500 to-red-500";
    if (severity >= 40) return "from-yellow-500 to-orange-500";
    return "from-green-500 to-emerald-500";
  };
  
  const getTextColor = (severity: number) => {
    if (severity >= 80) return "text-red-700";
    if (severity >= 60) return "text-orange-700";
    if (severity >= 40) return "text-yellow-700";
    return "text-green-700";
  };
  
  const getSeverityLabel = (severity: number) => {
    if (severity >= 80) return "Critical";
    if (severity >= 60) return "High";
    if (severity >= 40) return "Medium";
    return "Low";
  };
  
  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <div className="h-3 w-48 overflow-hidden rounded-full bg-slate-200">
          <div 
            className={`h-3 transition-all duration-1000 ease-out bg-gradient-to-r ${getGradient(pct)} relative`}
            style={{ width: `${pct}%` }} 
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
          </div>
        </div>
        <div className="absolute -top-8 right-0 text-xs text-slate-500">
          100
        </div>
        <div className="absolute -top-8 left-0 text-xs text-slate-500">
          0
        </div>
      </div>
      
      <div className="text-right">
        <div className={`text-2xl font-bold tabular-nums ${getTextColor(pct)}`}>
          {pct}
        </div>
        <div className={`text-xs font-medium ${getTextColor(pct)}`}>
          {getSeverityLabel(pct)}
        </div>
      </div>
    </div>
  );
}
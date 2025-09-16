import type { Risk } from "./schema";

export function severityFrom(risks: Risk[]): number {
  const s = risks
    .map(r => r.likelihood * r.impact)
    .sort((a,b) => b - a)
    .slice(0,3)
    .reduce((acc,x) => acc + x, 0);
  return Math.round(Math.min(1, s) * 100);
}
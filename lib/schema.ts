import { z } from "zod";

export const Risk = z.object({
  id: z.string(),
  title: z.string(),
  explanation: z.string(),
  likelihood: z.number().min(0).max(1),
  impact: z.number().min(0).max(1),
  mitigations: z.array(z.string()).min(1)
});
export type Risk = z.infer<typeof Risk>;

export const Analysis = z.object({
  severity: z.number().min(0).max(100),
  risks: z.array(Risk).min(1),
  caseStudy: z.string().min(1)
});
export type Analysis = z.infer<typeof Analysis>;
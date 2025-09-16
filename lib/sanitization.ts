// Super simple client-side redaction to show the idea.
// You can expand this to use better PII detection or regexes per locale.
export function redactPII(input: string): string {
  return input
    // redact emails
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "[redacted-email]")
    // redact 10-16 digit-ish numbers (credit cards, etc.)
    .replace(/\b\d{10,16}\b/g, "[redacted-number]");
}
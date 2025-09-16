"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  
  async function doCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }
  
  return (
    <button
      onClick={doCopy}
      className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20 hover:border-indigo-400 hover:text-indigo-300 hover:shadow-md"
      type="button"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 text-green-600" />
          <span className="text-green-400">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
"use client";

import { Mail, Check } from "lucide-react";
import { useState } from "react";

export default function EmailReveal({ email }: { email: string }) {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    setRevealed(true);
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — the address is still shown for manual copy.
    }
  };

  if (!revealed) {
    return (
      <button
        type="button"
        onClick={handleClick}
        className="text-text-muted hover:text-text transition-colors"
        title="Show email"
        aria-label="Show email"
      >
        <Mail size={18} strokeWidth={1.5} />
      </button>
    );
  }

  return (
    <a
      href={`mailto:${email}`}
      onClick={handleClick}
      className="flex items-center gap-1.5 text-[13px] text-text-muted hover:text-text transition-colors"
      title="Email me"
    >
      <Mail size={15} strokeWidth={1.5} />
      {email}
      {copied && <Check size={13} strokeWidth={2} className="text-green-500" />}
    </a>
  );
}

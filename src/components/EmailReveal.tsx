"use client";

import { Mail, Check } from "lucide-react";
import { useState } from "react";

/**
 * Click-to-reveal email that scrapers can't harvest.
 *
 * The address is passed in BASE64 and only decoded at runtime, on click — so
 * the literal "name@domain" string appears nowhere in the server HTML, the RSC
 * payload, or the JS bundle. A bot fetching the page (or grepping the chunks)
 * with the usual `\w+@\w+` regex finds nothing. Previously the plain address
 * was passed as a prop and shipped in the initial HTML, so the reveal was
 * cosmetic and the inbox got scraped.
 *
 * Decode `<address>` with: btoa on your address, e.g.
 *   node -e "console.log(Buffer.from('you@example.com').toString('base64'))"
 */
export default function EmailReveal({ encoded }: { encoded: string }) {
  const [email, setEmail] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const reveal = async () => {
    // Assembled here for the first time — never earlier, never in the markup.
    const address = email ?? (typeof atob !== "undefined" ? atob(encoded) : "");
    setEmail(address);
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — the address is still shown for manual copy.
    }
  };

  if (!email) {
    return (
      <button
        type="button"
        onClick={reveal}
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
      className="flex items-center gap-1.5 text-[13px] text-text-muted hover:text-text transition-colors"
      title="Email me"
    >
      <Mail size={15} strokeWidth={1.5} />
      {email}
      {copied && <Check size={13} strokeWidth={2} className="text-green-500" />}
    </a>
  );
}

"use client";

import { ImageIcon } from "lucide-react";
import { useState } from "react";

export default function ScreenshotImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div className="relative flex-shrink-0 w-[280px] h-[180px] bg-bg-input rounded-xl overflow-hidden border border-border flex items-center justify-center">
      {!errored && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
        />
      )}
      {!loaded && (
        <div className="flex flex-col items-center gap-1.5 text-text-muted/40">
          <ImageIcon size={20} strokeWidth={1.5} />
          <span className="text-[11px]">{alt}</span>
        </div>
      )}
    </div>
  );
}

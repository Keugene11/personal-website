"use client";

import { X, ExternalLink } from "lucide-react";
import { useEffect } from "react";

export default function DemoModal({
  url,
  title,
  onClose,
}: {
  url: string;
  title: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 animate-fade-in p-4"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col items-center gap-3 max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 self-end">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="press flex items-center gap-1.5 text-[12px] text-white/60 hover:text-white transition-colors bg-white/10 rounded-full px-3 py-1.5"
          >
            <ExternalLink size={12} /> Open in new tab
          </a>
          <button
            onClick={onClose}
            className="press w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors text-white"
          >
            <X size={14} />
          </button>
        </div>

        {/* Phone frame — desktop */}
        <div className="hidden sm:block relative bg-[#111] rounded-[3.5rem] p-[10px] shadow-2xl border-[6px] border-[#222]">
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-28 h-7 bg-[#111] rounded-b-2xl z-10" />
          <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 w-28 h-[5px] bg-[#333] rounded-full" />
          <div className="w-[375px] h-[760px] rounded-[3rem] overflow-hidden bg-white">
            <iframe src={url} className="w-full h-full border-0" title={title} />
          </div>
        </div>

        {/* Full screen on mobile */}
        <div className="sm:hidden w-[calc(100vw-2rem)] h-[75vh] rounded-2xl overflow-hidden bg-white">
          <iframe src={url} className="w-full h-full border-0" title={title} />
        </div>
      </div>
    </div>
  );
}

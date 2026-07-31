"use client";

import { useState } from "react";

type Demo = { label: string; url: string };

const DESKTOP_SCALE = 0.7;
const MOBILE_W = 390;

export default function LiveDemo({
  demos,
  height = 500,
  mobile = false,
}: {
  demos: Demo[];
  height?: number;
  mobile?: boolean;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-5 rounded-xl overflow-hidden border border-border shadow-sm bg-white">
      {/* Browser chrome */}
      <div className="flex items-center gap-3 px-3 h-9 border-b border-border flex-shrink-0 bg-[#f2f2f2]">
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
          <div className="w-[11px] h-[11px] rounded-full bg-[#febc2e]" />
          <div className="w-[11px] h-[11px] rounded-full bg-[#28c840]" />
        </div>

        {demos.length === 1 ? (
          <div className="flex-1 min-w-0 flex justify-center">
            <span className="text-[11px] text-text-muted bg-white border border-border rounded px-2 py-0.5 truncate max-w-[260px]">
              {demos[0].url.replace(/^https?:\/\//, "")}
            </span>
          </div>
        ) : (
          <div className="flex gap-1">
            {demos.map((demo, i) => (
              <button
                key={demo.url}
                onClick={() => setActive(i)}
                className={`press text-[11px] px-3 py-1 rounded-md transition-colors ${
                  active === i
                    ? "bg-white text-text shadow-sm border border-border"
                    : "text-text-muted hover:text-text"
                }`}
              >
                {demo.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* iframe area */}
      <div
        className={`relative bg-white overflow-hidden ${mobile ? "flex justify-center" : ""}`}
        style={{ height }}
      >
        <iframe
          key={demos[active].url}
          src={demos[active].url}
          className="border-0 block flex-shrink-0"
          style={
            mobile
              ? { width: MOBILE_W, height: "100%" }
              : {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: `${100 / DESKTOP_SCALE}%`,
                  height: `${height / DESKTOP_SCALE}px`,
                  transform: `scale(${DESKTOP_SCALE})`,
                  transformOrigin: "top left",
                }
          }
          title={demos[active].label}
          allow="autoplay; encrypted-media; fullscreen; clipboard-write; microphone; camera"
        />
      </div>
    </div>
  );
}

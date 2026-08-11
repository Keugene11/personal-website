"use client";

import { useState } from "react";

type Demo = { label: string; url: string };

const DESKTOP_SCALE = 0.7;

// A real iPhone viewport (14/15/16), so a mobile app demo has a phone's
// proportions — 390x844, not just phone width in a squat desktop-shaped box.
// Rendered 1:1: scaling it resampled every glyph, which made headings and logos
// read thicker and softer than the same screens in the real app.
const PHONE_W = 390;
const PHONE_H = 844;
const BEZEL = 10;

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

  const desktopIframe = (
    <iframe
      key={demos[active].url}
      src={demos[active].url}
      className="border-0 block flex-shrink-0"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: `${100 / DESKTOP_SCALE}%`,
        height: `${height / DESKTOP_SCALE}px`,
        transform: `scale(${DESKTOP_SCALE})`,
        transformOrigin: "top left",
      }}
      title={demos[active].label}
      allow="autoplay; encrypted-media; fullscreen; clipboard-write; microphone; camera"
    />
  );

  // Mobile apps get a phone, not a browser window — traffic lights and an
  // address bar around a portrait app read as the wrong device entirely.
  //
  // Every demo gets its own phone, stacked and labelled, rather than hiding all
  // but one behind a tab: a second screen worth showing shouldn't depend on
  // someone noticing a switcher.
  if (mobile) {
    return (
      <div className="mt-5 flex flex-col items-center gap-8">
        {demos.map((demo, i) => (
          <div key={demo.url} className="flex flex-col items-center gap-2.5">
            <span className="text-[11px] uppercase tracking-widest text-text-muted font-medium">
              {demo.label}
            </span>
            <div
              className="rounded-[44px] bg-[#1a1a1a] shadow-[0_18px_40px_-12px_rgba(0,0,0,0.35)] overflow-hidden"
              style={{
                width: PHONE_W + BEZEL * 2,
                height: PHONE_H + BEZEL * 2,
                padding: BEZEL,
              }}
            >
              <div className="rounded-[34px] overflow-hidden bg-white h-full">
                <iframe
                  src={demo.url}
                  className="border-0 block flex-shrink-0"
                  style={{ width: PHONE_W, height: PHONE_H }}
                  title={demo.label}
                  // Only the first phone loads up front. The rest are a full
                  // app each, and starting them all at once just makes the one
                  // people actually look at slower to appear.
                  loading={i === 0 ? "eager" : "lazy"}
                  allow="autoplay; encrypted-media; fullscreen; clipboard-write; microphone; camera"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

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

      <div className="relative bg-white overflow-hidden" style={{ height }}>
        {desktopIframe}
      </div>
    </div>
  );
}

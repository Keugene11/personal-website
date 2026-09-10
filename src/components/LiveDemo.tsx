"use client";

import { useEffect, useRef, useState } from "react";

type Demo = { label: string; url: string };

const DESKTOP_SCALE = 0.7;

// A real iPhone viewport (14/15/16), so a mobile app demo has a phone's
// proportions — 390x844, not just phone width in a squat desktop-shaped box.
// Rendered 1:1: scaling it resampled every glyph, which made headings and logos
// read thicker and softer than the same screens in the real app.
const PHONE_W = 390;
const PHONE_H = 844;
const BEZEL = 10;

// How far ahead of the viewport a demo starts loading. Enough that it is
// usually ready by the time it is actually on screen, small enough that
// scrolling past a project doesn't boot it.
const PRELOAD_MARGIN = "200px";

/**
 * Every demo on this page is an entire web app — its own framework, its own
 * bundle, its own cold serverless start. Six of them booting at once is what
 * made the first one anybody looks at take the better part of a minute:
 * measured on a throttled connection (4 Mbps / 120 ms / 4x CPU), the Wingmate
 * phone was usable at 33.9s with every frame loading, 11.5s with only itself.
 *
 * `loading="lazy"` does NOT solve this and was already tried. Chrome's lazy
 * threshold is generous enough that a frame most of a screen below the fold
 * loads immediately anyway — both Wingmate phones were requested within 15ms of
 * each other. So the gate has to be explicit: no `src` at all until the frame
 * is genuinely near the viewport.
 *
 * One-way latch. Once a demo has loaded it stays loaded — scrolling back up
 * must never throw away a running app and cold-boot it again.
 */
function useInView<T extends HTMLElement>(eager = false) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(eager);

  useEffect(() => {
    if (inView) return;
    const el = ref.current;
    if (!el) return;
    // No observer (very old browser, or a crawler): load it rather than show a
    // permanently empty box. Failing towards "works" is the right direction.
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: PRELOAD_MARGIN },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [inView]);

  return [ref, inView] as const;
}

/** What sits in a frame's place until it is worth loading. */
function Placeholder() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-white">
      <div className="w-5 h-5 border-2 border-border border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

const IFRAME_ALLOW =
  "autoplay; encrypted-media; fullscreen; clipboard-write; microphone; camera; display-capture";

/** One phone in the stacked mobile layout, loaded when it comes into view. */
function DemoPhone({ demo, eager }: { demo: Demo; eager: boolean }) {
  const [ref, inView] = useInView<HTMLDivElement>(eager);

  return (
    <div className="flex flex-col items-center gap-2.5">
      <span className="text-[11px] uppercase tracking-widest text-text-muted font-medium">
        {demo.label}
      </span>
      <div
        ref={ref}
        className="rounded-[44px] bg-[#1a1a1a] shadow-[0_18px_40px_-12px_rgba(0,0,0,0.35)] overflow-hidden"
        style={{
          width: PHONE_W + BEZEL * 2,
          height: PHONE_H + BEZEL * 2,
          padding: BEZEL,
        }}
      >
        <div className="rounded-[34px] overflow-hidden bg-white h-full">
          {inView ? (
            <iframe
              src={demo.url}
              className="border-0 block flex-shrink-0"
              style={{ width: PHONE_W, height: PHONE_H }}
              title={demo.label}
              allow={IFRAME_ALLOW}
            />
          ) : (
            <Placeholder />
          )}
        </div>
      </div>
    </div>
  );
}

export default function LiveDemo({
  demos,
  height = 500,
  mobile = false,
  priority = false,
}: {
  demos: Demo[];
  height?: number;
  mobile?: boolean;
  /**
   * This demo is above the fold, so start it without waiting to be observed.
   *
   * The observer can only run after React has hydrated, and on a slow machine
   * that is seconds — measured at ~3.5s of the first phone's wait on a 4x
   * throttled CPU, spent doing nothing. Set on the FIRST project only: the
   * point of the gate is that five other apps don't boot alongside it.
   */
  priority?: boolean;
}) {
  const [active, setActive] = useState(0);
  const [frameRef, framesInView] = useInView<HTMLDivElement>(priority);
  // Which tabs have ever been opened. A tab that has loaded stays mounted and
  // is merely hidden, so switching back to it is instant — this used to key the
  // single iframe on the active url, which threw the running app away and cold
  // -booted the next one on every click of the tab bar.
  const [opened, setOpened] = useState<number[]>([0]);

  useEffect(() => {
    setOpened((o) => (o.includes(active) ? o : [...o, active]));
  }, [active]);

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
          <DemoPhone key={demo.url} demo={demo} eager={priority && i === 0} />
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

      <div ref={frameRef} className="relative bg-white overflow-hidden" style={{ height }}>
        {framesInView ? (
          demos.map((demo, i) =>
            opened.includes(i) ? (
              <iframe
                key={demo.url}
                src={demo.url}
                className="border-0 block flex-shrink-0"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: `${100 / DESKTOP_SCALE}%`,
                  height: `${height / DESKTOP_SCALE}px`,
                  transform: `scale(${DESKTOP_SCALE})`,
                  transformOrigin: "top left",
                  // Hidden, not unmounted: display:none keeps the document
                  // loaded, so coming back to a tab costs nothing.
                  display: i === active ? "block" : "none",
                }}
                title={demo.label}
                allow={IFRAME_ALLOW}
              />
            ) : null,
          )
        ) : (
          <Placeholder />
        )}
      </div>
    </div>
  );
}

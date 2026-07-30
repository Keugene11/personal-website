"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import DemoModal from "./DemoModal";

type Demo = { label: string; url: string };

export default function DemoButton({ demos }: { demos: Demo[] }) {
  const [active, setActive] = useState<Demo | null>(null);

  return (
    <>
      <div className="flex gap-2 mt-3 flex-wrap">
        {demos.map((demo) => (
          <button
            key={demo.url}
            onClick={() => setActive(demo)}
            className="press flex items-center gap-1.5 text-[12px] font-medium bg-text text-bg px-3 py-1.5 rounded-full hover:opacity-75 transition-opacity"
          >
            <Play size={10} fill="currentColor" strokeWidth={0} />
            {demo.label}
          </button>
        ))}
      </div>
      {active && (
        <DemoModal url={active.url} title={active.label} onClose={() => setActive(null)} />
      )}
    </>
  );
}

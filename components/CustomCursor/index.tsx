"use client";

import { useEffect, useState } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, input, textarea, select, label, [role='button'], [data-cursor='hover']";

export default function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let rafId = 0;

    const updatePosition = (event: MouseEvent) => {
      if (rafId) return;

      rafId = window.requestAnimationFrame(() => {
        setPosition({
          x: event.clientX,
          y: event.clientY,
        });
        rafId = 0;
      });
    };

    const updateHoverState = (event: MouseEvent) => {
      const target = document.elementFromPoint(
        event.clientX,
        event.clientY,
      ) as HTMLElement | null;
      const nextHovering = !!target?.closest(INTERACTIVE_SELECTOR);

      setHovering((prev) => (prev === nextHovering ? prev : nextHovering));
    };

    document.body.style.cursor = "none";
    document.documentElement.style.cursor = "none";

    const handleMouseMove = (event: MouseEvent) => {
      updatePosition(event);
      updateHoverState(event);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.cancelAnimationFrame(rafId);
      document.body.style.cursor = "";
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        left: position.x,
        top: position.y,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[9999] flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#5B84B1] bg-[#5B84B1]/5 transition-[width,height,opacity,transform] duration-150 ease-out"
    >
      <div
        className={`rounded-full bg-[#5B84B1] transition-all duration-150 ease-out ${
          hovering ? "h-[82%] w-[82%]" : "h-1.5 w-1.5"
        }`}
      />
    </div>
  );
}

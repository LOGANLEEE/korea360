"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type FadeInSectionProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Wraps content and runs a subtle fade-in-up when it scrolls into view.
 * 300ms ease-in-out per design rules. Respects prefers-reduced-motion.
 */
export function FadeInSection({
  children,
  className,
  ...props
}: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true);
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal-section", visible && "is-visible", className)}
      {...props}
    >
      {children}
    </div>
  );
}

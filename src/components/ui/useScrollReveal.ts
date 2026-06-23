"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visible true saat masuk, false saat keluar — animasi berulang
        setVisible(entry.isIntersecting);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

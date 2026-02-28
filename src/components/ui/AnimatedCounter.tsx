import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  format?: (value: number) => string;
  suffix?: string;
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 2.5,
  className = "",
  format = (val) => Math.round(val).toLocaleString(),
  suffix = "",
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    const startTime = performance.now();
    let animationId: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Easing function (easeOut)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = from + (to - from) * easeOut;
      
      setDisplayValue(current);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [from, to, duration]);

  return (
    <span className={className}>
      <motion.span>{format(displayValue)}</motion.span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
}

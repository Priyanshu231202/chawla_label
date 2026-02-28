import { Suspense, useState, useEffect, useRef, ReactNode } from "react";
import { useInView } from "framer-motion";

declare global {
  interface Window {
    isMobile?: boolean;
  }
}

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  offset?: string;
  minHeight?: string;
  id?: string;
}

export const LazySection = ({
  children,
  fallback = null,
  offset = "600px",
  minHeight = "400px",
  id,
}: LazySectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  // amount: 0 means as soon as 1 pixel is in view (plus margin)
  const isInView = useInView(ref, {
    once: true,
    margin:
      `0px 0px ${typeof window !== "undefined" && window.isMobile ? "200px" : offset} 0px` as any,
  });
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (isInView && !shouldLoad) {
      setShouldLoad(true);
    }
  }, [isInView, shouldLoad]);

  return (
    <div
      ref={ref}
      id={id}
      style={{ minHeight: shouldLoad ? "auto" : minHeight }}
    >
      {shouldLoad ? (
        <Suspense fallback={fallback}>{children}</Suspense>
      ) : (
        fallback
      )}
    </div>
  );
};

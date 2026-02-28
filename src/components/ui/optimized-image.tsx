import React, { useEffect, useRef, useState, memo } from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  priority?: boolean;
  srcSet?: string;
  sizes?: string;
};

const OptimizedImage: React.FC<
  Props & {
    unstyled?: boolean;
    objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  }
> = ({
  src,
  alt,
  className,
  priority = false,
  srcSet,
  sizes,
  unstyled = false,
  objectFit = "cover",
  width,
  height,
  style,
  onClick,
  ...rest
}) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [visible, setVisible] = useState<boolean>(!!priority);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (visible) return;
    if (!imgRef.current) return;
    if (typeof window === "undefined") return;

    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible(true);
              obs.disconnect();
            }
          });
        },
        { rootMargin: "400px" },
      );

      obs.observe(imgRef.current);
      return () => obs.disconnect();
    }

    setVisible(true);
  }, [visible]);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    if (priority) {
      try {
        img.setAttribute("fetchpriority", "high");
      } catch (e) {
        // ignore
      }
    }
  }, [priority]);

  return (
    <div
      className={`relative ${unstyled ? "" : "overflow-hidden bg-muted/20"} ${className}`}
    >
      {/* Shimmer Effect while loading */}
      {!loaded && !unstyled && (
        <div className="absolute inset-0 z-0 bg-muted animate-pulse overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-100%] animate-[shimmer_2s_infinite]" />
        </div>
      )}

      <img
        ref={imgRef}
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        className={`w-full h-full transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-50"}`}
        style={{ objectFit: objectFit }}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        onClick={onClick}
        {...rest}
      />
    </div>
  );
};

export default memo(OptimizedImage);

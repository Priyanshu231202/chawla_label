import React, { useEffect, useRef, useState } from "react";

export const CustomCursor = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const isHovering = useRef(false);

  // Position state refs to avoid re-renders
  const mouse = useRef({ x: 0, y: 0 });
  const outline = useRef({ x: 0, y: 0, scale: 1 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent | TouchEvent) => {
      let clientX, clientY;

      if ("touches" in e) {
        // TouchEvent
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        // MouseEvent
        clientX = e.clientX;
        clientY = e.clientY;
      }

      mouse.current.x = clientX;
      mouse.current.y = clientY;

      // Update dot instantly
      if (cursorDotRef.current) {
        cursorDotRef.current.style.opacity = "1";
        cursorDotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
      }
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.opacity = "1";
      }
    };

    const updateCursor = () => {
      // Lerp outline position
      const dx = mouse.current.x - outline.current.x;
      const dy = mouse.current.y - outline.current.y;

      outline.current.x += dx * 0.15; // easing factor
      outline.current.y += dy * 0.15;

      // Lerp outline scale
      const targetScale = isHovering.current ? 1.5 : 1;
      outline.current.scale += (targetScale - outline.current.scale) * 0.15;

      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = `translate3d(${outline.current.x}px, ${outline.current.y}px, 0) translate(-50%, -50%) scale(${outline.current.scale})`;
      }

      requestRef.current = requestAnimationFrame(updateCursor);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering interactive element
      const isInteractive =
        target.closest(
          'a, button, input, select, textarea, [role="button"], .interactive, .hover-lift',
        ) !== null;
      isHovering.current = isInteractive;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    requestRef.current = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      {/* Outer outline with glow and blur */}
      <div
        ref={cursorOutlineRef}
        className="fixed top-0 left-0 w-10 h-10 border border-primary/40 bg-primary/10 rounded-full pointer-events-none z-[9998] backdrop-blur-[2px] transition-opacity duration-300"
        style={{
          willChange: "transform",
          boxShadow: "0 0 15px hsl(var(--primary) / 0.3)",
          opacity: 0, // Hide before first move
        }}
      />
      {/* Inner dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] transition-opacity duration-300"
        style={{
          willChange: "transform",
          boxShadow: "0 0 10px hsl(var(--primary) / 0.5)",
          opacity: 0, // Hide before first move
        }}
      />
    </>
  );
};

export default CustomCursor;

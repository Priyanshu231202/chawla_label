import { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod1 from "@/assets/Products_1.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time

import prod2 from "@/assets/Products_2.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time

import prod3 from "@/assets/Products_3.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time

import prod4 from "@/assets/Products_4.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time

import prod5 from "@/assets/Products_5.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time

import prod6 from "@/assets/Products_6.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time

import prod7 from "@/assets/Products_7.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time

import prod8 from "@/assets/Products_8.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time

import prod9 from "@/assets/Products_9.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time

import prod10 from "@/assets/Products_10.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time

import prod11 from "@/assets/Products_11.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time

import prod12 from "@/assets/Products_12.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time

import prod13 from "@/assets/Products_13.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time

import prod14 from "@/assets/Products_14.png?w=400&format=webp&as=src";

// @ts-expect-error: vite-imagetools imports - handled at build time
import prod15 from "@/assets/Products_15.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod16 from "@/assets/Products_16.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod17 from "@/assets/Products_17.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod18 from "@/assets/Products_18.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod19 from "@/assets/Products_19.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod20 from "@/assets/Products_20.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod21 from "@/assets/Products_21.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod22 from "@/assets/Products_22.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod23 from "@/assets/Products_23.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod24 from "@/assets/Products_24.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod25 from "@/assets/Products_25.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod26 from "@/assets/Products_26.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod27 from "@/assets/Products_27.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod28 from "@/assets/Products_28.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod29 from "@/assets/Products_29.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod30 from "@/assets/Products_30.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod31 from "@/assets/Products_31.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod32 from "@/assets/Products_32.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod33 from "@/assets/Products_33.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod34 from "@/assets/Products_34.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod35 from "@/assets/Products_35.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod36 from "@/assets/Products_36.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod37 from "@/assets/Products_37.png?w=400&format=webp&as=src";

import prod38 from "@/assets/Products_38.png";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod39 from "@/assets/Products_39.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod40 from "@/assets/Products_40.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod41 from "@/assets/Products_41.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod42 from "@/assets/Products_42.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod43 from "@/assets/Products_43.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod44 from "@/assets/Products_44.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod45 from "@/assets/Products_45.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod46 from "@/assets/Products_46.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod47 from "@/assets/Products_47.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod48 from "@/assets/Products_48.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod49 from "@/assets/Products_49.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod50 from "@/assets/Products_50.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod51 from "@/assets/Products_51.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod52 from "@/assets/Products_52.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod53 from "@/assets/Products_53.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod54 from "@/assets/Products_54.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod55 from "@/assets/Products_55.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod56 from "@/assets/Products_56.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod57 from "@/assets/Products_57.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod58  from "@/assets/Products_58.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod59  from "@/assets/Products_59.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod60  from "@/assets/Products_60.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod61  from "@/assets/Products_61.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod62  from "@/assets/Products_62.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod63  from "@/assets/Products_63.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod64  from "@/assets/Products_64.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod65  from "@/assets/Products_65.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod66  from "@/assets/Products_66.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod67  from "@/assets/Products_67.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod68  from "@/assets/Products_68.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod69  from "@/assets/Products_69.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod70  from "@/assets/Products_70.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod71  from "@/assets/Products_71.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod72  from "@/assets/Products_72.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod73  from "@/assets/Products_73.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod74  from "@/assets/Products_74.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod75  from "@/assets/Products_75.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod76  from "@/assets/Products_76.png?w=400&format=webp&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import prod77  from "@/assets/Products_77.png?w=400&format=webp&as=src";
import OptimizedImage from "@/components/ui/optimized-image";

const tagsAndLabels = [
  { id: 0, src: prod1 },
  { id: 1, src: prod2 },
  { id: 2, src: prod3 },
  { id: 3, src: prod4 },
  { id: 4, src: prod5 },
  { id: 5, src: prod6 },
  { id: 6, src: prod7 },
  { id: 7, src: prod8 },
  { id: 8, src: prod9 },
  { id: 9, src: prod10 },
  { id: 10, src: prod11 },
  { id: 11, src: prod12 },
  { id: 12, src: prod13 },
  { id: 13, src: prod14 },
  { id: 14, src: prod15 },
  { id: 15, src: prod16 },
  { id: 16, src: prod17 },
  { id: 17, src: prod18 },
  { id: 18, src: prod19 },
  { id: 19, src: prod20 },
  { id: 20, src: prod21 },
  { id: 21, src: prod22 },
  { id: 22, src: prod23 },
  { id: 23, src: prod24 },
  { id: 24, src: prod25 },
  { id: 25, src: prod26 },
  { id: 26, src: prod27 },
  { id: 27, src: prod28 },
  { id: 28, src: prod29 },
  { id: 29, src: prod30 },
  { id: 30, src: prod31 },
  { id: 31, src: prod32 },
  { id: 32, src: prod33 },
  { id: 33, src: prod34 },
  { id: 34, src: prod35 },
  { id: 35, src: prod36 },
  { id: 36, src: prod37 },
  { id: 37, src: prod38 },
  { id: 38, src: prod39 },
  { id: 39, src: prod40 },
  { id: 40, src: prod41 },
  { id: 41, src: prod42 },
  { id: 42, src: prod43 },
  { id: 43, src: prod44 },
  { id: 44, src: prod45 },
  { id: 45, src: prod46 },
  { id: 46, src: prod47 },
  { id: 47, src: prod48 },
  { id: 48, src: prod49 },
  { id: 49, src: prod50 },
  { id: 50, src: prod51 },
  { id: 51, src: prod52 },
  { id: 52, src: prod53 },
  { id: 53, src: prod54 },
  { id: 54, src: prod55 },
  { id: 55, src: prod56 },
  { id: 56, src: prod57 },
  { id: 57, src: prod58 },
  { id: 58, src: prod59 },
  { id: 59, src: prod60 },
  { id: 60, src: prod61 },
  { id: 61, src: prod62 },
  { id: 62, src: prod63 },
  { id: 63, src: prod64 },
  { id: 64, src: prod65 },
  { id: 65, src: prod66 },
  { id: 66, src: prod67 },
  { id: 67, src: prod68 },
  { id: 68, src: prod69 },
  { id: 69, src: prod70 },
  { id: 70, src: prod71 },
  { id: 71, src: prod72 },
  { id: 72, src: prod73 },
  { id: 73, src: prod74 },
  { id: 74, src: prod75 },
  { id: 75, src: prod76 },
  { id: 76, src: prod77 },

] as const;

const TOTAL = tagsAndLabels.length;

const lightboxVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
} as const;

const imageVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.25 },
} as const;

const ProductRow = memo(
  ({
    title,
    items,
    openLightbox,
    startIndex,
    direction = "left",
    large = false,
    id,
  }: {
    title: string;
    items: any[];
    openLightbox: (idx: number) => void;
    startIndex: number;
    direction?: "left" | "right";
    large?: boolean;
    id: string;
  }) => {
    // Duplicate items to ensure a seamless marquee loop — reduced to 2 for performance
    const duplicatedItems = [...items, ...items];
    const [isHovered, setIsHovered] = useState(false);
    const [duration, setDuration] = useState(25);

    useEffect(() => {
      const handleResize = () => {
        setDuration(window.innerWidth < 768 ? 15 : 25);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
      <div
        id={id}
        className="mb-10 md:mb-16 relative w-full overflow-hidden scroll-mt-32"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-foreground text-center px-4 tracking-tight">
          {title}
        </h3>

        <div
          className="relative flex"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex gap-3 md:gap-6"
            animate={{
              x: isHovered
                ? undefined
                : direction === "left"
                  ? ["0%", "-50%"]
                  : ["-50%", "0%"],
            }}
            transition={{
              duration: duration,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedItems.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className={`shrink-0 ${large ? "w-[240px] sm:w-[300px] md:w-[400px]" : "w-[140px] sm:w-[170px] md:w-[200px]"} cursor-pointer group`}
                onClick={() => openLightbox(startIndex + (idx % items.length))}
              >
                <div
                  className={`relative ${large ? "aspect-[16/14]" : "aspect-square"} flex items-center justify-center border border-border/50 rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:border-primary dark:bg-card/50`}
                >
                  <OptimizedImage
                    src={item.src}
                    sizes={
                      large
                        ? "(min-width:1024px) 400px, (min-width:768px) 300px, 240px"
                        : "(min-width:1024px) 200px, (min-width:768px) 170px, 140px"
                    }
                    alt={`Product ${item.id}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  },
);

const ProductsSection = memo(() => {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeCategoryId, setActiveCategoryId] = useState<string>("");

  // IntersectionObserver to update active tab on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id.replace("category-", "");
          setActiveCategoryId(id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = ["labels", "tags", "stickers", "trending"];

    sections.forEach((id) => {
      const el = document.getElementById(`category-${id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const openLightbox = useCallback(
    (index: number) => setSelectedIndex(index),
    [],
  );
  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  const goNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev < TOTAL - 1 ? prev + 1 : 0) : null,
    );
  }, []);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev > 0 ? prev - 1 : TOTAL - 1) : null,
    );
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, closeLightbox, goNext, goPrev]);

  return (
    <>
      <section id="gallery" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-normal mb-4 text-primary">
              {t.products.heading}
            </h2>
            <p className="text-foreground/70 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
              {t.products.subtext}
            </p>
          </motion.div>

          {/* Categories Tabs */}
          <div className="flex flex-nowrap overflow-x-auto hide-scrollbar justify-start md:justify-center gap-2 md:gap-4 mb-12 py-2 scroll-smooth">
            {[
              { id: "labels", label: t.products.categories.labels },
              { id: "tags", label: t.products.categories.tags },
              { id: "stickers", label: t.products.categories.stickers },
              { id: "trending", label: t.products.categories.trending },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  const el = document.getElementById(`category-${tab.id}`);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                  setActiveCategoryId(tab.id);
                }}
                className={`relative px-6 py-2.5 text-lg md:text-xl font-bold transition-all duration-300 active:scale-95 whitespace-nowrap shrink-0 ${
                  activeCategoryId === tab.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
                <motion.div
                  className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
                    activeCategoryId === tab.id ? "w-8" : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="w-full overflow-hidden">
            <style>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            <ProductRow
              id="category-labels"
              title={t.products.categories.labels}
              items={tagsAndLabels.slice(0, 16)}
              openLightbox={openLightbox}
              startIndex={0}
              direction="left"
              large={true}
            />
            <ProductRow
              id="category-tags"
              title={t.products.categories.tags}
              items={tagsAndLabels.slice(17, 32)}
              openLightbox={openLightbox}
              startIndex={17}
              direction="right"
              large={true}
            />
            <ProductRow
              id="category-stickers"
              title={t.products.categories.stickers}
              items={tagsAndLabels.slice(33, 48)}
              openLightbox={openLightbox}
              startIndex={33}
              direction="left"
              large={true}
            />
            <ProductRow
              id="category-trending"
              title={t.products.categories.trending}
              items={tagsAndLabels.slice(49, 63)}
              openLightbox={openLightbox}
              startIndex={49}
              direction="right"
              large={true}
            />
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={lightboxVariants.initial}
            animate={lightboxVariants.animate}
            exit={lightboxVariants.exit}
            transition={lightboxVariants.transition}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
              aria-label="Close preview"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <motion.img
              key={`image-${selectedIndex}`}
              initial={imageVariants.initial}
              animate={imageVariants.animate}
              exit={imageVariants.exit}
              transition={imageVariants.transition}
              src={tagsAndLabels[selectedIndex].src}
              alt={`Product preview ${selectedIndex + 1}`}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
              loading="eager"
              decoding="async"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/40 px-4 py-1.5 rounded-full font-medium">
              Image {selectedIndex + 1} / {TOTAL}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

ProductsSection.displayName = "ProductsSection";

export default ProductsSection;
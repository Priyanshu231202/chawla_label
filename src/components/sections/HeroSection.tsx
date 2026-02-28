import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useLanguage } from "@/context/LanguageContext";
import heroVideo from "@/assets/hero-video.mp4";
// @ts-expect-error: vite-imagetools imports - handled at build time
import heroPoster from "@/assets/Hero.png?w=640;1280;1920&format=webp&as=metadata";

declare global {
  interface Window {
    isMobile?: boolean;
  }
}

const HeroSection = () => {
  const { t, language } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster.src}
          preload={
            typeof window !== "undefined" && window.isMobile ? "none" : "auto"
          }
          className="w-full h-full object-cover"
        >
          {!(typeof window !== "undefined" && window.isMobile) && (
            <source src={heroVideo} type="video/mp4" />
          )}

          <div className="w-full h-full bg-black/60" />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 md:space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-[0.02em] font-serif text-white uppercase opacity-90">
              {language === "en" ? (
                <>
                  {t.hero.welcomeTo}{" "}
                  <span className="text-white whitespace-nowrap">
                    {t.footer.companyName}
                  </span>
                </>
              ) : (
                <>
                  <span className="text-white whitespace-nowrap">
                    {t.footer.companyName}
                  </span>
                  {t.hero.welcomeTo}
                </>
              )}
            </h1>

            {/* Tagline badge */}
            <div className="flex justify-center">
              <span className="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white/80 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase">
                {t.footer.unitOf}
              </span>
            </div>

            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white/90 font-medium italic min-h-[1.2em]">
              <TypeAnimation
                key={language}
                sequence={t.hero.typeLabels.flatMap((label) => [label, 2000])}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>

          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
            {t.hero.subtext}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
            <button
              onClick={() => scrollToSection("contact")}
              className="group h-12 md:h-14 px-8 md:px-10 rounded-full bg-primary text-white font-bold text-lg transition-all duration-300 hover:bg-primary/95 hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] active:scale-95"
            >
              {t.hero.getQuote}
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="group h-12 md:h-14 px-8 md:px-10 rounded-full border-2 border-white/80 bg-white/5 backdrop-blur-sm text-white font-bold text-lg transition-all duration-300 hover:bg-white hover:text-black active:scale-95"
            >
              {t.hero.viewGallery}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

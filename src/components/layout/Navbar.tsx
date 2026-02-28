import { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

import OptimizedImage from "@/components/ui/optimized-image";

// @ts-expect-error: vite-imagetools import - handled at build time
import logoSrc from "@/assets/chawlaaa-logo.png?w=384&format=webp&as=src";

// Stable nav variant objects outside component — never recreated
const navVariants = {
  initial: { y: -100 },
  animate: { y: 0 },
  transition: { duration: 0.5 },
} as const;

const mobileMenuVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.2 },
} as const;

const Navbar = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#blog", label: t.nav.blog },
    { href: "#faqs", label: t.nav.faqs },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "en" ? "ja" : "en");
  }, [language, setLanguage]);

  const toggleMobile = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobile = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <>
      <motion.nav
        initial={navVariants.initial}
        animate={navVariants.animate}
        transition={navVariants.transition}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 py-1.5 shadow-lg"
            : "bg-transparent py-2.5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 md:h-22">
            {/* Brand Logo - Left */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center gap-3 group">
                <OptimizedImage
                  src={logoSrc}
                  sizes="120px"
                  alt={`${t.footer.companyName} Logo`}
                  unstyled={true}
                  objectFit="contain"
                  className={`h-12 md:h-16 lg:h-20 w-auto transition-all duration-300 group-hover:scale-105 ${
                    isScrolled
                      ? "brightness-90 contrast-125 dark:brightness-100"
                      : "brightness-110"
                  }`}
                  width={240}
                  height={120}
                  priority
                />
              </a>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center justify-center flex-1 px-10">
              <div className="flex items-center gap-8 xl:gap-12">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`text-[18px] font-bold tracking-[0.2em] transition-all relative group uppercase ${
                    isScrolled
                      ? "text-slate-900 dark:text-white"
                      : "text-white/90"
                  }`}
                >
                  {t.nav.home}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const sectionId = link.href.replace("#", "");
                      const target = document.getElementById(sectionId);
                      if (target) {
                        target.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                    className={`text-[18px] font-bold tracking-[0.2em] transition-all relative group uppercase ${
                      isScrolled
                        ? "text-slate-900 dark:text-white"
                        : "text-white/90"
                    }`}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop Actions - Right */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <motion.button
                onClick={toggleLanguage}
                whileTap={{ scale: 0.95 }}
                className={`text-xs font-bold tracking-widest transition-colors ${
                  isScrolled
                    ? "text-slate-600 hover:text-slate-900 dark:text-white"
                    : "text-white/70 hover:text-white"
                }`}
                title={
                  language === "en" ? "Change to Japanese" : "日本語に切り替え"
                }
              >
                {language === "en" ? "日本語" : "EN"}
              </motion.button>

              <motion.button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-full transition-colors ${
                  isScrolled
                    ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-white/10"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
                title={
                  theme === "dark"
                    ? "Switch to Light Mode"
                    : "Switch to Dark Mode"
                }
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-4 lg:hidden">
              <button
                onClick={toggleLanguage}
                className={`text-xs font-bold tracking-widest ${
                  isScrolled
                    ? "text-slate-600 dark:text-white"
                    : "text-white/70"
                }`}
              >
                {language === "en" ? "日本語" : "EN"}
              </button>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`p-2 transition-colors ${
                  isScrolled
                    ? "text-slate-600 dark:text-white"
                    : "text-white/70"
                }`}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={toggleMobile}
                className={`p-2 transition-colors ${
                  isScrolled ? "text-slate-900 dark:text-white" : "text-white"
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={mobileMenuVariants.initial}
            animate={mobileMenuVariants.animate}
            exit={mobileMenuVariants.exit}
            transition={mobileMenuVariants.transition}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center"
          >
            <div className="container mx-auto px-10">
              <div className="flex flex-col items-center gap-8">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    closeMobile();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="text-2xl font-bold tracking-[0.2em] text-white/90 hover:text-primary transition-colors py-2 uppercase"
                >
                  {t.nav.home}
                </a>
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        closeMobile();

                        // Extract the section ID from href
                        const sectionId = link.href.replace("#", "");
                        const target = document.getElementById(sectionId);

                        if (target) {
                          // Wait for menu animation to finish before scrolling
                          setTimeout(() => {
                            target.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                          }, 300);
                        }
                      }}
                      className="text-2xl font-bold tracking-[0.2em] text-white/90 hover:text-primary transition-colors py-2 uppercase"
                    >
                      {link.label}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;

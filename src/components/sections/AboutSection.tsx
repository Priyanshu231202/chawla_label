import { memo } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
} as const;
const cardAnim = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
} as const;
const viewportOpts = { once: true } as const;

const AboutSection = memo(() => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="w-full">
          <motion.div
            {...fadeUp}
            whileInView={fadeUp.animate}
            viewport={viewportOpts}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t.about.heading}{" "}
              {t.about.brand && (
                <span className="gradient-text">{t.about.brand}</span>
              )}
            </h2>
          </motion.div>

          <motion.div
            {...cardAnim}
            whileInView={cardAnim.animate}
            viewport={viewportOpts}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <div className="space-y-10 text-center">
              <div className="space-y-6 max-w-5xl mx-auto">
                <p className="text-lg md:text-2xl leading-relaxed text-foreground">
                  <span className="font-bold text-primary">
                    {t.footer.companyName}
                  </span>{" "}
                  {t.about.desc1}
                </p>

                <p className="text-lg md:text-2xl leading-relaxed text-muted-foreground">
                  {t.about.desc2}
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-12 md:gap-24 pt-12 border-t border-border/20">
                <div className="text-center group">
                  <div className="font-display text-4xl md:text-6xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                    <AnimatedCounter to={30} duration={2.5} suffix="+" />
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground uppercase tracking-widest font-semibold">
                    {t.about.yearsExperience}
                  </div>
                </div>
                <div className="text-center group">
                  <div className="font-display text-4xl md:text-6xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                    <AnimatedCounter to={10000} duration={2.5} suffix="+" />
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground uppercase tracking-widest font-semibold">
                    {t.about.happyClients}
                  </div>
                </div>
                <div className="text-center group">
                  <div className="font-display text-4xl md:text-6xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                    <AnimatedCounter to={10876000} duration={2.5} suffix="+" />
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground uppercase tracking-widest font-semibold">
                    {t.about.labelsDelivered}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;

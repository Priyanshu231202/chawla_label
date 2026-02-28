import { memo } from "react";
import { motion } from "framer-motion";
import { Mail, DollarSign, Clock, Award, Shield, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ICONS = [Mail, DollarSign, Clock, Award, Shield, Sparkles] as const;
const COLOR = "text-primary";
const BG_COLOR = "bg-primary/10";

// Stable animation objects — hoisted outside component
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
} as const;

const viewportOpts = { once: true, margin: "0px" } as const;
const headingViewportOpts = { once: false, margin: "0px" } as const;

const FeaturesSection = memo(() => {
  const { t, language } = useLanguage();

  return (
    <section
      id="features"
      key={language}
      className="py-16 md:py-24 bg-background border-t border-border/30"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={headingViewportOpts}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t.features.heading}{" "}
            <span className="text-primary">{t.features.highlight}</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {t.features.items.map((feature, idx) => {
            const Icon = ICONS[idx];
            return (
              <motion.div
                key={`${language}-${idx}`}
                variants={itemVariants}
                className="text-center group"
              >
                <div
                  className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${BG_COLOR} flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform`}
                >
                  <Icon
                    className={`w-10 h-10 md:w-12 md:h-12 ${COLOR} opacity-60`}
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-display text-2xl md:text-2xl font-normal mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 text-xl md:text-xl leading-relaxed max-w-xs mx-auto">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
});

FeaturesSection.displayName = "FeaturesSection";

export default FeaturesSection;

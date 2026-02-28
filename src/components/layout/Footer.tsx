import { memo } from "react";
import { Tag, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import cert1Pdf from "@/assets/certificate1.pdf";
// @ts-expect-error: vite-imagetools imports - handled at build time
import cert1Img from "@/assets/certificate1.png?w=320&as=src";
// @ts-expect-error: vite-imagetools imports - handled at build time
import cert1Srcset from "@/assets/certificate1.png?w=160;320;640&as=srcset";
import cert2Pdf from "@/assets/certificate-2-pdf.pdf";
// @ts-expect-error: vite-imagetools imports - handled at build time
import TUVImg from "@/assets/TUV_CERTIFICATE.jpeg?w=320&as=src";

import OptimizedImage from "@/components/ui/optimized-image";

const footerHrefs = {
  products: ["#gallery", "#gallery", "#gallery", "#gallery"],
  company: ["#about", "#features", "#blog"],
  support: ["#faqs", "#contact"],
} as const;

const Footer = memo(() => {
  const { t } = useLanguage();

  return (
    <footer className="bg-muted/30 border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Tag className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display text-2xl font-bold text-foreground">
                {t.footer.companyName}
              </span>
            </div>
            <p className="text-xs font-semibold tracking-widest uppercase text-primary/70 mb-4 text-center md:text-left">
              {t.footer.unitOf}
            </p>
            <p className="text-muted-foreground mb-6 max-w-sm mx-auto md:mx-0">
              {t.footer.tagline}
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${t.footer.phone1.replace(/\s+/g, "")}`}
                className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                {t.footer.phone1}
              </a>
              <a
                href={`tel:${t.footer.phone2.replace(/\s+/g, "")}`}
                className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                {t.footer.phone2}
              </a>
              <a
                href={`mailto:${t.footer.email}`}
                className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                {t.footer.email}
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="text-center md:text-left">
            <h4 className="font-display font-semibold mb-4 text-foreground">
              {t.footer.products}
            </h4>
            <ul className="space-y-2">
              {t.footer.links.products.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={footerHrefs.products[idx]}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="text-center md:text-left">
            <h4 className="font-display font-semibold mb-4 text-foreground">
              {t.footer.company}
            </h4>
            <ul className="space-y-2">
              {t.footer.links.company.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={footerHrefs.company[idx]}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="text-center md:text-left">
            <h4 className="font-display font-semibold mb-4 text-foreground">
              {t.footer.support}
            </h4>
            <ul className="space-y-3">
              {t.footer.links.support.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={footerHrefs.support[idx]}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex flex-col items-center mb-12">
          <h4 className="font-display font-bold mb-8 text-foreground text-xl md:text-2xl tracking-tight text-center">
            <span className="gradient-text">{t.footer.certifiedBy}</span>
          </h4>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href={cert1Pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-fit rounded-xl overflow-hidden shadow-sm dark:shadow-none hover:shadow-md transition-all border border-border/50 dark:border-transparent bg-white dark:bg-white hover:border-primary/50"
            >
              <div className="relative p-6 md:p-8 w-48 h-40 md:w-64 md:h-48 flex items-center justify-center">
                <OptimizedImage
                  src={cert1Img}
                  srcSet={cert1Srcset}
                  sizes="160px"
                  alt="Certificate 1"
                  className="max-h-full max-w-full w-auto h-auto object-contain"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-primary/5 transition-colors" />
              </div>
            </a>

            <a
              href={cert2Pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-fit rounded-xl overflow-hidden shadow-sm dark:shadow-none hover:shadow-md transition-all border border-border/50 dark:border-transparent bg-white dark:bg-white hover:border-primary/50"
            >
              <div className="relative p-6 md:p-8 w-48 h-40 md:w-64 md:h-48 flex items-center justify-center">
                <OptimizedImage
                  src={TUVImg}
                  sizes="160px"
                  alt="Certificate 2"
                  className="max-h-full max-w-full w-auto h-auto object-contain"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-primary/5 transition-colors" />
              </div>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center">
            © 1974 {t.footer.copyright}
            <span className="text-lime-600">
              <a
                href="https://www.wegrowconsultancyandsolution.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                {t.footer.by}
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;

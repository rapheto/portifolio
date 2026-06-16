import { SectionTitle } from "./SectionTitle";
import { Award, BadgeCheck, ExternalLink } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Certifications() {
  const { t } = useI18n();
  return (
    <section id="certifications" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle index={t("cert.index")} title={t("cert.title")} subtitle={t("cert.subtitle")} />

        <div className="relative">
          <div className="relative card-glass rounded-3xl p-8 sm:p-10">
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-surface-elevated border border-border flex items-center justify-center shrink-0">
                <Award className="w-12 h-12 text-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  <BadgeCheck className="w-4 h-4" />
                  {t("cert.international")}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight whitespace-nowrap">
                  CTFL — ISTQB<sup>®</sup>
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed">
                  <span className="text-foreground font-medium">{t("cert.fullName")}</span>
                  {t("cert.body")}
                </p>
                <a
                  href="https://www.istqb.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-sm text-foreground hover:underline"
                >
                  {t("cert.link")} <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

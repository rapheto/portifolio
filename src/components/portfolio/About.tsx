import { SectionTitle } from "./SectionTitle";
import { Gamepad2, Bug, Languages } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle index={t("about.index")} title={t("about.title")} />
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 card-glass card-glass-hover rounded-2xl p-8 flex flex-col">
            <div className="space-y-4 flex-1">
              <p className="text-foreground/90 leading-relaxed">
                {t("about.p1.a")}
                <span className="text-foreground font-semibold">{t("about.p1.role")}</span>
                {t("about.p1.b")}
                <span className="text-foreground">{t("about.p1.cesar")}</span>
                {t("about.p1.c")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.p2.a")}
                <span className="text-foreground">{t("about.p2.gamedev")}</span>
                {t("about.p2.b")}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 mt-auto">
              {[t("about.badge.ctfl"), t("about.badge.istqb"), t("about.badge.ads")].map((b) => (
                <span key={b} className="font-mono text-xs px-3 py-1 rounded-full bg-surface-elevated text-foreground border border-border">
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="card-glass card-glass-hover rounded-2xl p-6">
              <Bug className="w-6 h-6 text-foreground mb-3" />
              <div className="font-mono text-xs text-muted-foreground mb-1">{t("about.card.passion.tag")}</div>
              <p className="text-sm text-foreground">{t("about.card.passion.body")}</p>
            </div>
            <div className="card-glass card-glass-hover rounded-2xl p-6">
              <Gamepad2 className="w-6 h-6 text-foreground mb-3" />
              <div className="font-mono text-xs text-muted-foreground mb-1">{t("about.card.background.tag")}</div>
              <p className="text-sm text-foreground">{t("about.card.background.body")}</p>
            </div>
            <div className="card-glass card-glass-hover rounded-2xl p-6">
              <Languages className="w-6 h-6 text-foreground mb-3" />
              <div className="font-mono text-xs text-muted-foreground mb-2">{t("about.card.languages.tag")}</div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between"><span className="text-foreground">{t("about.lang.pt")}</span><span className="text-muted-foreground text-xs">{t("about.lang.ptLevel")}</span></div>
                <div className="flex justify-between"><span className="text-foreground">{t("about.lang.en")}</span><span className="text-muted-foreground text-xs">{t("about.lang.enLevel")}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

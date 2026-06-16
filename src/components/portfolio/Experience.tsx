import { SectionTitle } from "./SectionTitle";
import { MapPin, Calendar, Briefcase } from "lucide-react";
import { useI18n } from "@/lib/i18n";

function useSkills(t: (k: string) => string) {
  return [
    "Python",
    "Selenium",
    "Appium",
    "Pytest",
    t("skill.testAutomation"),
    t("skill.manualTesting"),
    t("skill.testPlanning"),
    t("skill.testManagement"),
    t("skill.apiTesting"),
  ];
}

export function Experience() {
  const { t } = useI18n();
  const skills = useSkills(t);
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle
          index={t("exp.index")}
          title={t("exp.title")}
          subtitle={t("exp.subtitle")}
        />

        <div className="relative">
          <div className="card-glass rounded-3xl p-8 sm:p-10">
            <div className="flex flex-wrap items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-foreground text-background flex items-center justify-center font-bold text-lg shrink-0">
                C
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-bold text-foreground">{t("exp.role")}</h3>
                <p className="text-muted-foreground">Centro de Estudos Avançados do Recife (C.E.S.A.R)</p>
                <p className="text-xs text-muted-foreground mt-1 italic">
                  {t("exp.tag")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> {t("exp.period")}
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" /> {t("exp.location")}
              </div>
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4" /> {t("exp.type")}
              </div>
            </div>

            <p className="text-foreground/90 leading-relaxed mb-8">
              {t("exp.body.a")}
              <span className="text-foreground font-medium">{t("exp.body.sel")}</span>
              {t("exp.body.b")}
              <span className="text-foreground font-medium">{t("exp.body.app")}</span>
              {t("exp.body.c")}
              {t("exp.body.d")}
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="text-xs px-3 py-1.5 rounded-md bg-surface-elevated border border-border text-foreground hover:border-foreground/40 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { SectionTitle } from "./SectionTitle";
import { MapPin, Calendar } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Timeline() {
  const { t } = useI18n();
  const items = [
    {
      role: t("tl.j1.role"),
      company: "C.E.S.A.R",
      period: t("tl.j1.period"),
      location: t("tl.j1.location"),
      description: t("tl.j1.desc"),
      skills: ["Selenium", "Appium", "Pytest", "Python", t("skill.testAutomation"), t("skill.manualTesting")],
    },
    {
      role: t("tl.j2.role"),
      company: "Espro — Unilever Brasil Ltda",
      period: t("tl.j2.period"),
      location: t("tl.j2.location"),
      description: t("tl.j2.desc"),
      skills: [t("skill.teamwork"), t("skill.logistics"), t("skill.processMgmt"), t("skill.communication")],
    },
    {
      role: t("tl.j3.role"),
      company: "Agência Combogó — UNICAP",
      period: t("tl.j3.period"),
      location: t("tl.j3.location"),
      description: t("tl.j3.desc"),
      skills: ["Unity", "C#", t("skill.gameDev"), t("skill.gameDesign"), t("skill.prototyping")],
    },
    {
      role: t("tl.j4.role"),
      company: "PlenoGroup",
      period: t("tl.j4.period"),
      location: t("tl.j4.location"),
      description: t("tl.j4.desc"),
      skills: [t("skill.itSupport"), t("skill.hrAssist"), t("skill.teamwork"), t("skill.organization")],
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle index={t("tl.index")} title={t("tl.title")} />

        <div className="relative">
          <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-border" />
          <div className="space-y-6">
            {items.map((it, idx) => (
              <div key={it.role + idx} className="relative pl-10 sm:pl-14">
                <div className="absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-background border-2 border-foreground flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-foreground" />
                </div>
                <div className="card-glass card-glass-hover rounded-xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-foreground text-lg">{it.role}</h3>
                    <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {it.period}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/80">{it.company}</p>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" />
                    {it.location}
                  </p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {it.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {it.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] px-2 py-0.5 rounded bg-surface-elevated border border-border text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

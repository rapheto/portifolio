import { SectionTitle } from "./SectionTitle";
import { GraduationCap, Calendar } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Education() {
  const { t } = useI18n();
  const education = [
    {
      school: "CESAR School",
      course: t("edu.cesar.course"),
      period: t("edu.cesar.period"),
      note: t("edu.cesar.note"),
      status: t("edu.status.ongoing"),
      ongoing: true,
      initials: "CS",
    },
    {
      school: "Universidade Católica de Pernambuco",
      course: t("edu.unicap.course"),
      period: t("edu.unicap.period"),
      note: t("edu.unicap.note"),
      status: t("edu.status.done"),
      ongoing: false,
      initials: "UC",
    },
  ];

  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle index={t("edu.index")} title={t("edu.title")} />

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((e) => (
            <div key={e.school} className="card-glass card-glass-hover rounded-2xl p-7">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center font-mono font-bold text-lg bg-surface-elevated text-foreground border border-border">
                  {e.initials}
                </div>
                <span className={`font-mono text-xs px-3 py-1 rounded-full border ${e.ongoing ? "bg-foreground text-background border-foreground" : "bg-surface-elevated text-muted-foreground border-border"}`}>
                  {e.status}
                </span>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-1">{e.school}</h3>
              <div className="flex items-center gap-1.5 text-sm text-foreground font-mono mb-3">
                <GraduationCap className="w-4 h-4" />
                {e.course}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono mb-4">
                <Calendar className="w-3.5 h-3.5" />
                {e.period}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{e.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

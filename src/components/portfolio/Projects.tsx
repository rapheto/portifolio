import { SectionTitle } from "./SectionTitle";
import { Github, Star, ExternalLink, FileSpreadsheet, Gamepad2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Projects() {
  const { t } = useI18n();
  const projects = [
    {
      name: "QA Swag Labs Challenge",
      description: t("projects.p1.desc"),
      tags: ["Python", "Pytest", "QA", "Automation"],
      href: "https://github.com/rapheto/qa_swag_labs",
      icon: Github,
      source: "github.com/rapheto",
      stars: 1,
    },
    {
      name: "Projetos Testes Automatizados",
      description: t("projects.p2.desc"),
      tags: ["Python", "Selenium", "QA"],
      href: "https://github.com/raphael-cesar/projeto-automacao",
      icon: Github,
      source: "github.com/raphael-cesar",
      stars: 1,
    },
    {
      name: "QA Swag Labs Test Cases",
      description: t("projects.p3.desc"),
      tags: ["QA", "Test Cases", "Documentation"],
      href: "https://docs.google.com/spreadsheets/d/16VLnkQtydalAANQb1jFuHWIcO4-PANUaIxsWwz3rC1c/edit?usp=sharing",
      icon: FileSpreadsheet,
      source: "Google Sheets",
      stars: 0,
    },
    {
      name: "Leleu e a Peleja do Amor",
      description: t("projects.p4.desc"),
      tags: ["Unity", "C#", "Game Dev"],
      href: "https://rapheto.itch.io/leleupeleja",
      icon: Gamepad2,
      source: "itch.io",
      stars: 0,
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle index={t("projects.index")} title={t("projects.title")} />

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => {
            const Icon = p.icon;
            return (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glass card-glass-hover rounded-2xl p-6 group flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-elevated text-foreground border border-border">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-mono font-semibold text-foreground">
                        {p.name}
                      </h3>
                      <p className="text-xs text-muted-foreground font-mono">{p.source}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    {p.stars > 0 && (
                      <span className="flex items-center gap-1 text-xs font-mono">
                        <Star className="w-3.5 h-3.5" /> {p.stars}
                      </span>
                    )}
                    <ExternalLink className="w-4 h-4 group-hover:text-foreground transition-colors" />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{p.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-elevated border border-border text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

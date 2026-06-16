import { SectionTitle } from "./SectionTitle";
import { TestTube2, Smartphone } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Skills() {
  const { t } = useI18n();
  const groups = [
    {
      title: t("skills.group.automation"),
      icon: TestTube2,
      items: ["Selenium", "Appium", "XCUITest", "Pytest", "Cypress"],
    },
    {
      title: t("skills.group.types"),
      icon: Smartphone,
      items: [
        t("skills.item.manual"),
        t("skills.item.api"),
        t("skills.item.mobile"),
        t("skills.item.web"),
        t("skills.item.mgmt"),
      ],
    },
  ];
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle
          index={t("skills.index")}
          title={t("skills.title")}
          subtitle={t("skills.subtitle")}
        />

        <div className="grid sm:grid-cols-2 gap-5">
          {groups.map((g) => (
            <div key={g.title} className="card-glass card-glass-hover rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-elevated text-foreground border border-border">
                  <g.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground">{g.title}</h3>
              </div>
              <ul className="space-y-2">
                {g.items.map((i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="text-foreground text-xs">▸</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

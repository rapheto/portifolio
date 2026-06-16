import { SectionTitle } from "./SectionTitle";
import { Mail, Phone, MapPin, Github, Linkedin, Gamepad2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Contact() {
  const { t } = useI18n();
  const items = [
    { icon: Mail, label: t("contact.label.email"), value: "rapheto@hotmail.com", href: "mailto:rapheto@hotmail.com" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/rapheto", href: "https://linkedin.com/in/rapheto" },
    { icon: MapPin, label: t("contact.label.location"), value: t("contact.location.value") },
    { icon: Github, label: "GitHub", value: "github.com/rapheto", href: "https://github.com/rapheto" },
    { icon: Phone, label: t("contact.label.phone"), value: "(81) 99600-4268", href: "tel:+5581996004268" },
    { icon: Gamepad2, label: "Itch.io", value: "rapheto.itch.io", href: "https://rapheto.itch.io/" },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle index={t("contact.index")} title={t("contact.title")} subtitle={t("contact.subtitle")} />

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="card-glass rounded-2xl p-6 lg:p-8 flex flex-col justify-between">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-foreground">
              {t("contact.quote.a")}{" "}
              {t("contact.quote.b")}
              <span className="underline decoration-foreground/40 underline-offset-4">{t("contact.quote.habit")}</span>
              {t("contact.quote.c")}
            </p>
            <a
              href="mailto:rapheto@hotmail.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-mono text-foreground hover:underline"
            >
              <Mail className="w-4 h-4" />
              {t("contact.cta")}
            </a>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {items.map((c) => {
              const Wrapper: any = c.href ? "a" : "div";
              return (
                <Wrapper
                  key={c.label}
                  {...(c.href ? { href: c.href, target: c.href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" } : {})}
                  className="card-glass card-glass-hover rounded-xl p-5 flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-elevated border border-border text-foreground flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-xs text-muted-foreground">{c.label}</div>
                    <div className="text-sm text-foreground truncate">{c.value}</div>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

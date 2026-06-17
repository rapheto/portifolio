import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import portrait from "@/assets/raphael.webp";

const phrases = [
  "QA Engineer",
  "Test Automation",
  "CTFL — ISTQB® Certified",
  "Selenium | Appium | Pytest",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = phrases[i];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((i + 1) % phrases.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="font-mono text-foreground">
      {text}
      <span className="cursor-blink h-5 align-middle" />
    </span>
  );
}

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-[auto_1fr] gap-12 lg:gap-16 items-center relative">
        <div className="mx-auto lg:mx-0 animate-fade-up">
          <div className="relative">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-border bg-surface overflow-hidden">
              <img
                src={portrait}
                alt="Raphael Miranda"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/50 font-mono text-xs text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-foreground" />
            {t("hero.greeting")}
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Raphael Miranda
          </h1>

          <div className="text-lg sm:text-xl h-7">
            <Typewriter />
          </div>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {t("hero.description")}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all"
            >
              {t("hero.cta")}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6 max-w-sm">
            <div className="card-glass rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-foreground">1y</div>
              <div className="text-xs text-muted-foreground mt-0.5">{t("hero.stat.experience")}</div>
            </div>
            <div className="card-glass rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-foreground">ISTQB</div>
              <div className="text-xs text-muted-foreground mt-0.5">{t("hero.stat.certified")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

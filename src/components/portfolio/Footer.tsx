import { Download } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer id="cv" className="border-t border-border mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="card-glass rounded-2xl p-8 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-foreground">{t("footer.title")}</h3>
            <p className="text-sm text-muted-foreground mt-1">{t("footer.sub")}</p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all"
          >
            <Download className="w-4 h-4" />
            {t("footer.cta")}
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 <span className="text-foreground">Raphael Miranda</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

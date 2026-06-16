export function SectionTitle({ index, title, subtitle }: { index: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-sm text-primary">{index}.</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
          {title}
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-border via-border to-transparent ml-2" />
      </div>
      {subtitle && <p className="text-muted-foreground max-w-2xl">{subtitle}</p>}
    </div>
  );
}

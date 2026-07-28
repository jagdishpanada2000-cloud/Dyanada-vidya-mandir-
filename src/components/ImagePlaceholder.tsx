import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

export function ImagePlaceholder({
  label,
  ratio = "4/3",
  className,
}: {
  label?: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      style={{ aspectRatio: ratio }}
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-border bg-beige",
        "flex items-center justify-center",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-3 rounded-xl border border-dashed border-border/80"
      />
      <div className="relative flex flex-col items-center gap-2 px-6 text-center">
        <ImageIcon className="h-6 w-6 text-gold" strokeWidth={1.4} />
        {label ? (
          <span className="text-[0.7rem] tracking-[0.18em] uppercase text-muted-foreground">
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
}

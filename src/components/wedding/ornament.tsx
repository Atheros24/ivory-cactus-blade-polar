import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export function Ornament({ className }: { className?: string }) {
  return (
    <div className={cn("ornament mx-auto w-48", className)} aria-hidden="true">
      <Heart className="size-3.5 fill-rose/80 text-rose" strokeWidth={1.5} />
    </div>
  );
}

export function Monogram({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mx-auto flex size-16 items-center justify-center rounded-full border border-rose/40 text-cream",
        className,
      )}
      aria-hidden="true"
    >
      <span className="font-script text-3xl leading-none">R</span>
      <span className="font-script text-lg leading-none opacity-70">&</span>
      <span className="font-script text-3xl leading-none">F</span>
    </div>
  );
}

import { Mail } from "lucide-react";
import { WEDDING } from "@/lib/wedding";
import { Ornament } from "./ornament";

export function Cover({
  away,
  guestName,
  onOpen,
}: {
  away: boolean;
  guestName?: string;
  onOpen: () => void;
}) {
  return (
    <div
      className={`invite-cover fixed inset-0 z-50 overflow-hidden ${away ? "is-away" : ""}`}
      aria-hidden={away}
      inert={away}
    >
      <img
        src={WEDDING.photos.cover}
        alt=""
        className="ken-burns absolute inset-0 size-full object-cover object-[center_20%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-wine/30 via-wine/10 to-wine/80" />
      <div className="cover-vignette absolute inset-0" />

      <div className="relative flex h-full flex-col items-center justify-between px-6 py-10 text-center sm:py-14">
        <div className="flex flex-col items-center gap-2 pt-4">
          <p className="font-display text-[0.7rem] font-medium tracking-[0.42em] text-cream/80 uppercase">
            The Wedding of
          </p>
          <h1 className="font-script text-[3.6rem] leading-none text-cream sm:text-7xl">
            {WEDDING.groom.short}{" "}
            <span className="text-4xl text-rose">&</span> {WEDDING.bride.short}
          </h1>
          <Ornament className="mt-2 w-36" />
          <p className="mt-1 font-display text-lg tracking-[0.28em] text-cream/85">
            {WEDDING.dateLabel}
          </p>
        </div>

        <div className="flex w-full max-w-sm flex-col items-center gap-5 pb-4">
          <div className="space-y-1">
            <p className="font-display text-sm tracking-wide text-cream/70 italic">
              Kepada Yth.
            </p>
            <p className="font-display text-xs tracking-[0.18em] text-cream/55 uppercase">
              Bapak/Ibu/Saudara/i
            </p>
            <p className="font-display mt-2 text-2xl font-medium text-cream">
              {guestName || "Tamu Undangan"}
            </p>
          </div>
          <button
            type="button"
            onClick={onOpen}
            className="btn-lift inline-flex min-h-12 items-center gap-2.5 rounded-full bg-cream px-8 py-3 font-body text-sm font-medium tracking-[0.14em] text-maroon uppercase transition-transform duration-150 ease-out active:scale-[0.96]"
          >
            <Mail className="size-4" strokeWidth={1.75} />
            Buka Undangan
          </button>
        </div>
      </div>
    </div>
  );
}

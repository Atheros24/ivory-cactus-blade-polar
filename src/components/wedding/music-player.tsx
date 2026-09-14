import { Pause, Play } from "lucide-react";
import { WEDDING } from "@/lib/wedding";

export function MusicPlayer({
  playing,
  onToggle,
}: {
  playing: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={playing ? "Jeda musik" : "Putar musik"}
      className="fixed bottom-5 left-4 z-40 flex items-center gap-2 rounded-full border border-cream/20 bg-wine/80 py-2 pr-3 pl-2 text-cream shadow-lg backdrop-blur-md transition-transform duration-150 active:scale-[0.96] sm:left-6"
    >
      <span
        className={`relative flex size-10 items-center justify-center overflow-hidden rounded-full bg-maroon ${playing ? "vinyl-spin" : ""}`}
      >
        <img
          src={WEDDING.photos.cover}
          alt=""
          className="size-full object-cover opacity-70"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-wine/30">
          {playing ? (
            <Pause className="size-3.5 fill-cream text-cream" />
          ) : (
            <Play className="size-3.5 fill-cream text-cream" />
          )}
        </span>
      </span>
      <span className="hidden pr-1 text-left sm:block">
        <span className="block font-display text-sm leading-tight">
          {WEDDING.music.title}
        </span>
        <span className="block text-[0.65rem] tracking-wide text-cream/60">
          {WEDDING.music.artist}
        </span>
      </span>
    </button>
  );
}

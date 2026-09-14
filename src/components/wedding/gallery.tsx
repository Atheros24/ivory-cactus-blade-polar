import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { WEDDING } from "@/lib/wedding";
import { Reveal } from "./reveal";
import { Ornament } from "./ornament";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const photos = WEDDING.gallery;

  useEffect(() => {
    if (active === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") {
        setActive((i) => (i === null ? i : (i + 1) % photos.length));
      }
      if (e.key === "ArrowLeft") {
        setActive((i) =>
          i === null ? i : (i - 1 + photos.length) % photos.length,
        );
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, photos.length]);

  return (
    <section id="gallery" className="bg-ivory px-5 py-20 text-ink sm:px-8">
      <Reveal className="mx-auto max-w-lg text-center">
        <p className="text-[0.7rem] tracking-[0.38em] text-maroon-mid uppercase">
          Momen Kami
        </p>
        <h2 className="font-display mt-2 text-4xl text-maroon italic sm:text-5xl">
          Galeri Foto
        </h2>
        <Ornament className="mt-4 text-maroon-mid" />
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {photos.map((p, i) => (
          <Reveal key={p.src} delay={i * 50}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="gallery-tile aspect-[3/4] block w-full overflow-hidden rounded-lg"
            >
              <img
                src={p.src}
                alt={p.alt}
                className="size-full object-cover"
                loading="lazy"
              />
            </button>
          </Reveal>
        ))}
      </div>

      {active !== null ? (
        <div
          className="lightbox-enter fixed inset-0 z-50 flex items-center justify-center bg-wine/92 p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Pratinjau foto"
        >
          <button
            type="button"
            className="absolute top-4 right-4 flex size-11 items-center justify-center rounded-full bg-cream/10 text-cream"
            onClick={() => setActive(null)}
            aria-label="Tutup"
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            className="absolute left-2 flex size-11 items-center justify-center rounded-full bg-cream/10 text-cream sm:left-6"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) =>
                i === null ? i : (i - 1 + photos.length) % photos.length,
              );
            }}
            aria-label="Sebelumnya"
          >
            <ChevronLeft className="size-6" />
          </button>
          <img
            src={photos[active].src}
            alt={photos[active].alt}
            className="max-h-[82vh] max-w-[92vw] rounded-md object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="absolute right-2 flex size-11 items-center justify-center rounded-full bg-cream/10 text-cream sm:right-6"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => (i === null ? i : (i + 1) % photos.length));
            }}
            aria-label="Berikutnya"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>
      ) : null}
    </section>
  );
}

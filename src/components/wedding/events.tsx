import { useEffect, useState } from "react";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { WEDDING } from "@/lib/wedding";
import { Reveal } from "./reveal";
import { Ornament } from "./ornament";

type Remain = { d: number; h: number; m: number; s: number };

function remaining(target: number): Remain {
  const diff = Math.max(0, target - Date.now());
  const d = Math.floor(diff / 86_400_000);
  const h = Math.floor((diff % 86_400_000) / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const s = Math.floor((diff % 60_000) / 1000);
  return { d, h, m, s };
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex min-w-16 flex-col items-center">
      <span className="tick font-display text-3xl font-medium text-cream sm:text-4xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[0.65rem] tracking-[0.18em] text-rose uppercase">
        {label}
      </span>
    </div>
  );
}

export function Events() {
  const target = new Date(WEDDING.targetIso).getTime();
  const [t, setT] = useState<Remain>({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    function tick() {
      setT(remaining(target));
    }
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [target]);

  return (
    <section id="date" className="bg-wine px-5 py-20 sm:px-8">
      <Reveal className="mx-auto max-w-lg text-center">
        <p className="text-[0.7rem] tracking-[0.38em] text-rose uppercase">
          Save The Date
        </p>
        <h2 className="font-display mt-3 text-4xl text-cream italic sm:text-5xl">
          {WEDDING.dateLong}
        </h2>
        <Ornament className="mt-5" />
        <p className="mx-auto mt-5 max-w-md font-display text-base leading-relaxed text-cream/75 italic">
          {WEDDING.grateful}
        </p>
      </Reveal>

      <Reveal delay={80} className="mx-auto mt-10 flex max-w-md justify-center gap-5 sm:gap-8">
        <Unit value={t.d} label="Hari" />
        <Unit value={t.h} label="Jam" />
        <Unit value={t.m} label="Menit" />
        <Unit value={t.s} label="Detik" />
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-3xl gap-6 md:grid-cols-2">
        <EventCard
          kicker="Ijab Kabul"
          event={WEDDING.akad}
          delay={60}
        />
        <EventCard
          kicker="Walimatul Ursy"
          event={WEDDING.resepsi}
          delay={140}
        />
      </div>

      <Reveal className="mt-10 text-center">
        <a
          href={WEDDING.calendarUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-cream/25 px-6 text-sm tracking-[0.12em] text-cream uppercase transition-colors hover:bg-cream/10"
        >
          <CalendarDays className="size-4" />
          Simpan Tanggal
        </a>
      </Reveal>
    </section>
  );
}

function EventCard({
  kicker,
  event,
  delay,
}: {
  kicker: string;
  event: {
    title: string;
    date: string;
    time: string;
    place: string;
    address?: string;
    maps: string;
  };
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <article className="rounded-xl border border-cream/15 bg-maroon/30 px-6 py-8 text-center">
        <p className="text-[0.65rem] tracking-[0.32em] text-rose uppercase">
          {kicker}
        </p>
        <h3 className="font-display mt-2 text-3xl text-cream italic">
          {event.title}
        </h3>
        <Ornament className="mt-4 w-28" />
        <ul className="mt-6 space-y-3 text-sm text-cream/85">
          <li className="flex items-start justify-center gap-2">
            <CalendarDays className="mt-0.5 size-4 shrink-0 text-rose" />
            <span>{event.date}</span>
          </li>
          <li className="flex items-start justify-center gap-2">
            <Clock className="mt-0.5 size-4 shrink-0 text-rose" />
            <span>Pukul {event.time}</span>
          </li>
          <li className="flex items-start justify-center gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0 text-rose" />
            <span>
              {event.place}
              {event.address ? (
                <>
                  <br />
                  <span className="text-cream/60">{event.address}</span>
                </>
              ) : null}
            </span>
          </li>
        </ul>
        <a
          href={event.maps}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex min-h-11 items-center rounded-full bg-cream px-5 text-xs font-medium tracking-[0.16em] text-maroon uppercase transition-transform duration-150 active:scale-[0.96]"
        >
          Lihat Lokasi
        </a>
      </article>
    </Reveal>
  );
}

import { useEffect, useRef, useState } from "react";
import { WEDDING } from "@/lib/wedding";
import { Cover } from "./cover";
import { Events } from "./events";
import { Gallery } from "./gallery";
import { Gift } from "./gift";
import { MusicPlayer } from "./music-player";
import { Monogram, Ornament } from "./ornament";
import { Petals } from "./petals";
import { Reveal } from "./reveal";
import { Rsvp } from "./rsvp";

export function Invitation({ guestName }: { guestName?: string }) {
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  function open() {
    setOpened(true);
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.55;
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }

  function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  }

  return (
    <div className="relative bg-wine text-cream">
      <audio
        ref={audioRef}
        src={WEDDING.music.src}
        loop
        preload="auto"
        playsInline
      />
      <Cover away={opened} guestName={guestName} onOpen={open} />
      {opened ? <Petals /> : null}

      <main>
        <Hero />
        <Quote />
        <Couple />
        <Events />
        <Story />
        <Gallery />
        <Gift />
        <Rsvp />
        <Closing />
      </main>

      {opened ? (
        <MusicPlayer playing={playing} onToggle={toggleMusic} />
      ) : null}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      <img
        src={WEDDING.photos.cover}
        alt="Rizal dan Farah"
        className="ken-burns absolute inset-0 size-full object-cover object-[center_18%]"
      />
      <div className="hero-veil absolute inset-0" />
      <div className="relative z-10 w-full px-6 pb-16 text-center">
        <Reveal>
          <p className="text-[0.7rem] tracking-[0.42em] text-cream/75 uppercase">
            The Wedding of
          </p>
          <h2 className="font-script mt-2 text-6xl leading-none text-cream sm:text-7xl">
            {WEDDING.groom.short}{" "}
            <span className="text-4xl text-rose">&</span> {WEDDING.bride.short}
          </h2>
          <Ornament className="mt-5 w-40" />
          <p className="mt-4 font-display text-xl tracking-[0.32em] text-cream">
            {WEDDING.dateLabel}
          </p>
          <a
            href="#date"
            className="mt-6 inline-block text-xs tracking-[0.22em] text-rose uppercase underline-offset-4 hover:underline"
          >
            Save The Date
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="bg-ivory px-6 py-20 text-ink">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Monogram className="mb-8 size-14 border-maroon/25 text-maroon" />
        <blockquote className="font-display text-xl leading-relaxed text-ink/85 italic sm:text-2xl">
          “{WEDDING.quote}”
        </blockquote>
        <p className="mt-6 text-xs tracking-[0.22em] text-maroon-mid uppercase">
          {WEDDING.quoteRef}
        </p>
      </Reveal>
    </section>
  );
}

function Couple() {
  return (
    <section id="couple" className="bg-cream px-5 py-20 text-ink sm:px-8">
      <Reveal className="mx-auto max-w-lg text-center">
        <p className="text-[0.7rem] tracking-[0.38em] text-maroon-mid uppercase">
          Bride & Groom
        </p>
        <h2 className="font-display mt-2 text-4xl text-maroon italic sm:text-5xl">
          The Wedding of
        </h2>
        <Ornament className="mt-4 text-maroon-mid" />
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted">
          {WEDDING.intro}
        </p>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-4xl gap-12 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <Person
          name={WEDDING.groom.full}
          parents={WEDDING.groom.parents}
          photo={WEDDING.groom.photo}
          delay={40}
        />
        <Reveal className="hidden text-center md:block">
          <span className="font-script text-5xl text-maroon">&</span>
        </Reveal>
        <Person
          name={WEDDING.bride.full}
          parents={WEDDING.bride.parents}
          photo={WEDDING.bride.photo}
          delay={120}
        />
      </div>
    </section>
  );
}

function Person({
  name,
  parents,
  photo,
  delay,
}: {
  name: string;
  parents: string;
  photo: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="text-center">
      <div className="mx-auto aspect-[3/4] max-w-xs overflow-hidden rounded-t-full border-[6px] border-maroon/15 shadow-md">
        <img src={photo} alt={name} className="size-full object-cover object-top" />
      </div>
      <h3 className="font-script mt-6 text-4xl text-maroon">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{parents}</p>
    </Reveal>
  );
}

function Story() {
  return (
    <section className="relative overflow-hidden bg-wine">
      <div className="grid md:grid-cols-2">
        <div className="relative min-h-[420px] md:min-h-full">
          <img
            src={WEDDING.photos.story}
            alt="Rizal dan Farah"
            className="absolute inset-0 size-full object-cover object-top"
          />
        </div>
        <div className="px-6 py-16 sm:px-10 sm:py-20">
          <Reveal>
            <p className="text-[0.7rem] tracking-[0.38em] text-rose uppercase">
              Perjalanan Kami
            </p>
            <h2 className="font-display mt-2 text-4xl text-cream italic sm:text-5xl">
              Love Story
            </h2>
            <Ornament className="mt-4 w-32" />
          </Reveal>
          <div className="mt-8 space-y-5 text-sm leading-relaxed text-cream/80 sm:text-base">
            {WEDDING.story.map((p, i) => (
              <Reveal key={i} delay={i * 70}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="relative min-h-[88svh] overflow-hidden">
      <img
        src={WEDDING.photos.closing}
        alt="Rizal dan Farah"
        className="ken-burns absolute inset-0 size-full object-cover object-top"
      />
      <div className="hero-veil absolute inset-0" />
      <div className="relative z-10 flex min-h-[88svh] flex-col items-center justify-end px-6 pb-16 text-center">
        <Reveal>
          <p className="mx-auto max-w-md font-display text-lg leading-relaxed text-cream/90 italic sm:text-xl">
            {WEDDING.closing}
          </p>
          <p className="mt-8 text-[0.7rem] tracking-[0.28em] text-rose uppercase">
            Kami yang berbahagia
          </p>
          <p className="font-script mt-2 text-5xl text-cream">
            {WEDDING.names}
          </p>
          <Ornament className="mt-6 w-36" />
          <p className="mt-6 text-xs tracking-[0.2em] text-cream/55">
            {WEDDING.dateLong} · Situbondo
          </p>
        </Reveal>
      </div>
    </section>
  );
}

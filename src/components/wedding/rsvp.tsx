import { useEffect, useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { WISHES_KEY, type Wish } from "@/lib/wedding";
import { Reveal } from "./reveal";
import { Ornament } from "./ornament";

function loadWishes(): Wish[] {
  try {
    const raw = localStorage.getItem(WISHES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Wish[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function Rsvp() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setWishes(loadWishes());
  }, []);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    const wish: Wish = {
      id: crypto.randomUUID(),
      name: trimmed,
      message: message.trim(),
      attending,
      at: Date.now(),
    };
    const next = [wish, ...wishes].slice(0, 80);
    setWishes(next);
    localStorage.setItem(WISHES_KEY, JSON.stringify(next));
    setName("");
    setMessage("");
    setSent(true);
    window.setTimeout(() => setSent(false), 2500);
  }

  return (
    <section id="rsvp" className="bg-ivory px-5 py-20 text-ink sm:px-8">
      <Reveal className="mx-auto max-w-lg text-center">
        <p className="text-[0.7rem] tracking-[0.38em] text-maroon-mid uppercase">
          Ucapkan Sesuatu
        </p>
        <h2 className="font-display mt-2 text-4xl text-maroon italic sm:text-5xl">
          Berikan Ucapan & Doa Restu
        </h2>
        <Ornament className="mt-4 text-maroon-mid" />
      </Reveal>

      <Reveal className="mx-auto mt-10 max-w-lg">
        <form
          onSubmit={onSubmit}
          className="rounded-xl border border-line bg-cream p-5 sm:p-7"
        >
          <label className="block text-xs tracking-[0.16em] text-muted uppercase">
            Nama Anda
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 min-h-12 w-full rounded-md border border-line bg-ivory px-3 font-body text-base text-ink outline-none focus:border-maroon"
              placeholder="Tulis nama Anda"
            />
          </label>
          <fieldset className="mt-5">
            <legend className="text-xs tracking-[0.16em] text-muted uppercase">
              Konfirmasi Kehadiran
            </legend>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {(
                [
                  ["yes", "Hadir"],
                  ["no", "Tidak Hadir"],
                ] as const
              ).map(([val, label]) => (
                <label
                  key={val}
                  className={`flex min-h-12 cursor-pointer items-center justify-center rounded-md border text-sm tracking-wide transition-colors ${
                    attending === val
                      ? "border-maroon bg-maroon text-cream"
                      : "border-line bg-ivory text-ink"
                  }`}
                >
                  <input
                    type="radio"
                    name="attending"
                    value={val}
                    checked={attending === val}
                    onChange={() => setAttending(val)}
                    className="sr-only"
                  />
                  {label}
                </label>
              ))}
            </div>
          </fieldset>
          <label className="mt-5 block text-xs tracking-[0.16em] text-muted uppercase">
            Ucapan / Doa
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="mt-2 w-full rounded-md border border-line bg-ivory px-3 py-3 font-body text-base text-ink outline-none focus:border-maroon"
              placeholder="Tulis doa dan ucapan untuk pengantin"
            />
          </label>
          <button
            type="submit"
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-maroon text-sm font-medium tracking-[0.16em] text-cream uppercase transition-transform duration-150 active:scale-[0.96]"
          >
            <Send className="size-4" />
            {sent ? "Terkirim" : "Kirim"}
          </button>
        </form>
      </Reveal>

      <div className="mx-auto mt-10 max-w-lg space-y-3">
        {wishes.length === 0 ? (
          <p className="text-center text-sm text-muted">
            Jadilah yang pertama memberikan doa restu.
          </p>
        ) : (
          wishes.map((w, i) => (
            <Reveal key={w.id} delay={Math.min(i, 6) * 40}>
              <article className="rounded-lg border border-line bg-cream px-5 py-4">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-lg text-maroon">{w.name}</h3>
                  <span className="text-[0.65rem] tracking-[0.14em] text-muted uppercase">
                    {w.attending === "yes" ? "Hadir" : "Berhalangan"}
                  </span>
                </div>
                {w.message ? (
                  <p className="mt-2 text-sm leading-relaxed text-ink/80">
                    {w.message}
                  </p>
                ) : null}
              </article>
            </Reveal>
          ))
        )}
      </div>
    </section>
  );
}

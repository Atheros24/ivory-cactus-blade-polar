import { useState } from "react";
import { Check, Copy, Gift as GiftIcon } from "lucide-react";
import { WEDDING } from "@/lib/wedding";
import { Reveal } from "./reveal";
import { Ornament } from "./ornament";

export function Gift() {
  const [open, setOpen] = useState(false);

  return (
    <section id="gift" className="bg-wine px-5 py-20 sm:px-8">
      <Reveal className="mx-auto max-w-lg text-center">
        <p className="text-[0.7rem] tracking-[0.38em] text-rose uppercase">
          Tanda Kasih
        </p>
        <h2 className="font-display mt-2 text-4xl text-cream italic sm:text-5xl">
          Amplop Digital
        </h2>
        <Ornament className="mt-4" />
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-cream/75">
          {WEDDING.giftNote}
        </p>
      </Reveal>

      {!open ? (
        <Reveal className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-cream px-8 text-sm font-medium tracking-[0.16em] text-maroon uppercase transition-transform duration-150 active:scale-[0.96]"
          >
            <GiftIcon className="size-4" />
            Buka Amplop
          </button>
        </Reveal>
      ) : (
        <div className="mx-auto mt-10 grid max-w-3xl gap-5 md:grid-cols-2">
          {WEDDING.gifts.map((g, i) => (
            <Reveal key={g.number} delay={i * 80}>
              <BankCard bank={g.bank} bankFull={g.bankFull} name={g.name} number={g.number} />
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}

function BankCard({
  bank,
  bankFull,
  name,
  number,
}: {
  bank: string;
  bankFull: string;
  name: string;
  number: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(number);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <article className="rounded-xl border border-cream/15 bg-maroon p-6 text-cream">
      <span className="inline-flex rounded-full bg-cream/15 px-3 py-1 text-xs tracking-[0.2em] uppercase">
        {bank}
      </span>
      <p className="mt-7 text-[0.65rem] tracking-[0.2em] text-cream/55 uppercase">
        Nomor Rekening
      </p>
      <p className="tick mt-1 font-display text-2xl tracking-wide sm:text-3xl">
        {number}
      </p>
      <p className="mt-4 font-display text-xl text-cream">{name}</p>
      <p className="mt-0.5 text-xs tracking-wide text-cream/55">{bankFull}</p>
      <button
        type="button"
        onClick={copy}
        className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-cream text-sm font-medium tracking-[0.12em] text-maroon uppercase transition-transform duration-150 active:scale-[0.96]"
      >
        {copied ? (
          <>
            <Check className="size-4" />
            Tersalin
          </>
        ) : (
          <>
            <Copy className="size-4" />
            Salin Rekening
          </>
        )}
      </button>
    </article>
  );
}

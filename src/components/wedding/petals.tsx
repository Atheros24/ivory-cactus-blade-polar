const PETALS = [
  { left: "6%", delay: "0s", dur: "14s", drift: "22px", size: 11 },
  { left: "14%", delay: "2.1s", dur: "16s", drift: "-18px", size: 9 },
  { left: "22%", delay: "5s", dur: "13s", drift: "30px", size: 13 },
  { left: "31%", delay: "1.2s", dur: "18s", drift: "-12px", size: 10 },
  { left: "41%", delay: "7s", dur: "15s", drift: "26px", size: 12 },
  { left: "52%", delay: "3.4s", dur: "17s", drift: "-24px", size: 8 },
  { left: "61%", delay: "0.8s", dur: "14s", drift: "16px", size: 11 },
  { left: "70%", delay: "4.6s", dur: "16s", drift: "-28px", size: 14 },
  { left: "78%", delay: "2.8s", dur: "13s", drift: "20px", size: 9 },
  { left: "86%", delay: "6.2s", dur: "19s", drift: "-14px", size: 12 },
  { left: "93%", delay: "1.6s", dur: "15s", drift: "18px", size: 10 },
  { left: "48%", delay: "8.4s", dur: "12s", drift: "8px", size: 7 },
];

export function Petals() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
      aria-hidden="true"
    >
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.dur,
            width: p.size,
            height: p.size * 1.4,
            ["--drift" as string]: p.drift,
          }}
        />
      ))}
    </div>
  );
}

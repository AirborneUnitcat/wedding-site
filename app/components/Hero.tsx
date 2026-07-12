import { useEffect, useState, useCallback } from "react";

const WEDDING_DATE = new Date("2027-12-05T13:00:00");
const WEDDING_DATE_FORMATTED = WEDDING_DATE.toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

function calcTimeLeft(target: Date) {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownTile({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-3xl sm:text-4xl font-bold text-autumn-orange tabular-nums">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-xs uppercase tracking-widest text-white/70">
        {label}
      </span>
    </div>
  );
}

export function Hero() {
  const [timeLeft, setTimeLeft] = useState(() => calcTimeLeft(WEDDING_DATE));

  const tick = useCallback(() => setTimeLeft(calcTimeLeft(WEDDING_DATE)), []);

  useEffect(() => {
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [tick]);

  const handleSaveDate = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//AmyAndMorgan//Wedding//EN",
      "BEGIN:VEVENT",
      "DTSTART:20271205T130000",
      "DTEND:20271205T233000",
      "SUMMARY:Amy & Morgan's Wedding",
      "DESCRIPTION:Celebrate the marriage of Amy and Morgan",
      "LOCATION:West Tower, Ormskirk",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "amy-and-morgan-wedding.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-choc via-terracotta to-olive-sage" />
      <div className="absolute inset-0 hero-overlay" />
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating decorative circles */}
      <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-autumn-orange/10 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center gap-8 px-4 text-center">
        {/* Names */}
        <div className="animate-[fadeIn_1s_ease-out]">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-4">
            Save the date
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
            Amy
            <span className="mx-4 inline-block text-autumn-orange">&amp;</span>
            Morgan
          </h1>
        </div>

        {/* Date */}
        <p className="text-lg text-white/80 tracking-wider animate-[fadeIn_1s_ease-out_0.2s_both]">
          {WEDDING_DATE_FORMATTED}
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4 animate-[fadeIn_1s_ease-out_0.3s_both]">
          <span className="block h-px w-16 bg-white/30" />
          <span className="text-white/50 text-2xl">✦</span>
          <span className="block h-px w-16 bg-white/30" />
        </div>

        {/* Countdown */}
        {timeLeft ? (
          <div className="flex gap-5 sm:gap-8 animate-[fadeIn_1s_ease-out_0.4s_both]">
            <CountdownTile value={timeLeft.days} label="Days" />
            <span className="text-3xl font-bold text-white/50 self-start mt-1">
              :
            </span>
            <CountdownTile value={timeLeft.hours} label="Hours" />
            <span className="text-3xl font-bold text-white/50 self-start mt-1">
              :
            </span>
            <CountdownTile value={timeLeft.minutes} label="Minutes" />
            <span className="text-3xl font-bold text-white/50 self-start mt-1">
              :
            </span>
            <CountdownTile value={timeLeft.seconds} label="Seconds" />
          </div>
        ) : (
          <p className="text-2xl text-autumn-orange font-semibold animate-[fadeIn_1s_ease-out_0.4s_both]">
            We're married! 🎉
          </p>
        )}

        {/* Save the Date button */}
        <button
          onClick={handleSaveDate}
          className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3 text-white font-medium transition-all hover:bg-white/10 hover:border-white/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-autumn-orange animate-[fadeIn_1s_ease-out_0.5s_both]"
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Save the Date
        </button>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white/40">
            <polyline points="7 13 12 18 17 13" />
            <polyline points="7 6 12 11 17 6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
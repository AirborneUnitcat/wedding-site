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
      <span className="text-4xl font-bold text-autumn-orange tabular-nums">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-sm uppercase tracking-widest text-taupe">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState(() => calcTimeLeft(WEDDING_DATE));

  const tick = useCallback(() => setTimeLeft(calcTimeLeft(WEDDING_DATE)), []);

  useEffect(() => {
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [tick]);

  return (
    <section className="flex flex-col items-center gap-8 py-16 px-4">
      {/* Wedding date */}
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-taupe mb-2">
          Save the date
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-choc">
          {WEDDING_DATE_FORMATTED}
        </h1>
      </div>

      {/* Countdown */}
      {timeLeft ? (
        <div className="flex gap-6 sm:gap-10">
          <CountdownTile value={timeLeft.days} label="Days" />
          <span className="text-4xl font-bold text-choc self-start mt-1">
            :
          </span>
          <CountdownTile value={timeLeft.hours} label="Hours" />
          <span className="text-4xl font-bold text-choc self-start mt-1">
            :
          </span>
          <CountdownTile value={timeLeft.minutes} label="Minutes" />
          <span className="text-4xl font-bold text-choc self-start mt-1">
            :
          </span>
          <CountdownTile value={timeLeft.seconds} label="Seconds" />
        </div>
      ) : (
        <p className="text-xl text-autumn-orange font-semibold">
          We're married! 🎉
        </p>
      )}
    </section>
  );
}
import { useInView } from "~/hooks/useInView";
import { ComingSoon } from "~/components/ComingSoon";

const SCHEDULE = [
  { time: "1:00 PM", event: "Guest Arrival & Welcome Drinks" },
  { time: "2:00 PM", event: "Ceremony" },
  { time: "3:00 PM", event: "Reception & Canapés" },
  { time: "4:30 PM", event: "Wedding Breakfast" },
  { time: "7:00 PM", event: "Evening Reception & Dancing" },
  { time: "9:00 PM", event: "Cake Cutting" },
  { time: "11:30 PM", event: "Carriages" },
];

function ScheduleItem({
  time,
  event,
  index,
}: {
  time: string;
  event: string;
  index: number;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={`flex items-start gap-4 transition-all duration-500 ease-out ${
        isInView
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-4"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex flex-col items-center">
        <div className="h-3 w-3 rounded-full bg-autumn-orange ring-4 ring-autumn-orange/20" />
        {index < SCHEDULE.length - 1 && (
          <div className="mt-1 w-px flex-1 bg-linear-to-b from-autumn-orange/40 to-transparent" />
        )}
      </div>
      <div className="pb-8">
        <span className="text-sm font-semibold text-autumn-orange">{time}</span>
        <p className="text-choc dark:text-gray-200 font-medium">{event}</p>
      </div>
    </div>
  );
}

export function BigDay() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const { ref: detailsRef, isInView: detailsInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="big-day"
      className="relative bg-linear-to-b from-white to-amber-50/30 dark:from-gray-950 dark:to-gray-900 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section header */}
        <div
          ref={ref}
          className={`mb-16 text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-choc dark:text-white mb-4">
            The Big Day
          </h2>
          <div className="flourish text-taupe mb-6" />
          <p className="text-taupe dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Everything you need to know for December 5th, 2027.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Venue Details */}
          <div
            ref={detailsRef}
            className={`space-y-6 transition-all duration-700 ${
              detailsInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="rounded-2xl bg-white dark:bg-gray-800/50 p-6 sm:p-8 card-hover border border-taupe/10">
              <h3 className="font-serif text-2xl font-semibold text-choc dark:text-white mb-4">
                Venue
              </h3>
              <div className="space-y-3 text-taupe dark:text-gray-300">
                <p className="text-lg font-medium text-choc dark:text-gray-100">
                  West Tower
                </p>
                <p>Ormskirk, Lancashire</p>
                <a
                  href="https://westtower.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-autumn-orange hover:text-terracotta font-medium transition-colors"
                >
                  View venue website
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-white dark:bg-gray-800/50 p-6 sm:p-8 card-hover border border-taupe/10">
              <h3 className="font-serif text-2xl font-semibold text-choc dark:text-white mb-4">
                Dress Code
              </h3>
              <p className="text-taupe dark:text-gray-300 leading-relaxed">
                No white, cream or baby pink. Look your best self, whatever that might look like.
              </p>
            </div>
          </div>

          {/* Schedule */}
          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-semibold text-choc dark:text-white mb-6">
              Schedule
            </h3>
            <ComingSoon
              message="Timeline Coming Soon"
              hint="We're finalising the order of the day. Check back closer to December for the full schedule — we promise it'll be worth the wait!"
            />

            {false && (
              <>
                {SCHEDULE.map((item, index) => (
                  <ScheduleItem
                    key={item.time}
                    time={item.time}
                    event={item.event}
                    index={index}
                  />
                ))}
              </>
            )}
          </div>
        </div>

        {/* Venue location */}
        <div className="mt-16">
          <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800/30 border border-taupe/10">
            <div className="grid sm:grid-cols-2">
              {/* Map area — visual card with address */}
              <div className="relative flex items-center justify-center min-h-[200px] bg-linear-to-br from-choc/5 to-autumn-orange/5 dark:from-choc/20 dark:to-autumn-orange/10 p-8">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-10 w-10 mx-auto text-autumn-orange mb-3"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <p className="text-choc dark:text-white font-semibold text-lg">
                    West Tower
                  </p>
                  <p className="text-taupe dark:text-gray-300 text-sm mt-1 leading-relaxed">
                    Mill Ln, Aughton
                    <br />
                    Ormskirk L39 7HJ
                  </p>
                </div>
              </div>

              {/* Directions card */}
              <div className="flex flex-col justify-center gap-4 p-8">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-choc dark:text-white">
                    Getting Here
                  </h3>
                  <p className="text-taupe dark:text-gray-300 text-sm mt-2 leading-relaxed">
                    West Tower is located just outside Ormskirk, with easy access from the
                    M58 and plenty of on-site parking.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Mill+Ln+Aughton+Ormskirk+L39+7HJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-autumn-orange px-6 py-3 text-sm text-white font-semibold transition-colors hover:bg-terracotta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-autumn-orange"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    Get Directions
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Mill+Ln+Aughton+Ormskirk+L39+7HJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-taupe/30 px-6 py-3 text-sm text-taupe dark:text-gray-300 font-medium transition-colors hover:border-taupe/50 hover:text-choc dark:hover:text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    View on Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
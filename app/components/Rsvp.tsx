import { useInView } from "~/hooks/useInView";
import { ComingSoon } from "~/components/ComingSoon";

export function Rsvp() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="rsvp"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-amber-50/30 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-autumn-orange/5 blur-3xl" />

      <div className="relative mx-auto max-w-2xl px-4 sm:px-6">
        {/* Section header */}
        <div
          ref={ref}
          className={`mb-12 text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-choc dark:text-white mb-4">
            Will You Join Us?
          </h2>
          <div className="flourish text-taupe mb-6" />
          <p className="text-taupe dark:text-gray-300 max-w-xl mx-auto text-lg leading-relaxed">
            Please RSVP by October 1st, 2027 so we can finalise our arrangements.
          </p>
        </div>

        {/* Form — coming soon */}
        <ComingSoon
          message="RSVP Opening Soon"
          hint="We're putting the final touches on our guest list and RSVP system. Invitations will be sent out closer to the date — we can't wait to hear if you can join us!"
        >
          <p>Please RSVP by October 1st, 2027 once invitations are sent.</p>
        </ComingSoon>
      </div>
    </section>
  );
}
import { useInView } from "~/hooks/useInView";
import { ComingSoon } from "~/components/ComingSoon";

export function Guestbook() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="guestbook"
      className="relative bg-white dark:bg-gray-950 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Section header */}
        <div
          ref={ref}
          className={`mb-12 text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-choc dark:text-white mb-4">
            Guestbook
          </h2>
          <div className="flourish text-taupe mb-6" />
          <p className="text-taupe dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Leave a message for the happy couple — we&apos;d love to read your
            kind words!
          </p>
        </div>

        {/* Guestbook — coming soon */}
        <ComingSoon
          message="Guestbook Coming Soon"
          hint="We're setting up a place for you to leave your messages and well-wishes. It'll be ready to sign before the big day!"
        />
      </div>
    </section>
  );
}
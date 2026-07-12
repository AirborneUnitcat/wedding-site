import { useInView } from "~/hooks/useInView";

export function GiftFund() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      id="gifts"
      className="relative bg-gradient-to-b from-white to-amber-50/30 dark:from-gray-950 dark:to-gray-900 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div
          ref={ref}
          className={`rounded-2xl bg-white dark:bg-gray-800/50 p-8 sm:p-12 text-center border border-taupe/10 card-hover transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Decorative icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-autumn-orange/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-autumn-orange"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-choc dark:text-white mb-4">
            Honeymoon Fund
          </h2>
          <p className="text-taupe dark:text-gray-300 max-w-lg mx-auto text-lg leading-relaxed mb-4">
            Your presence at our wedding is the greatest gift of all. If you
            wish to contribute to our honeymoon fund, we would be truly
            grateful.
          </p>
          <p className="text-sm text-taupe dark:text-gray-400 mb-8">
            All contributions will go towards making our honeymoon extra special
            — think sunset dinners, couple&apos;s massages, and adventures we'll
            remember forever.
          </p>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 rounded-lg bg-autumn-orange px-8 py-3 text-white font-semibold transition-colors hover:bg-terracotta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-autumn-orange"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <polyline points="20 12 20 22 4 22 4 12" />
              <rect x="2" y="7" width="20" height="5" />
              <line x1="12" y1="22" x2="12" y2="7" />
              <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
              <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
            </svg>
            Contribute Here
          </a>
        </div>
      </div>
    </section>
  );
}
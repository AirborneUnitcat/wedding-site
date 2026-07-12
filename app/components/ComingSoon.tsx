import { useInView } from "~/hooks/useInView";

interface ComingSoonProps {
  message?: string;
  hint?: string;
  className?: string;
  children?: React.ReactNode;
}

export function ComingSoon({
  message = "More details coming soon",
  hint,
  className = "",
  children,
}: ComingSoonProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {/* Decorative background */}
      <div className="absolute -inset-2 rounded-3xl border border-dashed border-taupe/20 dark:border-gray-700/20 pointer-events-none" />

      <div className="relative rounded-2xl bg-white/50 dark:bg-gray-800/20 backdrop-blur-[1px] p-8 sm:p-10 text-center border border-taupe/5">
        {/* Clock / hourglass icon */}
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-autumn-orange/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-7 w-7 text-autumn-orange"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-choc dark:text-white mb-3">
          {message}
        </h3>

        {hint && (
          <p className="text-taupe dark:text-gray-400 max-w-md mx-auto text-sm leading-relaxed">
            {hint}
          </p>
        )}

        {children && (
          <div className="mt-6 text-taupe dark:text-gray-400 text-sm">
            {children}
          </div>
        )}

        {/* Decorative dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-autumn-orange/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-autumn-orange/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-autumn-orange/40" />
        </div>
      </div>
    </div>
  );
}
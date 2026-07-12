export function Venue() {
  return (
    <section className="flex flex-col items-center gap-4 py-12 px-4">
      <h2 className="text-2xl font-semibold text-choc">The Venue</h2>
      <p className="text-taupe text-center max-w-md">
        The ceremony and reception will be held at a beautiful venue — West Tower in Ormskirk.
      </p>
      <a
        href="https://westtower.com/"
        className="inline-block rounded-lg bg-autumn-orange px-8 py-3 text-white font-semibold text-lg transition-colors hover:bg-terracotta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-autumn-orange"
      >
        View venue details
      </a>
    </section>
  );
}
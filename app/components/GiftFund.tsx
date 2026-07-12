export function GiftFund() {
  return (
    <section className="flex flex-col items-center gap-4 py-12 px-4">
      <h2 className="text-2xl font-semibold text-choc">Honeymoon Fund</h2>
      <p className="text-taupe text-center max-w-md">
        Your presence is the greatest gift, but if you'd like to contribute to
        our honeymoon, we'd be truly grateful.
      </p>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
        }}
        className="inline-block rounded-lg bg-autumn-orange px-8 py-3 text-white font-semibold text-lg transition-colors hover:bg-terracotta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-autumn-orange"
      >
        Contribute here
      </a>
    </section>
  );
}
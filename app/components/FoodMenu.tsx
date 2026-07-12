export function FoodMenu() {
  return (
    <section className="flex flex-col items-center gap-4 py-12 px-4">
      <h2 className="text-2xl font-semibold text-choc">Food Menu</h2>
      <p className="text-taupe text-center max-w-md">
        We're putting together a delicious menu for the big day. Download a
        preview below.
      </p>
      <a
        href="/menu.pdf"
        download
        className="inline-block rounded-lg bg-autumn-orange px-8 py-3 text-white font-semibold text-lg transition-colors hover:bg-terracotta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-autumn-orange"
      >
        Download menu (PDF)
      </a>
    </section>
  );
}
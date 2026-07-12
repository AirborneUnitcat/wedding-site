import { useInView } from "~/hooks/useInView";
import { ComingSoon } from "~/components/ComingSoon";

const MENU_ITEMS = {
  starters: [
    { name: "Roasted Butternut Squash Soup", description: "With sage crème fraîche and pumpkin seeds" },
    { name: "Smoked Salmon & Dill Terrine", description: "Served with horseradish cream and toasted brioche" },
    { name: "Wild Mushroom & Thyme Tartlet", description: "With aged Parmesan crisp (Vegetarian)" },
  ],
  mains: [
    { name: "Herb-Crusted Beef Fillet", description: "With red wine jus, fondant potato, and seasonal vegetables" },
    { name: "Pan-Seared Sea Bass", description: "With lemon butter sauce, samphire, and new potatoes" },
    { name: "Stuffed Butternut Squash", description: "With quinoa, feta, and roasted red pepper sauce (Vegetarian)" },
  ],
  desserts: [
    { name: "White Chocolate & Raspberry Cheesecake", description: "With berry coulis" },
    { name: "Sticky Toffee Pudding", description: "With vanilla bean custard" },
    { name: "Trio of Artisanal Cheeses", description: "With chutney, grapes, and oatcakes" },
  ],
  evening: [
    { name: "Wood-Fired Pizza Station", description: "Margherita, Pepperoni, and Mushroom & Truffle" },
    { name: "Late-Night Hog Roast", description: "With apple sauce and stuffing rolls" },
  ],
};

function MenuCategory({
  title,
  items,
  index,
}: {
  title: string;
  items: { name: string; description: string }[];
  index: number;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <h3 className="font-serif text-xl font-semibold text-autumn-orange mb-4 uppercase tracking-wider">
        {title}
      </h3>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.name} className="border-b border-taupe/10 pb-3">
            <p className="font-medium text-choc dark:text-gray-100">{item.name}</p>
            <p className="text-sm text-taupe dark:text-gray-400 mt-0.5">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FoodMenu() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  const categories = [
    { title: "Starters", items: MENU_ITEMS.starters },
    { title: "Mains", items: MENU_ITEMS.mains },
    { title: "Desserts", items: MENU_ITEMS.desserts },
    { title: "Evening Food", items: MENU_ITEMS.evening },
  ];

  return (
    <section
      id="menu"
      className="relative bg-white dark:bg-gray-950 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Section header */}
        <div
          ref={ref}
          className={`mb-16 text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-choc dark:text-white mb-4">
            Wedding Menu
          </h2>
          <div className="flourish text-taupe mb-6" />
          <p className="text-taupe dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            A carefully curated menu for our celebration. Please let us know
            about any dietary requirements.
          </p>
        </div>

        <ComingSoon
          message="Menu Being Finalised"
          hint="We're working with our caterers to craft a beautiful menu for the day. Whether you're a meat-lover, fish-fan, or plant-powered — there'll be something delicious for everyone."
        >
          <p>Dietary requirements can be discussed once the menu is confirmed.</p>
        </ComingSoon>

        {false && (
          <>
            {/* Menu grid */}
            <div className="grid sm:grid-cols-2 gap-10 sm:gap-12">
              {categories.map((cat, index) => (
                <MenuCategory
                  key={cat.title}
                  title={cat.title}
                  items={cat.items}
                  index={index}
                />
              ))}
            </div>

            {/* Download button */}
            <div className="mt-12 text-center">
              <a
                href="/menu.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg bg-autumn-orange px-8 py-3 text-white font-semibold text-lg transition-colors hover:bg-terracotta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-autumn-orange"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Menu (PDF)
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
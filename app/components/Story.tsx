import { useInView } from "~/hooks/useInView";

const MILESTONES = [
  {
    year: "2013",
    title: "How We Met",
    description:
      'It all started with a "Hey! Wanna play darts?", running out of a doorway in Butlins. Amy, of course, being the one to bring the confidence.',
    image: `https://picsum.photos/seed/meeting/600/400`,
    alt: "Bultins",
  },
  {
    year: "2014",
    title: "Making it official",
    description:
      "Pi day, 2014, and Morgan being a nerd believed this would be a easy way to remember the anniversary.",
    image: `https://picsum.photos/seed/adventure/600/400`,
    alt: "A sketch of Pi-Day",
  },
  {
    year: "2014-2017",
    title: "The endless train journeys",
    description:
      "£40 a trip, looking back it seems so cheap now.",
    image: `https://picsum.photos/seed/proposal/600/400`,
    alt: "Lots and lots of train tickets",
  },
  {
    year: "2017",
    title: "The Big Move",
    description:
      "Amy decided Southport was the obvious choice. The sea breeze, and the occasional high-tide; what's not to love?",
    image: `https://picsum.photos/seed/wedding/600/400`,
    alt: "Southport beach",
  },
  {
    year: "2019",
    title: "The Even Bigger Move",
    description:
      "We purchased our first fixer-upper together, then 6 months down the line, accidentally moved in due to Covid. Atleast we got TV in time.",
    image: `https://picsum.photos/seed/wedding/600/400`,
    alt: "Picture of our house",
  },
  {
    year: "2024",
    title: "The Proposal?",
    description:
      "10 year anniversary, no biggie.",
    image: `https://picsum.photos/seed/wedding/600/400`,
    alt: "Hot-tub holiday",
  },
  {
    year: "2025",
    title: "<span class='italic font-extrabold text-4xl'>The</span> Proposal!",
    description:
      "Sat in a hot-tub, wondering what could possible be a 'morning present', until Morgan finally gave in and proposed whilst watching spiderman, just before midnight.",
    image: `https://picsum.photos/seed/wedding/600/400`,
    alt: "Hot-tub holiday",
  },
];

function MilestoneCard({
  milestone,
  index,
}: {
  milestone: (typeof MILESTONES)[number];
  index: number;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`flex flex-col ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } items-center gap-8 md:gap-12 ${
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      } transition-all duration-700 ease-out`}
    >
      {/* Image */}
      <div className="relative w-full md:w-1/2 overflow-hidden rounded-2xl">
        <div className="aspect-3/2">
          <img
            src={milestone.image}
            alt={milestone.alt}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 space-y-3">
        <span className="text-sm font-semibold text-autumn-orange tracking-widest uppercase">
          {milestone.year}
        </span>
        <h3
          className="font-serif text-2xl md:text-3xl font-semibold text-choc dark:text-white"
          dangerouslySetInnerHTML={{ __html: milestone.title }}
        />
        <p className="text-taupe dark:text-gray-300 leading-relaxed">
          {milestone.description}
        </p>
      </div>
    </div>
  );
}

export function Story() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="story"
      className="relative bg-white dark:bg-gray-950 py-24 sm:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 h-96 w-96 bg-autumn-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section header */}
        <div
          ref={ref}
          className={`mb-16 text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-choc dark:text-white mb-4">
            Our Story
          </h2>
          <div className="flourish text-taupe mb-6" />
          <p className="text-taupe dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Thirteen years together — still feeling just as lucky.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-20 md:space-y-28">
          {MILESTONES.map((milestone, index) => (
            <MilestoneCard
              key={milestone.year}
              milestone={milestone}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
import { useInView } from "~/hooks/useInView";

const MILESTONES = [
  {
    year: "2019",
    title: "How We Met",
    description:
      "It all started at a mutual friend's dinner party. We were seated next to each other and talked all night about travel, music, and our shared love of terrible puns.",
    image: `https://picsum.photos/seed/meeting/600/400`,
    alt: "A candlelit dinner setting",
  },
  {
    year: "2021",
    title: "First Adventure Together",
    description:
      "Our first big trip — a week in the Lake District. We hiked, got caught in the rain, and discovered we could survive (and laugh through) anything together.",
    image: `https://picsum.photos/seed/adventure/600/400`,
    alt: "Mountain landscape view",
  },
  {
    year: "2023",
    title: "The Proposal",
    description:
      "Morgan proposed on a quiet beach at sunset. There were fairy lights, a bottle of champagne, and a very wobbly kneel in the sand. Amy said yes (eventually — after the shock wore off).",
    image: `https://picsum.photos/seed/proposal/600/400`,
    alt: "Sunset over the ocean",
  },
  {
    year: "2027",
    title: "The Big Day",
    description:
      "And now, here we are — counting down the days until we say 'I do' surrounded by our favourite people. We can't wait to celebrate with you!",
    image: `https://picsum.photos/seed/wedding/600/400`,
    alt: "Elegant wedding venue decor",
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
        <div className="aspect-[3/2]">
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
        <h3 className="font-serif text-2xl md:text-3xl font-semibold text-choc dark:text-white">
          {milestone.title}
        </h3>
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
            From a chance meeting to a lifetime together — here's a little
            journey through our favourite moments.
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
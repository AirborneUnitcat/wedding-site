import { useInView } from "~/hooks/useInView";

const GALLERY_IMAGES = [
  { src: "https://picsum.photos/seed/wedding1/800/600", alt: "Wedding venue decoration", span: true },
  { src: "https://picsum.photos/seed/wedding2/600/800", alt: "Bridal bouquet", span: false },
  { src: "https://picsum.photos/seed/wedding3/600/600", alt: "Table setting details", span: false },
  { src: "https://picsum.photos/seed/wedding4/800/600", alt: "Dancing at sunset", span: false },
  { src: "https://picsum.photos/seed/wedding5/600/800", alt: "Wedding rings", span: false },
  { src: "https://picsum.photos/seed/wedding6/800/600", alt: "Cake decoration", span: true },
  { src: "https://picsum.photos/seed/wedding7/600/600", alt: "Floral arrangements", span: false },
  { src: "https://picsum.photos/seed/wedding8/800/600", alt: "Evening lights", span: false },
  { src: "https://picsum.photos/seed/wedding9/600/800", alt: "Champagne toast", span: false },
];

function GalleryImage({
  src,
  alt,
  index,
}: {
  src: string;
  alt: string;
  index: number;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl transition-all duration-700 ease-out ${
        isInView
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-12 scale-95"
      }`}
      style={{ transitionDelay: `${(index % 6) * 100}ms` }}
    >
      <div className="aspect-4/3">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none" />
    </div>
  );
}

export function Gallery() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="gallery"
      className="relative bg-white dark:bg-gray-950 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div
          ref={ref}
          className={`mb-12 text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-choc dark:text-white mb-4">
            Gallery
          </h2>
          <div className="flourish text-taupe mb-6" />
          <p className="text-taupe dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            A glimpse of what&apos;s to come — and memories we&apos;ll make
            together.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="gallery-grid">
          {GALLERY_IMAGES.map((image, index) => (
            <GalleryImage
              key={image.src}
              src={image.src}
              alt={image.alt}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
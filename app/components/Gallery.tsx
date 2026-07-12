import { useInView } from "~/hooks/useInView";
import { ComingSoon } from "~/components/ComingSoon";

const GALLERY_IMAGES = [
  { src: "https://picsum.photos/seed/wedding1/800/600", alt: "Wedding venue decoration", span: true }
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
      <div className="h-full w-full min-h-48">
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

        {/* Gallery grid — coming soon */}
        <ComingSoon
          message="Gallery Coming Soon"
          hint="We're collecting our favourite photos to share with you. The gallery will be filled with memories from our engagement, the big day, and everything in between."
          className="max-w-2xl mx-auto"
        />

        {false && (
          <>
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
          </>
        )}
      </div>
    </section>
  );
}
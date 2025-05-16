import Image from "next/image";

export default function ImageGridSection1() {
  // a két clipPath, egy az “Egyedi Ajánlat”-hoz, egy a “Next Level”-hez
  const CLIP_ONE =
    "polygon(40% 0, 90% 0, 90% 75%, 63% 100%, 10% 100%, 10% 22%)";
  const CLIP_TWO =
    "polygon(40% 0, 90% 0, 90% 76%, 60% 100%, 10% 100%, 10% 24%)";

  return (
    <section className="py-12 px-4 sm:px-6 bg-transparent mix-blend-multiply">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-0 justify-items-center lg:justify-items-start max-w-6xl mx-auto">
        {[
          {
            src: "/images/Group 13.svg",
            alt: "Egyedi Ajánlat",
            title: "Egyedi Ajánlat",
            clip: CLIP_ONE,
          },
          {
            src: "/images/Group 11.svg",
            alt: "Next Level",
            title: "Next Level",
            subtitle: "2–6",
            clip: CLIP_TWO,
          },
        ].map(({ src, alt, title, subtitle, clip }, i) => (
          <div
            key={i}
            className="group relative w-full aspect-[3/2] group transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-105"
          >
            {/* Kék keret alatt */}
            <div
              className="absolute inset-0 z-0"
              style={{
                clipPath: clip,
                backgroundColor: "#43AFAF",
              }}
            />

            {/* Kép maga */}
            <div
              className="absolute inset-[2px] z-10 overflow-hidden"
              style={{ clipPath: clip }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Felirat */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-shadow-custom text-center px-4">
              <h3 className="text-2xl md:text-4xl font-bold uppercase">
                {title}
              </h3>
              {subtitle && (
                <p className="text-xs sm:text-sm italic mt-1">{subtitle}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

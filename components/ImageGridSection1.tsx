import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ImageGridSection1(): React.JSX.Element {

  // a  clipPath
  const CLIP = "polygon(40% 1%, 90% 1%, 90% 76%, 60% 99%, 10% 99%, 10% 24%)";

  return (
    <section className="bg-transparent mix-blend-multiply">
      <div className="flex flex-col items-center space-y-10 lg:flex-row lg:-space-x-18 justify-items-center max-w-6xl mx-auto">
        {[
          {
            src: "/images/Group 13.svg",
            alt: "Egyedi Ajánlat",
            title: "Egyedi Ajánlat",
            clip: CLIP,
            href: "/egyediajanlat",
          },
          {
            src: "/images/Group 11.svg",
            alt: "Next Level",
            title: "Next Level",
            subtitle: "2–6",
            clip: CLIP,
            href: "/nextlevel",
          },
        ].map(({ src, alt, title, subtitle, clip, href }, i) => (
          <Link key={i} href={href} className="block relative w-[80%] lg:w-1/2 aspect-[16/9]">
            <div
              className="group h-full w-full relative aspect-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-105"
              style={{ clipPath: clip }}
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
                <h3 className="text-2xl md:text-4xl font-bold uppercase drop-shadow-xl">
                  {title}
                </h3>
                {subtitle && (
                  <div className="flex items-center space-x-1 mt-1">
                    <p className="text-xs sm:text-sm italic m-1">{subtitle}</p>
                    <Image
                      src="/images/ikon.png"
                      alt="Személy ikon"
                      width={8}
                      height={8}
                      className="w-4 h-4"
                    />
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

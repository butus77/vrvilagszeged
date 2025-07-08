import Image from "next/image";
import React from "react";

const IMAGES = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png",
  "/images/8.png",
  "/images/9.png",
  "/images/10.png",
  "/images/11.png",
  "/images/12.png",
  "/images/13.png",
  "/images/14.png",
  "/images/15.png",
  "/images/16.png",
  "/images/17.png",
  "/images/18.png",
  "/images/19.png",
  "/images/20.png",
  "/images/21.png",
  "/images/22.png",
  "/images/23.png",
  "/images/24.png",
  "/images/25.png",
  "/images/26.png",
  "/images/27.png",
  "/images/28.png",
];

export default function ThirdSection(): React.JSX.Element {

  return (
    <section className="relative mt-10 overflow-hidden bg-transparent py-10 px-4">
      <div className="marquee inline-flex">
        <div className="inline-flex space-x-2">
          {IMAGES.map((src, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-40 sm:w-60  h-auto relative overflow-visible"
            >
              <Image
                src={src}
                alt={`Dekoráció ${idx + 1}`}
                width={200}
                height={200}
                className="img-base object-cover origin-center w-full h-auto"
                priority={idx < 5}
              />
            </div>
          ))}
        </div>
        <div className="inline-flex space-x-2">
          {IMAGES.map((src, idx) => (
            <div
              key={`dup-${idx}`}
              className=" flex-shrink-0 w-40 sm:w-60  h-auto relative overflow-visible"
            >
              <Image
                src={src}
                alt={`Dekoráció ${idx + 1}`}
                width={200}
                height={200}
                className="img-base object-cover origin-center w-full h-auto"
                priority={idx < 5}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function ImageGridSection1() {
  return (
    <section className="relative flex justify-center mb-6 bg-transparent mix-blend-multiply -z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full px-4 sm:px-6">
        {/* Kártya komponens - 1 */}
        <div
          className="relative w-full h-[300px] transition-transform duration-300 hover:scale-105   overflow-hidden"
          style={{
            clipPath:
              "polygon(40% 0, 90% 0, 90% 75%, 63% 100%, 10% 100%, 10% 22%)",
          }}
        >
          <Image
            src="/images/Group 13.svg"
            alt="Egyedi ajánlat"
            fill
            className="object-fill"
          />

          <div className="absolute inset-0 z-[3] flex flex-col justify-center items-center text-white text-shadow-custom text-center">
            <h3 className="text-3xl sm:text-xl md:text-3xl lg:text-4xl font-bold uppercase">
              Egyedi Ajánlat
            </h3>
          </div>
        </div>

        {/* Kártya komponens - 2 */}
        <div
          className="relative w-full h-[300px] transition-transform duration-300 hover:scale-105  overflow-hidden"
          style={{
            clipPath:
              "polygon(40% 0, 90% 0, 90% 76%, 60% 100%, 10% 100%, 10% 24%)",
          }}
        >
          <Image
            src="/images/Group 11.svg"
            alt="Next Level"
            fill
            className="object-contain"
          />

          <div className="absolute inset-0 z-[3] flex flex-col justify-center items-center text-white text-shadow-custom text-center">
            <h3 className="text-3xl sm:text-xl md:text-3xl lg:text-4xl  font-bold uppercase">
              Next Level
            </h3>
            <p className="text-[11px] sm:text-sm italic mt-1">2-6</p>
          </div>
        </div>
      </div>
    </section>
  );
}

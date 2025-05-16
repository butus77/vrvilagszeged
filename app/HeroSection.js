import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      {/* Mobil nézet */}
      <section className="relative sm:hidden pt-24 bg-transparent flex flex-col items-center text-center px-4 py-8 text-white space-y-10 overflow-hidden">
        <div className="text-2xl font-semibold leading-tight z-10">
          <h2>Lépj be a</h2>
          <h2 className="text-[#67FFF2]">Hyper-Realitás</h2>
          <h2>világába</h2>
        </div>

        <img
          src="/images/Group 3.svg"
          alt="VR élmény"
          className="w-full max-w-xs z-10"
        />

        <p className="text-lg font-medium z-10">A szabadmozgásos VR élmény</p>

        <p className="text-sm py-5 text-[#67FFF2] z-10">
          Ahol nincsenek kábelek, nincsenek határok – csak Te, a valósághű
          fizikai interakciók és egy teljesen új világ
        </p>
      </section>

      {/* Asztali / tablet nézet */}
      <section className="hidden sm:block relative bg-transparent text-white w-full overflow-hidden pt-24 pb-40">
        {/* Tartalom konténer középen */}
        <div className="max-w-7xl mx-auto flex flex-row justify-between items-center px-8 lg:px-16 z-10 relative">
          {/* Szöveges rész */}
          <div className="flex-1 text-2xl md:text-4xl font-semibold space-y-4 leading-tight">
            <h2>Lépj be a</h2>
            <h2 className="text-[#67FFF2]">Hyper-Realitás</h2>
            <h2>világába</h2>

            <div className="pt-10 space-y-4 text-sm md:text-lg leading-relaxed">
              <p className="font-bold">A szabadmozgásos VR élmény</p>
              <p className="text-[#67FFF2]">
                Ahol nincsenek kábelek, nincsenek határok – csak Te, a valósághű
                fizikai interakciók és egy teljesen új világ
              </p>
            </div>
          </div>

          {/* Kép */}
          <div className="flex-1 max-w-md lg:max-w-lg">
            <img
              src="/images/Group 3.svg"
              alt="VR élmény"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}

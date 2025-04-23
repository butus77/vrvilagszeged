import Image from "next/image";

export default function ImageGridSection() {
  return (
    <>
      <h2 className="py-10 bg-[#0E0E0F] text-center text-[#EAF4EC] text-2xl sm:text-3xl md:text-4xl font-bold leading-[30px]">
        Foglalj
      </h2>
      <section className="sm:bg-[#0e0e0f] sm:px-4 sm:py-8">
        <section className=" hidden sm:grid sm:grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-12 bg-[#0e0e0f] px-4 py-8 max-w-3xl mx-auto">
          {/* 1. lépés */}
          <div className="flex items-start gap-3">
            <div className="border-2 border-[#43AFAF] text-[#43AFAF] font-bold px-3 py-1 text-lg">
              1
            </div>
            <p className="text-[#43AFAF] text-sm">
              Válaszd ki a kívánt VR játékot
            </p>
          </div>

          {/* 2. lépés */}
          <div className="flex items-start gap-3">
            <div className="border-2 border-[#43AFAF] text-[#43AFAF] font-bold px-3 py-1 text-lg">
              2
            </div>
            <p className="text-[#43AFAF] text-sm">
              Döntsd el, hány fős csapattal érkezel
            </p>
          </div>

          {/* 3. lépés */}
          <div className="flex items-start gap-3">
            <div className="border-2 border-[#43AFAF] text-[#43AFAF] font-bold px-3 py-1 text-lg">
              3
            </div>
            <p className="text-[#43AFAF] text-sm">Foglald le az időpontot</p>
          </div>

          {/* 4. lépés */}
          <div className="flex items-start gap-3">
            <div className="border-2 border-[#43AFAF] text-[#43AFAF] font-bold px-3 py-1 text-lg">
              4
            </div>
            <p className="text-[#43AFAF] text-sm">
              Készülj a valódi élményekre!
            </p>
          </div>
        </section>
      </section>

      <section className="relative -mb-14 px-4 bg-[#0E0E0F]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Kép közepén szöveg, semmi háttér, semmi sötétítés */}
          <div className="relative w-full overflow-hidden">
            <Image
              src="/images/Group 9.svg"
              alt="First Quest"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white text-center">
              <h3 className="whitespace-nowrap text-lg sm:text-xl font-bold uppercase">
                First Quest
              </h3>
              <p className="text-sm sm:text-base italic whitespace-nowrap">
                Kalandkezdő csomag 1-2
              </p>
            </div>
          </div>

          {/* Kép közepén szöveg, semmi háttér, semmi sötétítés */}
          <div className="relative w-full overflow-hidden">
            <Image
              src="/images/Group 10.svg"
              alt="First Quest"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white text-center">
              <h3 className="whitespace-nowrap text-lg sm:text-xl font-bold uppercase">
                HERO ZONE MAX
              </h3>
              <p className="text-sm sm:text-base italic whitespace-nowrap ">
                A teljes akciócsomag! 2-6
              </p>
            </div>
          </div>

          {/* Kép közepén szöveg, semmi háttér, semmi sötétítés */}
          <div className="relative w-full overflow-hidden ">
            <Image
              src="/images/Group 11.svg"
              alt="First Quest"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white text-center">
              <h3 className="whitespace-nowrap text-lg sm:text-xl font-bold uppercase">
                vex max
              </h3>
              <p className="text-xs sm:text-base italic whitespace-nowrap ">
                A legnagyobb VEX VR kaland! 2-6
              </p>
            </div>
          </div>

          {/* Kép közepén szöveg, semmi háttér, semmi sötétítés */}
          <div className="relative w-full overflow-hidden">
            <Image
              src="/images/Group 12.svg"
              alt="First Quest"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white text-center">
              <h3 className="whitespace-nowrap text-lg sm:text-xl font-bold uppercase">
                hero zone eskape
              </h3>
              <p className="text-xs sm:text-base italic whitespace-nowrap">
                Két varázslatos VR szabadulószoba! 2-6
              </p>
            </div>
          </div>

          {/* Kép közepén szöveg, semmi háttér, semmi sötétítés */}
          <div className="relative w-full overflow-hidden">
            <Image
              src="/images/Group 13.svg"
              alt="First Quest"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white text-center">
              <h3 className="whitespace-nowrap text-lg sm:text-xl font-bold uppercase">
                vex eskape
              </h3>
              <p className="text-xs sm:text-base italic whitespace-nowrap">
                A legváltozatosabb VR szabadulószobák! 2-6
              </p>
            </div>
          </div>

          {/* Kép közepén szöveg, semmi háttér, semmi sötétítés */}
          <div className="relative w-full overflow-hidden">
            <Image
              src="/images/Group 14.svg"
              alt="First Quest"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white text-center">
              <h3 className="whitespace-nowrap text-lg sm:text-xl font-bold uppercase">
                hero zone premium
              </h3>
              <p className="text-xs sm:text-base italic whitespace-nowrap">
                A legnagyobb VR pálya, maximális akció! 2-6
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

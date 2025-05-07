import Image from "next/image";

export default function ImageGridSection() {
  return (
    <>
      <section className="relative flex justify-center mb-6 px-4 bg-[#0E0E0F]/50 mix-blend-multiply">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Kép közepén szöveg, semmi háttér, semmi sötétítés 
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
          </div> */}

          {/* Kép közepén szöveg, semmi háttér, semmi sötétítés */}
          <div className="relative flex justify-center w-full overflow-hidden items-center">
            <Image
              src="/images/Group 13.svg"
              alt="First Quest"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white text-center">
              <h3 className="whitespace-nowrap text-lg sm:text-xl font-bold uppercase">
                egyedi ajánlat
              </h3>
            </div>
          </div>

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
                next level
              </h3>
              <p className="text-xs sm:text-base italic whitespace-nowrap ">
                2-6
              </p>
            </div>
          </div>

          {/* Kép közepén szöveg, semmi háttér, semmi sötétítés 
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

          {/* Kép közepén szöveg, semmi háttér, semmi sötétítés 
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
          </div>*/}
        </div>
      </section>
    </>
  );
}

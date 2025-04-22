import Image from "next/image";

export default function ImageGridSection() {
  return (
    <>
      <h2 className="py-10 bg-[#0E0E0F] text-center text-[#EAF4EC] text-2xl sm:text-3xl md:text-4xl font-bold leading-[30px]">
        Foglalj
      </h2>

      <section className="relative -mb-14 px-4 bg-[#0E0E0F]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto p-16">

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
              <h3 className=" text-lg sm:text-xl font-bold uppercase">First Quest</h3>
              <p className="text-sm sm:text-base italic">Kalandkezdő csomag 1-2</p>
            </div>
          </div>

        {/* Kép közepén szöveg, semmi háttér, semmi sötétítés */}
          <div className="relative w-full">
            <Image
              src="/images/Group 10.svg"
              alt="First Quest"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white text-center">
              <h3 className=" text-lg sm:text-xl font-bold uppercase">HERO ZONE MAX</h3>
              <p className="text-sm sm:text-base italic">A teljes akciócsomag! 2-6</p>
            </div>
          </div>

{/* Kép közepén szöveg, semmi háttér, semmi sötétítés */}
          <div className="relative w-full">
            <Image
              src="/images/Group 11.svg"
              alt="First Quest"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white text-center">
              <h3 className=" text-lg sm:text-xl font-bold uppercase">vex max</h3>
              <p className="text-sm sm:text-base italic">A legnagyobb VEX VR kaland! 2-6</p>
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
              <h3 className=" text-lg sm:text-xl font-bold uppercase">hero zone eskape</h3>
              <p className="text-sm sm:text-base italic">Két varázslatos VR szabadulószoba!
              2-6</p>
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
              <h3 className=" text-lg sm:text-xl font-bold uppercase">vex eskape</h3>
              <p className="text-sm sm:text-base italic">A legváltozatosabb VR szabadulószobák!
              2-6</p>
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
              <h3 className=" text-lg sm:text-xl font-bold uppercase">hero zone premium</h3>
              <p className="text-sm sm:text-base italic">A legnagyobb VR pálya, maximális akció! 2-6</p>
            </div>
          </div>
          </div>
      </section>
    </>
  );
}



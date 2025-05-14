export default function HeroSection() {
  return (
    <>
      <section className="relative w-full not-odd:sm:hidden pt-24  bg-transparent flex flex-col items-center text-center px-4 py-8 text-white space-y-10">
        <div className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight z-10">
          <h2>Lépj be a</h2>
          <h2 className="text-[#67FFF2]">Hyper-Realitás</h2>
          <h2>világába</h2>
        </div>

        {/* Helykitöltő kép  */}
        <img
          src="/images/Group 3.svg"
          alt="VR élmény"
          className="w-[90%] max-w-xs sm:max-w-sm md:max-w-md mr-[10%] z-10"
        />

        <p className="text-lg font-medium z-10">A szabadmozgásos VR élmény</p>

        <p className="text-sm py-5 text-[#67FFF2] z-10">
          Ahol nincsenek kábelek, nincsenek határok - csak Te, a valósághű
          fizikai interakciók, és egy teljesen új világ
        </p>
        <div
          className="absolute -bottom-12 bg-[#EAF4EC] left-0 w-full min-h-44 z-1"
          style={{
            height: "100px",
            clipPath:
              "polygon(50% 60%, 100% 25%, 100% 75%, 50% 75%, 0% 75%, 0% 25%)",
          }}
        ></div>
      </section>

      <section className="hidden relative sm:flex flex-row justify-center  pt-24  bg-transparent mix-blend-multiply  text-left  text-white">
        <div className=" text-2xl pl-[10%] pb-[15%] pr-[15%] sm:text-2xl md:text-5xl font-semibold z-10">
          <h2>Lépj be a</h2>
          <h2 className="text-[#67FFF2]">Hyper-Realitás</h2>
          <h2>világába</h2>
          <div className="py-10">
            <p className="text-lg md:text-xl py-8 font-bold z-10">
              A szabadmozgásos VR élmény
            </p>

            <p className="text-sm md:text-xl text-[#67FFF2] max-w-full z-10">
              Ahol nincsenek kábelek, nincsenek határok - csak Te, a valósághű
              fizikai interakciók, és egy teljesen új világ
            </p>
          </div>
        </div>
        {/* Helykitöltő kép  */}
        <img
          src="/images/Group 3.svg"
          alt="VR élmény"
          className="w-full z-10 pr-[10%]"
        />

        <div
          className="absolute -bottom-20 bg-[#EAF4EC] w-full max-w-full min-h-44 z-1"
          style={{
            height: "250px",
            clipPath:
              "polygon(50% 60%, 100% 25%, 100% 75%, 50% 75%, 0% 75%, 0% 25%)",
          }}
        ></div>
      </section>
    </>
  ); 
}

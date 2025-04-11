export default function HeroSection() {
  return (
    <>
      <section className="relative pt-24 bg-[#0E0E0F] flex flex-col items-center text-center px-4 py-8 text-white space-y-6overflow-visible
 ">
        <div className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight z-10">
          <h2>Lépj be a</h2>
          <h2 className="text-[#67FFF2]">Hyper-Realitás</h2>
          <h2>világába</h2>
        </div>

        {/* Helykitöltő kép  */}
        <img
          src="/images/Group 3.svg"
          alt="VR élmény"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg z-10"
        />

        <p className="text-lg font-medium z-10">A szabadmozgásos VR élmény</p>

        <p className="text-sm text-[#67FFF2] z-10">
          Ahol nincsenek kábelek, nincsenek határok - csak Te, a valósághű
          fizikai interakciók, és egy teljesen új világ
        </p>
        <div
  className="absolute -bottom-12 bg-[#0E0E0F] w-full h-44 z-10"
  style={{
    clipPath: "polygon(46% 69%, 100% 68%, 100% 75%, 50% 100%, 0% 75%, 0 69%)",
  }}
></div>
      </section>   
    </>
  );
}

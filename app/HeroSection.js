export default function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center px-4 py-8 text-white space-y-6 overflow-hidden">
      {/* Background shape (Vector 1) */}
      <div
        className="absolute bg-[#0E0E0F] rounded-2xl w-full max-w-[440px] h-[500px] sm:h-[600px] md:h-[653.5px] top-[40px] sm:top-[60px] md:top-[74px] left-1/2 -translate-x-1/2 z-[-1]"
        style={{
          width: "100%",
          maxWidth: "440px",
          height: "500px",
          top: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: -1, // hogy a háttér mögé kerüljön
        }}
      />

      <div className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
        <h2>Lépj be a</h2>
        <h2 className="text-[#67FFF2]">Hyper-Realitás</h2>
        <h2>világába</h2>
      </div>

      {/* Helykitöltő kép  */}
      <img
        src="/images/Group 3.svg"
        alt="VR élmény"
        className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg"
      />

      <p className="text-lg font-medium">A szabadmozgásos VR élmény</p>

      <p className="text-sm text-[#67FFF2]">
        Ahol nincsenek kábelek, nincsenek határok - csak Te, a valósághű fizikai
        interakciók, és egy teljesen új világ
      </p>
    </section>
  );
}

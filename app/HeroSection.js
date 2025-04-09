export default function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center px-4 py-8 text-white space-y-6">
      <h2 className="text-center text-2xl sm:text-3xl font-semibold leading-tight">
        <span className="inline">Lépj be a </span>
        <span className="inline text-[#67FFF2]">Hyper-Realitás </span>
        <span className="inline">világába</span>
      </h2>

      {/* Helykitöltő kép – később cserélheted */}
      <img
        src="/images/Group 3.svg"
        alt="VR élmény"
        className="w-full max-w-xs rounded-lg"
      />

      <p className="text-lg font-medium">A szabadmozgásos VR élmény</p>

      <p className="text-sm text-[#67FFF2]">
        Ahol nincsenek kábelek, nincsenek határok - csak Te, a valósághű fizikai
        interakciók, és egy teljesen új világ
      </p>
    </section>
  );
}

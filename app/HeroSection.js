export default function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center px-4 py-8 text-white space-y-6">
      <div className="flex items-center justify-center">
        <div className="text-center text-2xl sm:text-3xl font-semibold leading-tight">
          <h2>Lépj be a</h2>
          <h2 className="text-[#67FFF2]">Hyper-Realitás</h2>
          <h2>világába</h2>
        </div>
      </div>

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

export default function PostSection() {
  return (
    <>
      <section className="relative bg-[#EAF4EC] px-4 py-12 text-center overflow-visible">
        <div
          className="absolute w-[1001px] h-[1781px] top-[-2px] left-[-1px] bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/images/bg-dekor.png')" }}
        />

        {/* Címsor */}
        <h2 className="pt-28 text-2xl sm:text-3xl md:text-4xl font-bold text-[#43AFAF] z-10 relative">
          A valóság már nem kötelező!
        </h2>

        {/* Kép (pl. haptic) */}
        <div className="mt-12 flex justify-center relative z-10">
          <img
            src="/images/haptic 1.svg"
            alt="Haptikus élmény"
            className="w-[228px] h-[228px] object-contain z-10"
          />
        </div>
        <h4 className="pt-28  sm:text-2xl md:text-3xl font-bold text-[#43AFAF] z-10 relative">
          Csapatos vagy egyéni kalandok, ahol minden lépés számít
        </h4>
        <div
          className="absolute -bottom-12 bg-[#EAF4EC] w-full h-44 z-10"
          style={{
            clipPath:
              "polygon(50% 69%, 100% 68%, 100% 75%, 50% 100%, 0% 75%, 0 69%)",
          }}
        ></div>
      </section>
    </>
  );
}

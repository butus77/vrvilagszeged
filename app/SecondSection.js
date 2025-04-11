export default function PostSection() {
  return (
    <>
      <img
        src="/images/Vector 1.svg"
        alt="Dekoratív elválasztó"
        className="absolute bottom-0  w-full z-0"
      />
      <section className="relative bg-[#EAF4EC] px-4 py-12 text-center">
        <div
          className="absolute w-[1001px] h-[1781px] top-[-2px] left-[-1px] bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/images/bg-dekor.png')" }}
        />

        {/* Layer_2 extra díszítőelem 
        <div
          className="absolute w-[391px] top-[22.91%] left-1/2 -translate-x-[50%] translate-x"
          style={{
            backgroundImage: "url('/images/layer2.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            height: "auto",
            aspectRatio: "1 / 1", // ha négyzetes
          }}
        />*/}

        {/* Címsor */}
        <h2 className="pt-px text-2xl sm:text-3xl md:text-4xl font-bold text-[#43AFAF] z-10 relative">
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
      </section>
    </>
  );
}

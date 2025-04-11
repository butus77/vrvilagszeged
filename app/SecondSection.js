export default function SecondSection() {
  return (
    <>
      <section className="relative bg-[#EAF4EC] px-4 py-12 text-center flex flex-col items-center pt-24  space-y-10">
        {/* Címsor */}
        <h2 className="pt-28 text-2xl sm:text-3xl md:text-4xl font-bold text-[#43AFAF] z-10 text-center relative">
          A valóság már nem kötelező!
        </h2>

        {/* Kép (pl. haptic) */}
        <div className="mt-12 flex justify-center relative z-10">
          <img
            src="/images/haptic 1.svg"
            alt="Haptikus élmény"
            className="w-[228px] h-[228px] object-contain z-10 relative"
          />
          <button className="top-5 right-10 z-20 absolute bg-[#43AFAF] w-6 h-6 rounded-full hover:bg-[#367D7E] active:scale-95 transition duration-150">
            {/* Nincs szöveg, csak az ikon */}
          </button>
          <button className="z-20 bg-[#43AFAF] w-6 h-6 rounded-full hover:bg-[#367D7E] active:scale-95 transition duration-150 absolute top-40 left-4 transform -translate-y-1/2"></button>
          <button className=" bottom-8 right-18 z-20 bg-[#43AFAF] w-6 h-6 rounded-full hover:bg-[#367D7E] active:scale-95 transition duration-150 absolute transform -translate-y-1/2"></button>
        </div>
        <h4 className="pt-28  sm:text-2xl md:text-3xl font-bold text-[#43AFAF] z-10 relative">
          Csapatos vagy egyéni kalandok, ahol minden lépés számít
        </h4>
        <div
          className="absolute -bottom-12 bg-[#EAF4EC] w-full min-h-44 z-0"
          style={{
            height: "100px",
            clipPath:
              "polygon(46% 25%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        ></div>
      </section>
    </>
  );
}

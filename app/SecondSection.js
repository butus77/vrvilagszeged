export default function SecondSection() {
  return (
    <>
      <section className="relative bg-[#EAF4EC] px-4 py-12 text-center flex flex-col items-center pt-24  space-y-10">
        {/* Címsor */}
        <h2 className="pt-10 text-2xl sm:text-3xl md:text-4xl font-bold text-[#43AFAF] z-10 text-center relative">
          A valóság már nem kötelező!
        </h2>

        {/* Kép (haptic) */}
        <div className="relative z-10 w-[228px] h-[228px]">
          <img
            src="/images/haptic 1.svg"
            alt="Haptikus élmény"
            className="w-full h-full object-contain"
          />

          {/* Gombok pontos pozíciókkal */}
          {/* Felső jobb sarok */}
          <button
            className="absolute top-3.5 left-40 z-20 bg-[#43AFAF] w-6 h-6 rounded-full hover:bg-[#367D7E] transition"
            title="Mellkasi rezgés"
          ></button>

          <div className="absolute top-4 left-48 w-28 sm:w-40 text-sm text-black max-w-min sm:max-w-[200px] md:max-w-[210px] font-bold text-left text-wrap break-words">
            Haptikus mellényekkel érzed a találatokat, ütéseket és rezgéseket.
          </div>

          {/* Bal oldal közepe */}
          <button
            className="absolute bottom-12 left-2 z-20 bg-[#43AFAF] w-6 h-6 rounded-full hover:bg-[#367D7E] transition"
            title="Metaquest"
          ></button>

          {/* Alsó jobb sarok */}
          <button
            className="absolute bottom-11 right-14 z-20 bg-[#43AFAF] w-6 h-6 rounded-full hover:bg-[#367D7E] transition"
            title="Alsó rész"
          ></button>
          <div
            className="absolute -bottom-22 sm:-bottom-6 left-36 text-black sm:left-40 max-w-min sm:max-w-[200px] md:max-w-[210px] break-words
w-28 text-sm sm:w-40 md:w-80 text-left font-bold z-50"
          >
            Haptikus mellényekkel érzed a találatokat, ütéseket és rezgéseket.
          </div>
        </div>

        {/* Szöveges magyarázat */}

        <h4 className="pt-28 sm:text-2xl md:text-3xl font-bold text-[#43AFAF] z-10 relative">
          Csapatos vagy egyéni kalandok, ahol minden lépés számít
        </h4>

        {/* Alakzat a szekció végén */}
        <div
          className="absolute -bottom-12 bg-[#EAF4EC] w-full min-h-44 z-10"
          style={{
            height: "100px",
            clipPath:
              "polygon(46% 25%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        ></div>
        {/* Feketébe átmenő háttér – a díszítő elem mögött */}
        <div className="absolute -bottom-12 left-0 w-full h-32 bg-[#0E0E0F] z-0 pointer-events-none" />
      </section>
      );
    </>
  );
}

export default function SecondSection() {
  return (
    <section className="relative bg-[#EAF4EC] text-center flex flex-col items-center px-4 pt-32 pb-48 overflow-hidden">
      {/* Felső díszítő forma */}
      <div
        className="absolute top-0 left-0 w-full h-40 bg-[#26e74d] z-[20] pointer-events-none"
        style={{
          clipPath: "polygon(50% 0%, 100% 20%, 100% 100%, 0% 100%, 0% 20%)",
        }}
      ></div>

      {/* Tartalom középre igazítva */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center z-10">
        {/* Címsor */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#43AFAF] mb-10">
          A valóság már nem kötelező!
        </h2>

        {/* Kép + pontok + szövegek */}
        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg aspect-[3/4] mx-auto">
          <img
            src="/images/haptic 1.svg"
            alt="Haptikus élmény"
            className="w-full h-full object-contain"
          />

          {/* Buborékok és szövegek */}
          {/* Mellkasi rezgés */}
          <div className="absolute top-[10%] left-[65%] transform -translate-x-1/2 text-left">
            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#43AFAF] rounded-full"></div>
            <p className="mt-1 text-[10px] sm:text-xs font-bold text-black w-32">
              Haptikus mellényekkel érzed a találatokat, ütéseket és rezgéseket
            </p>
          </div>

          {/* Fej szintje */}
          <div className="absolute top-[35%] left-[25%] transform -translate-x-1/2 text-left">
            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#43AFAF] rounded-full"></div>
            <p className="mt-1 text-[10px] sm:text-xs font-bold text-black w-32">
              Pico 4 Ultra headsettel garantált élmény
            </p>
          </div>

          {/* Alsó rész */}
          <div className="absolute bottom-[10%] right-[15%] transform translate-x-1/2 text-left">
            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#43AFAF] rounded-full"></div>
            <p className="mt-1 text-[10px] sm:text-xs font-bold text-black w-32">
              Szemenkénti 2k-s felbontás, 16 haptikus motor
            </p>
          </div>
        </div>

        {/* Alsó címsor */}
        <h4 className="mt-10 text-sm sm:text-xl md:text-2xl font-bold text-[#43AFAF]">
          Csapatos vagy egyéni kalandok, ahol minden lépés számít
        </h4>
      </div>

      {/* Alsó díszítő forma */}
      <div
        className="absolute bottom-0 left-0 w-full h-[213px] bg-[#EAF4EC] z-[20] pointer-events-none"
        style={{
          clipPath:
            "polygon(50% 25%, 100% 25%, 100% 70%, 50% 100%, 0% 70%, 0% 25%)",
        }}
      ></div>
    </section>
  );
}

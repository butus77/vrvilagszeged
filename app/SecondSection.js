export default function SecondSection() {
  return (
    <section
      className="relative text-center flex flex-col items-center px-4 pt-36 pb-52 overflow-hidden"
      style={{
        backgroundColor: "#EAF4EC",
        clipPath: "polygon(50% 8%, 100% 0%, 100% 84%, 50% 90%, 0 84%, 0 0)",
      }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center z-10">
        {/* Címsor */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#43AFAF] mb-10">
          A valóság már nem kötelező!
        </h2>

        {/* Kép és pontok + szövegek */}
        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg aspect-[3/4] mx-auto">
          <img
            src="/images/haptic 1.svg"
            alt="Haptikus élmény"
            className="w-full h-full object-contain"
          />

          {/* 1. Mellkasi rezgés pont */}
          <div className="absolute top-[12%] left-[65%] transform -translate-x-1/2">
            <div
              className="w-4 h-4 sm:w-5 sm:h-5 bg-[#43AFAF] rounded-full z-20"
              title="Mellkasi rezgés"
            ></div>
          </div>
          {/* Szöveg mellette */}
          <div className="absolute top-2 left-[75%] w-10 sm:w-40 md:w-56 md:top-[6%] text-[8px] sm:text-xs font-bold text-black text-left z-10">
            Haptikus mellényekkel érzed a találatokat, ütéseket és rezgéseket
          </div>

          {/* 2. Headset pont */}
          <div className="absolute top-[60%] left-[10%] transform -translate-x-1/2">
            <div
              className="w-4 h-4 sm:w-5 sm:h-5 bg-[#43AFAF] rounded-full z-20"
              title="Fejrész"
            ></div>
          </div>
          {/* Szöveg mellette */}
          <div className="absolute top-[35%] left-[2%] w-10 sm:w-24 md:w-30 text-[8px] sm:text-xs font-bold text-black text-left z-10">
            Pico 4 Ultra headsettel garantált élmény
          </div>

          {/* 3. Haptikus motor pont */}
          <div className="absolute bottom-[20%] right-[40%] transform translate-x-1/2">
            <div
              className="w-4 h-4 sm:w-5 sm:h-5 bg-[#43AFAF] rounded-full z-20"
              title="Motor"
            ></div>
          </div>
          {/* Szöveg mellette */}
          <div className="absolute bottom-[8%] right-[35%] w-20 sm:w-40 md:w-56 text-[8px] sm:text-xs font-bold text-black text-left z-10">
            Szemenkénti 2k-s felbontás, 16 haptikus motor
          </div>
        </div>

        {/* Alsó címsor */}
        <h4 className="mt-10 text-sm sm:text-xl md:text-2xl font-bold text-[#43AFAF]">
          Csapatos vagy egyéni kalandok, ahol minden lépés számít
        </h4>
      </div>
    </section>
  );
}

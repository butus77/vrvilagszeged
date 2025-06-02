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
          <div className="absolute top-[12%] left-[70%] transform -translate-x-1/2">
            <div
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-11 lg:h-11 bg-[#43AFAF] rounded-full z-20"
              title="Mellkasi rezgés"
            ></div>
          </div>
          {/* Szöveg mellette */}
          <div className="absolute top-[10%] left-[77%] sm:gipl-3 w-10 sm:w-40 md:w-56 md:top-[6%] text-[clamp(6px,2vw,18px)] font-bold text-black text-left z-10">
            Haptikus mellényekkel érzed a találatokat, ütéseket és rezgéseket
          </div>

          {/* 2. Headset pont */}
          <div className="absolute top-[56%] left-[5%] transform -translate-x-1/2">
            <div
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-11 lg:h-11  bg-[#43AFAF] rounded-full z-20"
              title="Fejrész"
            ></div>
          </div>
          {/* Szöveg mellette */}
          <div className="absolute top-[40%] sm:-ml-6 md:top-[40%] left-[1%] lg:top-[36%] lg:-left-1 w-10 sm:w-24 md:w-30 text-[clamp(6px,2vw,18px)]  font-bold text-black text-left z-10">
            Pico 4 Ultra headsettel garantált élmény
          </div>

          {/* 3. Haptikus motor pont */}
          <div className="absolute bottom-[20%] right-[40%] transform translate-x-1/2">
            <div
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-11 lg:h-11  bg-[#43AFAF] rounded-full z-20"
              title="Motor"
            ></div>
          </div>
          {/* Szöveg mellette */}
          <div className="absolute bottom-[10%] lg:bottom-[4%] left-1/2 transform -translate-x-1/2 max-w-xs sm:max-x-sm   md:max-w-md text-center text-[clamp(6px,2vw,18px)] font-bold text-black z-10">
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

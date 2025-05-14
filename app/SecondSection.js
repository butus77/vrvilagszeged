export default function SecondSection() {
  return (
    <section className="relative w-full bg-[#EAF4EC]  text-center flex flex-col items-center">
      {/* Címsor */}
      <h2 className="pt-[10%] pb-[10%] text-2xl sm:text-3xl md:text-4xl font-bold text-[#43AFAF]">
        A valóság már nem kötelező!
      </h2>

      {/* Kép (haptic) */}
      <div className="relative z-10 w-[250px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[500px] md:h-[500px] lg:w-[600px]">
        <img
          src="/images/haptic 1.svg"
          alt="Haptikus élmény"
          className="w-full h-full object-contain"
        />

        {/* Felső jobb sarok */}
        <button
          className="absolute top-[7%] left-[70%] z-20 bg-[#43AFAF] w-6 h-6 sm:w-10 sm:h-10 rounded-full hover:bg-[#367D7E] transition"
          title="Mellkasi rezgés"
        ></button>

        {/* Felső jobb sarok szöveg */}
        <div className="absolute px-3 top-[5%] left-[80%] sm:left-[80%] w-32 sm:w-40 md:w-60 text-xs sm:text-sm text-black font-bold text-left break-words">
          Haptikus mellényekkel érzed a találatokat, ütéseket és rezgéseket
        </div>

        {/* Bal oldal közepe */}
        <button
          className="absolute top-[50%] left-[10%] z-20 bg-[#43AFAF] w-6 h-6 sm:w-10 sm:h-10 rounded-full hover:bg-[#367D7E] transition"
          title="Metaquest"
        ></button>

        <div className="absolute pl-[10%] top-[20%] left-[-28%] w-32 sm:w-40 md:w-60 text-xs sm:text-sm text-black font-bold text-left break-words">
          A Hyper-Reális játékélményt Pico 4 Ultra Enterpise headset-tel és
          haptikus mellénnyel garantáljuk
        </div>

        {/* Alsó jobb sarok */}
        <button
          className="absolute bottom-[10%] right-[24%] z-1 bg-[#43AFAF] w-6 h-6 sm:w-10 sm:h-10 rounded-full hover:bg-[#367D7E] transition"
          title="Alsó rész"
        ></button>

        <div className="absolute -bottom-[10%] right-[10%] w-32 sm:w-40 md:w-60 text-xs sm:text-sm text-black font-bold text-left break-words z-2">
          Szemenkénti 2k-s felbontás, 16 haptikus motor
        </div>
      </div>

      {/* Szöveges magyarázat */}
      <h4 className="pt-[10%] pb-[10%] sm:text-2xl md:text-3xl font-bold text-[#43AFAF] z-20 relative">
        Csapatos vagy egyéni kalandok, ahol minden lépés számít
      </h4>

      {/* Díszítő elem */}
      <div
        className="absolute -bottom-20 bg-[#EAF4EC]  w-full z-10"
        style={{
          height: "213px",
          clipPath:
            "polygon(50% 25%, 100% 25%, 100% 70%, 50% 100%, 0% 70%, 0% 25%)",
        }}
      ></div>
    </section>
  );
}

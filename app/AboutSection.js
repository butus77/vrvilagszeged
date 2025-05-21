import Characters from "./Characters";
import ChefCutout from "./ChefCutout";
import CopCutout from "./CopCutout";

export default function AboutSection() {
  return (
    <section
      className="relative mt-44 px-6 py-16 flex flex-col items-center text-black z-0 overflow-hidden"
      style={{
        backgroundColor: "#EAF4EC",
        clipPath:
          "polygon(50% 6%, 100% 0, 100% 100%, 48% 100%, 0 100%, 0 0)",
      }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-16 py-10 text-center">
        Rólunk
      </h2>

      <p className="max-w-3xl text-center text-base sm:text-sm md:text-xl leading-relaxed mb-30 z-10 mx-10 md:mx-24 px-4 lg:mb-50">
        A VR Világ 2025-ben indult azzal a céllal, hogy Szegedre elhozza a
        szabadmozgásos szórakozás jövőjét. Alapítóink kockák, akik sportolói
        múltjukat a virtuális valóság iránti szenvedélyükkel ötvözték, hogy
        létrehozzanak egy olyan helyet, ahol te magad lépheted át a határokat!
        <br />
        <br />
        Nekünk a freeroam VR technológia a lényeg: nincs több kábel, nincs
        beszűkült tér – a legfejlettebb szabadmozgásos rendszereinkkel szabadon
        mozoghatsz egy végtelen virtuális univerzumban. Sétálj, ugrálj vagy akár
        kússz, minden mozdulatod tökéletesen a játék részévé válik. A haptikus
        eszközök még mélyebbé teszik az élményt: érezd a környezeted rezgéseit,
        egy fegyver súlyát vagy egy akció lendületét – mindezt korlátok nélkül,
        ahogy te szeretnéd.
        <br />
        <br />
        Csapatunk azon dolgozik, hogy a valóság és a virtuális világ közötti
        határ eltűnjön, és te igazán szabadon mozoghass.
      </p>
      <p></p>

      {/* Díszítő elemek - karakterek */}
      <CopCutout />
      <ChefCutout />
      <Characters />
    </section>
  );
}



import Characters from "./Characters";
import ChefCutout from "./ChefCutout";
import CopCutout from "./CopCutout";

export default function AboutSection() {
  return (
    <section className="relative mt-44 bg-[#EAF4EC] text-black px-6 py-16 flex flex-col items-center z-0">
      <h2 className="text-3xl font-bold -mt-10  p-18">Rólunk</h2>
      <p className="max-w-2xl text-center text-base leading-relaxed pr-4 pb-46 z-10">
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
      <CopCutout />
      <ChefCutout />
      <Characters />
    </section>
  );
}

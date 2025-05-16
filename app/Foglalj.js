export default function Foglalj() {
  return (
    <>
      {/* Címsor */}
      <h2 className="py-2 text-center text-[#EAF4EC] text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
        Foglalj!
      </h2>

      {/* Lépések gridben */}
      <section className="bg-transparent px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8 max-w-6xl mx-auto py-10">
          {/* 1. lépés */}
          <div className="flex items-start gap-3">
            <div className="border-2 border-[#43AFAF] text-[#43AFAF] font-bold px-3 py-1 text-lg">
              1
            </div>
            <p className="text-[#43AFAF] text-sm">
              Válaszd ki a kívánt VR játékot
            </p>
          </div>

          {/* 2. lépés */}
          <div className="flex items-start gap-3">
            <div className="border-2 border-[#43AFAF] text-[#43AFAF] font-bold px-3 py-1 text-lg">
              2
            </div>
            <p className="text-[#43AFAF] text-sm">
              Döntsd el, hány fős csapattal érkezel
            </p>
          </div>

          {/* 3. lépés */}
          <div className="flex items-start gap-3">
            <div className="border-2 border-[#43AFAF] text-[#43AFAF] font-bold px-3 py-1 text-lg">
              3
            </div>
            <p className="text-[#43AFAF] text-sm">Foglald le az időpontot</p>
          </div>

          {/* 4. lépés */}
          <div className="flex items-start gap-3">
            <div className="border-2 border-[#43AFAF] text-[#43AFAF] font-bold px-3 py-1 text-lg">
              4
            </div>
            <p className="text-[#43AFAF] text-sm">
              Készülj a valódi élményekre!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

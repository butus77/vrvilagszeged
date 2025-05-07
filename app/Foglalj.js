export default function Foglalj(){
    return (
        <>
          <h2 className="py-10 bg-[#0E0E0F]/50 mix-blend-multiply text-center text-[#EAF4EC] text-2xl sm:text-3xl md:text-4xl font-bold leading-[30px]">
            Foglalj
          </h2>
          <section className="sm:bg-[#0e0e0f]/50 mix-blend-multiply sm:px-4 sm:py-8">
            <section className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-12 bg-[#0e0e0f]/10  min-2xl px-4 py-8 max-w-3xl mx-auto">
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
            </section>
          </section>
          </>
          );
}
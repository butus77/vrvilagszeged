export default function ImageGridSection() {
    return (
        <>
        <p className="py-5  bg-[#0E0E0F] sm:top-40 md:top-60 text-center text-[#EAF4EC] text-2xl sm:text-3xl md:text-4xl font-bold leading-[30px] z-50">
        Foglalj
      </p>
      <section className="relative  px-4 py-12 bg-[#0E0E0F]">
         
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <img src="/images/Group 9.svg" alt="Kép 1" className="w-full h-auto object-cover" />
          <img src="/images/Group 10.svg" alt="Kép 2" className="w-full h-auto object-cover" />
          <img src="/images/Group 11.svg" alt="Kép 3" className="w-full h-auto object-cover" />
          <img src="/images/Group 12.svg" alt="Kép 4" className="w-full h-auto object-cover" />
          <img src="/images/Group 13.svg" alt="Kép 5" className="w-full h-auto object-cover" />
          <img src="/images/Group 14.svg" alt="Kép 6" className="w-full h-auto object-cover" />
        </div>
      </section>
      </>
    );
  }
  
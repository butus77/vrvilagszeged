import Image from "next/image";

export default function ImageGridSection() {
  return (
    <>
      <h2 className="py-10 bg-[#0E0E0F] sm:top-40 md:top-60 text-center text-[#EAF4EC] text-2xl sm:text-3xl md:text-4xl font-bold leading-[30px]">
        Foglalj
      </h2>
      <section className="relative -mb-14 px-4  bg-[#0E0E0F]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto p-16">
          <Image
            src="/images/Group 9.svg"
            alt="Kép 1"
            width={400} height={300} 
            className="w-full h-auto object-cover"
          />
          <Image
            src="/images/Group 10.svg"
            alt="Kép 2"
            width={400} height={300} 
            className="w-full h-auto object-cover"
          />
          <Image
            src="/images/Group 11.svg"
            alt="Kép 3"
            width={400} height={300} 
            className="w-full h-auto object-cover"
          />
          <Image
            src="/images/Group 12.svg"
            alt="Kép 4"
            width={400} height={300} 
            className="w-full h-auto object-cover"
          />
          <Image
            src="/images/Group 13.svg"
            alt="Kép 5"
            width={400} height={300} 
            className="w-full h-auto object-cover"
          />
          <Image
            src="/images/Group 14.svg"
            alt="Kép 6"
            width={400} height={300} 
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
    </>
  );
}

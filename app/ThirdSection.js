import Image from "next/image";

export default function ThirdSection() {
  return (
    <section className="relative bg-[#0E0E0F]  px-4 flex justify-center items-center z-0">
      <div className="flex flex-wrap justify-center items-center gap-6 opacity-50 mix-blend-luminosity max-w-full">
        <Image
          src="/images/Frame 61.svg"
          alt="Dekoráció 1"
          width={2566}
          height={128}
        />
      </div>
    </section>
  );
}

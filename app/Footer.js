import Image from "next/image";

export default function Vege() {
  return (
    <section className="relative bg-[#0E0E0F] text-white w-full px-4 py-16 z-0 hidden lg:block">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-start relative">

        {/* Bal oldal: logó és kontakt info */}
        <div className="flex flex-col gap-4 items-start">
          <div
            className="w-[336px] h-[100px] bg-no-repeat bg-contain"
            style={{ backgroundImage: "url('/images/VRVilág-fekvő-v 2.svg')" }}
          ></div>
          <div className="text-sm text-left">
            <p>Név | </p>
            <p>Email |</p>
         <p>Telefonszám |</p>
         <p>Cím |</p>
          </div>
        </div>

        {/* Jobb oldal: menüpontok és social linkek */}
        <div className="flex flex-col gap-6 items-end text-right">
          <div className="text-sm space-y-1">
            <p>Szabályok a teremben</p>
            <p>ÁSZF</p>
            <p>GYIK</p>
            <p>Social linkek</p>
          </div>

          <div className="flex space-x-4 pt-2">
            <div className="w-4 h-4 bg-white rounded-full" />
            <div className="w-4 h-4 bg-white rounded-full" />
            <div className="w-4 h-4 bg-white rounded-full" />
          </div>
        </div>
      </div>

      {/* Alsó copyright sor */}
      <div className="text-center text-xs text-gray-400 pt-10">© 2025 VR Világ</div>
    </section>
  );
}


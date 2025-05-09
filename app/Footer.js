import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="relative bg-[#0E0E0F]/50 mix-blend-multiply text-white w-full px-4 py-16 z-0">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0 relative">
        {/* Bal oldal: logó és kontakt info */}
        <div className="flex flex-col gap-4 items-start">
          <Link href="/" scroll={true}>
            <div
              className="w-[180px] h-[50px] bg-no-repeat bg-contain cursor-pointer"
              style={{
                backgroundImage: "url('/images/VRVilag2.svg')",
              }}
            />
          </Link>
          <div className="text-sm text-left leading-relaxed">
            <p>VR Világ – office@vrvilag.hu</p>
            <p>+36 30 122 4656</p>
            <p>Szeged, Vadász utca 2/b</p>
          </div>
        </div>

        {/* Jobb oldal: menüpontok és social linkek */}
        <div className="flex flex-col gap-6 items-start md:items-end text-left md:text-right">
          <div className="text-sm space-y-1">
            <p>Szabályok a teremben</p>
            <p>ÁSZF</p>
            <p>GYIK</p>
          </div>

          <div className="flex space-x-4 pt-2">
            <a
              href="https://www.facebook.com/profile.php?id=61572550628910"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/facebook-logo.png"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.instagram.com/vr_vilag"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/Instagram_icon.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Alsó copyright sor */}
      <div className="text-center text-xs text-gray-400 pt-10">
        © 2025 VR Világ
      </div>
    </section>
  );
}

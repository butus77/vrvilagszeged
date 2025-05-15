import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="top-0 w-full bg-[#0E0E0F]/80 text-white py-4 z-50 overflow-hidden">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        {/* Logó */}
        <Image
          src="/images/VRVilag2.svg"
          alt="VR Világ logó"
          width={100}
          height={20}
        />

        {/* Mobil: csak foglalás gomb */}
        <div className="flex sm:hidden">
          <Link
            href="/foglalas"
            className="bg-[#43AFAF] text-white px-4 py-2 rounded-xl text-sm font-semibold"
          >
            Foglalás
          </Link>
        </div>

        {/* Tablet: ikonok és foglalás gomb */}
        <div className="hidden sm:flex md:hidden items-center space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=61572550628910"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/facebook-logo.png"
              alt="Facebook"
              width={120}
              height={40}
              className="h-5 w-auto"
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
              width={120}
              height={40}
              className="h-5 w-auto"
            />
          </a>
          <Link
            href="/foglalas"
            className="bg-[#43AFAF] text-white px-4 py-2 rounded-xl text-sm font-semibold"
          >
            Foglalás
          </Link>
        </div>

        {/* Asztali: menüpontok, ikonok, gomb */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/ismerteto" className="text-sm font-semibold px-4 py-2">
            Ismertető
          </Link>
          <Link href="/jatekaink" className="text-sm font-semibold px-4 py-2">
            Játékaink
          </Link>
          <Link href="/rolunk" className="text-sm font-semibold px-4 py-2">
            Rólunk
          </Link>

          <Link
            href="/foglalas"
            className="bg-[#43AFAF] text-white px-4 py-2 rounded-xl text-sm font-semibold"
          >
            Foglalás
          </Link>

          <a
            href="https://www.facebook.com/profile.php?id=61572550628910"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/facebook-logo.png"
              alt="Facebook"
              width={120}
              height={40}
              className="h-5 w-auto"
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
              width={120}
              height={40}
              className="h-5 w-auto"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;


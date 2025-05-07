import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="top-0 left-0 w-full bg-[#0E0E0F]  text-white px-4 py-4 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logó */}
        <Image
          src="/images/VRVilag2.svg"
          alt="VR Világ logó"
          width={180}
          height={50}
        />

        <div className="hidden sm:flex items-center space-x-4 md:hidden">
          <a
            href="https://www.facebook.com/profile.php?id=61572550628910"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/facebook-logo.png"
              alt="kozosegi media logok"
              width={120}
              height={40}
              className="w-auto h-5"
            />
          </a>
          <a
            href="https://www.instagram.com/vr_vilag/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/Instagram_icon.png"
              alt="kozosegi media logok"
              width={120}
              height={40}
              className="w-auto h-5"
            />
          </a>

          {/* Foglalás gomb */}
          <Link
            href="/foglalas"
            className="bg-[#43AFAF] text-white px-4 py-2 rounded-xl text-sm font-semibold sm:text-base right-4 top-4 sm:right-8"
          >
            Foglalás
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/ismerteto"
            className=" text-white px-4 py-2 rounded-xl text-sm font-semibold sm:text-base right-4 top-4 sm:right-8"
          >
            Ismertető
          </Link>
          <Link
            href="/jatekaink"
            className=" text-white px-4 py-2 rounded-xl text-sm font-semibold sm:text-base right-4 top-4 sm:right-8"
          >
            Játékaink
          </Link>
          <Link
            href="/rolunk"
            className=" text-white px-4 py-2 rounded-xl text-sm font-semibold sm:text-base right-4 top-4 sm:right-8"
          >
            Rólunk
          </Link>

          {/* Foglalás gomb */}
          <Link
            href="/foglalas"
            className="bg-[#43AFAF] text-white px-4 py-2 rounded-xl text-sm font-semibold sm:text-base right-4 top-4 sm:right-8"
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
              alt="kozosegi media logok"
              width={120}
              height={40}
              className="w-auto h-5"
            />
          </a>
          <a
            href="https://www.instagram.com/vr_vilag/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/Instagram_icon.png"
              alt="kozosegi media logok"
              width={120}
              height={40}
              className="w-auto h-5"
            />
          </a>
        </div>

        {/* Mobil gomb (kép nélkül) */}
        <div className="flex sm:hidden">
          <Link
            href="/foglalas"
            className="bg-[#43AFAF] text-white px-4 py-2 rounded-xl text-sm font-semibold"
          >
            Foglalás
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

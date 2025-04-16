import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#0E0E0F] text-white px-4 py-4 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto sm:">
        {/* Logó */}
        <Image
          src="/images/VRVilág-fekvő-v 2.svg"
          alt="VR Világ logó"
          width={100}
          height={20}
        />

        <div className="hidden sm:flex items-center space-x-4 md:hidden">
          <Image 
            src="/images/Frame 63.svg"
            alt="kozosegi media logok"
            width={100}
            height={20}
            className="w-auto h-5"
          />

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
          <Image
            src="/images/Frame 63.svg"
            alt="kozosegi media logok"
            width={100}
            height={20}
            className="w-auto h-5"
          />
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

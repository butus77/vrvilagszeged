import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#0E0E0F] text-white px-4 py-4 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logó */}
        <Image
          src="/images/VRVilág-fekvő-v 2.svg"
          alt="VR Világ logó"
          width={100}
          height={20}
        />

        {/* Foglalás gomb */}
        <Link
          href="/foglalas"
          className="bg-[#43AFAF] text-white px-4 py-2 rounded-xl text-sm font-semibold"
        >
          Foglalás
        </Link>
      </div>
    </header>
  );
};

export default Header;

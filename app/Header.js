import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-[#0E0E0F] text-white px-4 py-4  flex items-center justify-between">
      <img
        src="/images/VRVilág-fekvő-v 2.svg"
        alt="VR Világ logó"
        className="h-10 sm:h-12 md:h-14 object-contain"
      />
      <Link
        href="/foglalas"
        className="bg-[#43AFAF] text-white px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-[#36a0a0] transition"
      >
        Foglalás
      </Link>
    </header>
  );
};

export default Header;

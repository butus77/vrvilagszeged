import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between mb-8">
      <img src="/images/VRVilág-fekvő-v 2.svg" />
      <Link href="/foglalas" className="bg-[#43AFAF] text-white px-4 py-2 ">
        Foglalás
      </Link>
    </header>
  );
};

export default Header;

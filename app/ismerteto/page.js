import Link from "next/link";
import Image from "next/image";

export default function Ismerteto() {
    return (
      <div className="fixed top-0 left-0 w-full text-amber-50 z-60">
        <div>
          {/* Logó */}
          <Link href="/">
          <Image
            src="/images/VRVilag2.svg"
            alt="VR Világ logó"
            width={100}
            height={20}
            className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto p-6"
            priority
          />
      </Link>
        </div>
        <h1 className="text-4xl font-bold">Ismertető</h1>
        <p>Ez egy új Next.js oldal, amit most hoztál létre.</p>
      </div>
    );
  }
  
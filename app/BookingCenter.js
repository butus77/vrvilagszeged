import Link from "next/link";

export default function BookingCenter() {
  return (
      <Link
        href="/foglalas"
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white bg-[#43AFAF] px-8 py-4 rounded-xl hover:bg-[#367D7E] transition duration-300 z-50"
      >
        Foglalj!
      </Link>
  );
}

import TransitionSection from "./TransitionSection";
import BookingCenter from "./BookingCenter";

export default function TransitionWithButton() {
  return (
    <div className="relative w-full h-[213px]">
      {/* Háttér dekoráció */}
      <TransitionSection />

      {/* Gomb, középen pozícionálva */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <BookingCenter />
      </div>
    </div>
  );
}

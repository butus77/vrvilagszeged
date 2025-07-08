import TransitionSection from "./TransitionSection";
import BookingCenter from "./BookingCenter";
import React from "react";

export default function TransitionWithButton(): React.JSX.Element {

  return (
    <div className="relative w-full h-[213px] z-40">
      {/* Háttér dekoráció */}
      <TransitionSection />
      {/* Gomb, középen pozícionálva */}
      <div className="absolute inset-0 flex items-center justify-center z-50">
        <BookingCenter />
      </div>
    </div>
  );
}

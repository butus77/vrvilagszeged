import BookingCenter from "./BookingCenter";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ImageGridSection from "./ImageGridSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import TransitionSection from "./TransitionSection";

export default function Home() {
  return (
   

    <>
      {/* Fejlec */}
      <Header />
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <ImageGridSection />
      <BookingCenter />
      </>
  );
}

import AboutSection from "./AboutSection";
import BookingCenter from "./BookingCenter";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ImageGridSection from "./ImageGridSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import TransitionSection from "./TransitionSection";
import TransitionWithButton from "./TransitionWithButton";
import Vege from "./Vege";

export default function Home() {
  return (
    <>
      {/* Fejlec */}
      <Header />
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <ImageGridSection />
      <TransitionWithButton />
      <AboutSection />
      <Vege />
    </>
  );
}

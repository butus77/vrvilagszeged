import AboutSection from "./AboutSection";
import Foglalj from "./Foglalj";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ImageGridSection from "./ImageGridSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
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
      <Foglalj />
      <ImageGridSection />
      <TransitionWithButton />
      <AboutSection />
      <Vege />
      <Footer />
    </>
  );
}

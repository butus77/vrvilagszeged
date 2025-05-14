import AboutSection from "./AboutSection";
import DarkMaskOverlay from "./DarkMaskOverlay";
import Foglalj from "./Foglalj";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ImageGridSection1 from "./ImageGridSection1";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import TransitionSection from "./TransitionSection";

export default function Home() {
  return (
    <>
      <Header />
      
      <HeroSection />

      <SecondSection />
    
      <ThirdSection />
    
      <Foglalj />
    
      <ImageGridSection1 />

      <TransitionSection />

      <AboutSection />

      <Footer />
    </>
  );
}

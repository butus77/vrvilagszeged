import AboutSection from "./AboutSection";
import Alap from "./Alap";
import Foglalj from "./Foglalj";
import Footer from "./Footer";
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
      <Header />
      
      <HeroSection />

      <SecondSection />
    
      <ThirdSection />
    
      <Foglalj />
    
      <ImageGridSection />

      <TransitionSection />

      <AboutSection />

      <Footer />
    </>
  );
}

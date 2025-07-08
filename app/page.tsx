import AboutSection from "../components/AboutSection";
import Foglalj from "../components/Foglalj";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ImageGridSection1 from "../components/ImageGridSection1";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <Foglalj />
      <ImageGridSection1 />
      <AboutSection />
      <Footer />
    </>
  );
}

import Header from "./Header";
import HeroSection from "./HeroSection";

export default function Home() {
  return (
    <section className="bg-[#0e0e0f] min-h-screen flex flex-col items-center justify-between p-4 ">
      {/* Fejlec */}
      <Header />
      <HeroSection />
    </section>
  );
}

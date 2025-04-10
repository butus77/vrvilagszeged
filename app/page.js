import Header from "./Header";
import HeroSection from "./HeroSection";
import PostSection from "./PostSection";

export default function Home() {
  return (
    <section className="relative w-full bg-[#EAF4EC] px-4 py-12 text-center overflow-hidden">
      {/* Fejlec */}
      <Header />
      <HeroSection />
      <PostSection />
    </section>
  );
}

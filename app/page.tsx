import Features from "./_components/features";
import FeaturesB from "./_components/features-b";
import FeaturesC from "./_components/features-c";
import FeaturesD from "./_components/features-d";
import Footer from "./_components/footer";
import HeroSection from "./_components/hero-section";

export default function Home() {
  return (
    <section className=" w-screen overflow-x overflow-x-hidden  ">
      <HeroSection />
      <Features />
      <FeaturesB />
      <FeaturesC />
      <FeaturesD />
      <Footer />
    </section>
  );
}


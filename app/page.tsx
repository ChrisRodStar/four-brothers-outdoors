import Footer from "@/components/Footer";

import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />

      <Services />

      <AboutUs />



      <Footer />
    </div>
  );
}


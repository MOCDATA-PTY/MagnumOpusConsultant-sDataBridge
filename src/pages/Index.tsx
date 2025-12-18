import Navbar from "@/components/Landing/Navbar";
import Hero from "@/components/Landing/Hero";
import Features from "@/components/Landing/Features";
import Integrations from "@/components/Landing/Integrations";
import Footer from "@/components/Landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <section id="features">
        <Features />
      </section>
      <section id="integrations">
        <Integrations />
      </section>
      <Footer />
    </div>
  );
};

export default Index;

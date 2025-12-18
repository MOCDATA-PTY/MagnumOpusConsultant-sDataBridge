import Navbar from "@/components/Landing/Navbar";
import Hero from "@/components/Landing/Hero";
import Services from "@/components/Landing/Services";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
};

export default Index;

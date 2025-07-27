import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkSection from "@/components/WorkSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <WorkSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

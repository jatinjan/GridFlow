import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import EngineeringConsulting from "@/components/EngineeringConsulting";
import Services from "@/components/Services";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import WhyChooseGridFlow from "@/components/WhyChooseGridFlow";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <EngineeringConsulting />
      <Services />
      <IndustriesWeServe />
      <WhyChooseGridFlow />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

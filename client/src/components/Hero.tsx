import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Power generation facility with turbines and electrical infrastructure at sunset */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Your Partner in Trusted<br />
          <span className="text-blue-400">Power Engineering Solutions</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Delivering comprehensive electrical infrastructure and power systems engineering with over two decades of industry expertise.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-grid-blue hover:bg-grid-dark-blue text-white px-8 py-4 text-lg font-semibold h-auto"
          >
            Get Started Today
          </Button>
          <Button 
            onClick={() => scrollToSection('about')}
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold h-auto"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

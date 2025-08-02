import { Button } from "@/components/ui/button";
import { Award, Shield, Clock, Play } from "lucide-react";

const WhyChooseGridFlow = () => {
  const highlights = [
    {
      icon: Award,
      title: "Proven Expertise",
      description: "Over 20 years of experience delivering complex power engineering projects across industries."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Uncompromising commitment to safety standards and regulatory compliance in every project."
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Consistent track record of delivering projects on schedule and within budget constraints."
    }
  ];

  return (
    <section className="py-20 bg-white" id="why-choose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Industrial underground electrical infrastructure with power systems" 
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
            
            {/* Video Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button 
                variant="default" 
                size="lg"
                className="bg-grid-blue hover:bg-grid-dark-blue text-white rounded-full p-4 shadow-lg hover:scale-110 transition-all duration-300"
              >
                <Play className="h-6 w-6 mr-2" />
                Watch Our Story
                <span className="block text-sm font-normal mt-1">2 min overview</span>
              </Button>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-grid-dark-blue mb-6">
              Why Choose Grid Flow for Your Power Engineering Needs?
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our commitment to excellence, innovation, and client satisfaction sets us apart in the power engineering industry. We deliver solutions that exceed expectations.
            </p>

            <div className="space-y-6">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div key={index} className="flex items-start group">
                    <div className="flex-shrink-0 w-12 h-12 bg-grid-blue rounded-lg flex items-center justify-center mr-4 group-hover:bg-grid-dark-blue transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-grid-dark-blue mb-2">{highlight.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseGridFlow;
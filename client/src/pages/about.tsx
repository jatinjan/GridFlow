import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, Clock, Zap, Shield } from "lucide-react";

const About = () => {
  const stats = [
    { value: "20+", label: "Years Experience", icon: Clock },
    { value: "500+", label: "Projects Completed", icon: Award },
    { value: "200+", label: "Satisfied Clients", icon: Users },
    { value: "5000+", label: "MW Installed", icon: Zap }
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "We prioritize safety in every project, ensuring all work meets the highest industry standards and regulatory requirements."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Our commitment to excellence drives us to deliver innovative solutions that exceed client expectations and industry benchmarks."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We build lasting partnerships with our clients, working collaboratively to understand their unique needs and deliver tailored solutions."
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "We champion sustainable engineering practices, helping clients transition to renewable energy and reduce their environmental impact."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-grid-dark-blue to-grid-blue">
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Grid Flow
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Leading electrical engineering consultancy delivering innovative solutions across power systems, 
            renewable energy, and industrial automation throughout Australia.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-grid-dark-blue mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded in 2004, Grid Flow Engineering Solutions emerged from a vision to transform Australia's 
                power infrastructure landscape. What started as a small consultancy has grown into a leading 
                engineering firm, trusted by major utilities, industrial clients, and government agencies.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Our journey began with a simple mission: to deliver reliable, innovative, and sustainable power 
                engineering solutions that drive Australia's economic growth while protecting our environment.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Today, we're proud to have contributed to some of Australia's most significant infrastructure 
                projects, from large-scale renewable energy installations to critical industrial automation systems.
              </p>
              <Button className="bg-grid-blue hover:bg-grid-dark-blue text-white">
                View Our Projects
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Engineering team reviewing electrical system blueprints" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-grid-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-grid-dark-blue mb-4">Our Impact</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Two decades of excellence in power engineering, delivering results that matter.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-grid-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-grid-blue mb-2">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-grid-dark-blue mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              The principles that guide everything we do, from project planning to delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <CardContent className="p-8">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-grid-blue rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-grid-dark-blue mb-3">{value.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-grid-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-white rounded-xl shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-grid-dark-blue mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To deliver innovative, reliable, and sustainable power engineering solutions that drive 
                  Australia's transition to a clean energy future while ensuring grid stability and industrial 
                  productivity. We are committed to excellence, safety, and environmental stewardship in 
                  everything we do.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white rounded-xl shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-grid-dark-blue mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be Australia's most trusted power engineering consultancy, recognized for our technical 
                  expertise, innovative solutions, and commitment to building a sustainable energy infrastructure 
                  that powers economic growth and improves quality of life for all Australians.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Zap, Settings, Leaf, Shield, Wrench, Users } from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Zap,
      title: "Power Systems Engineering",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description: "Comprehensive power system design, analysis, and optimization services for utilities, industrial facilities, and commercial developments.",
      capabilities: [
        "Load flow analysis and power system studies",
        "Short circuit and fault analysis",
        "Protection coordination and relay settings",
        "Power quality assessment and mitigation",
        "Grid connection studies and compliance",
        "SCADA and energy management systems"
      ],
      benefits: [
        "Improved system reliability and efficiency",
        "Reduced downtime and maintenance costs",
        "Enhanced safety and compliance",
        "Optimized power quality and performance"
      ]
    },
    {
      icon: Leaf,
      title: "Renewable Energy Integration",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description: "Expert services for integrating solar, wind, and energy storage systems into existing power infrastructure with grid compliance.",
      capabilities: [
        "Solar PV system design and integration",
        "Wind farm electrical infrastructure",
        "Battery energy storage systems (BESS)",
        "Microgrid design and implementation",
        "Grid code compliance and connection",
        "Power purchase agreement support"
      ],
      benefits: [
        "Reduced carbon footprint and energy costs",
        "Energy independence and security",
        "Compliance with renewable energy targets",
        "Future-ready infrastructure investment"
      ]
    },
    {
      icon: Settings,
      title: "Industrial Automation",
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description: "Advanced automation solutions for manufacturing, mining, and process industries to optimize operations and improve safety.",
      capabilities: [
        "PLC programming and control systems",
        "HMI development and visualization",
        "SCADA system integration",
        "Motor control and variable frequency drives",
        "Process optimization and control",
        "Safety instrumented systems (SIS)"
      ],
      benefits: [
        "Increased operational efficiency",
        "Improved product quality and consistency",
        "Enhanced workplace safety",
        "Reduced operational costs and waste"
      ]
    },
    {
      icon: Shield,
      title: "Electrical Safety & Compliance",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description: "Comprehensive safety assessment and compliance services to ensure your electrical systems meet all regulatory requirements.",
      capabilities: [
        "Arc flash hazard analysis and mitigation",
        "Electrical safety audits and assessments",
        "AS/NZS 3000 compliance verification",
        "Hazardous area classification studies",
        "Safety training and procedure development",
        "Incident investigation and analysis"
      ],
      benefits: [
        "Protected workforce and assets",
        "Regulatory compliance assurance",
        "Reduced insurance premiums",
        "Minimized liability and risk exposure"
      ]
    },
    {
      icon: Wrench,
      title: "Maintenance & Asset Management",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description: "Proactive maintenance strategies and asset management solutions to maximize equipment life and minimize downtime.",
      capabilities: [
        "Predictive maintenance programs",
        "Condition monitoring and diagnostics",
        "Asset performance optimization",
        "Maintenance planning and scheduling",
        "Spare parts management",
        "Equipment lifecycle management"
      ],
      benefits: [
        "Extended asset life and reliability",
        "Reduced unplanned downtime",
        "Lower maintenance costs",
        "Improved operational efficiency"
      ]
    },
    {
      icon: Users,
      title: "Engineering Consulting",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description: "Expert consulting services from concept to commissioning, providing technical expertise and project management excellence.",
      capabilities: [
        "Feasibility studies and concept design",
        "Detailed engineering and documentation",
        "Project management and delivery",
        "Commissioning and testing services",
        "Technical due diligence",
        "Expert witness and litigation support"
      ],
      benefits: [
        "Access to specialized expertise",
        "Reduced project risks and costs",
        "Faster project delivery",
        "Assured technical quality"
      ]
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
            Our Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive power engineering solutions tailored to meet your specific requirements and industry standards.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-grid-dark-blue mb-4">
              End-to-End Power Engineering Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From initial feasibility studies to ongoing maintenance, we provide comprehensive services 
              across the entire project lifecycle.
            </p>
          </div>

          <div className="space-y-20">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-grid-blue rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-grid-dark-blue">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-grid-dark-blue mb-4">Core Capabilities</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.capabilities.map((capability, idx) => (
                          <div key={idx} className="flex items-start">
                            <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-grid-dark-blue mb-4">Key Benefits</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start">
                            <ArrowRight className="h-4 w-4 text-grid-blue mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="bg-grid-blue hover:bg-grid-dark-blue text-white">
                      Learn More About {service.title}
                    </Button>
                  </div>
                  
                  <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="rounded-xl shadow-lg w-full h-auto object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-grid-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-grid-dark-blue mb-4">Industries We Serve</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our expertise spans across multiple industries, delivering specialized solutions that meet unique sector requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: "Mining & Resources", icon: "⛏️" },
              { name: "Manufacturing", icon: "🏭" },
              { name: "Oil & Gas", icon: "⛽" },
              { name: "Data Centers", icon: "🏢" },
              { name: "Utilities", icon: "⚡" },
              { name: "Renewable Energy", icon: "🌱" }
            ].map((industry, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">{industry.icon}</div>
                  <h3 className="text-sm font-semibold text-gray-800">{industry.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-grid-dark-blue mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            Contact our team of experts to discuss your power engineering requirements and discover how we can help bring your project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-grid-blue hover:bg-grid-dark-blue text-white px-8 py-3 text-lg">
              Get Free Consultation
            </Button>
            <Button variant="outline" className="border-2 border-grid-blue text-grid-blue hover:bg-grid-blue hover:text-white px-8 py-3 text-lg">
              Download Services Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
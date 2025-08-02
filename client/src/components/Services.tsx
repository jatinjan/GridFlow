import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Electrical Engineering",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Electrical engineer reviewing technical drawings",
      features: [
        "Power system design",
        "Load flow analysis", 
        "Protection coordination",
        "Arc flash studies",
        "Power quality assessment"
      ]
    },
    {
      title: "Infrastructure Design",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Industrial power substation with transformers",
      features: [
        "Substation design",
        "Transmission lines",
        "Distribution networks", 
        "SCADA systems",
        "Grid modernization"
      ]
    },
    {
      title: "Renewable Integration",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Wind turbines and solar panels renewable energy facility",
      features: [
        "Solar system design",
        "Wind farm integration",
        "Energy storage systems",
        "Grid interconnection", 
        "Microgrid solutions"
      ]
    }
  ];

  const additionalServices = [
    {
      title: "Industrial Projects",
      image: "https://pixabay.com/get/g82248756313a39d3a2f258073d2c729996f0c4ec750bb1bd42955e834a2d8dbc3d4bbda5b9971b50ba13563d2a5a716ee0ec990fd03e5d123ff7ef2002d756ad_1280.jpg",
      alt: "Industrial manufacturing facility with electrical systems",
      description: "Comprehensive electrical solutions for manufacturing, processing, and industrial facilities with focus on efficiency and safety.",
      features: ["Motor control centers", "Process automation", "Safety systems"]
    },
    {
      title: "Construction Support", 
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Engineers working on electrical infrastructure construction site",
      description: "End-to-end construction support from design validation through commissioning and testing of electrical systems.",
      features: ["Project management", "Quality assurance", "Commissioning services"]
    },
    {
      title: "Safety & Compliance",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Engineers reviewing electrical systems with safety equipment",
      description: "Comprehensive safety assessments and regulatory compliance services to ensure your systems meet all industry standards.",
      features: ["Safety audits", "Code compliance", "Risk assessments"]
    }
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-grid-dark-blue mb-4">Comprehensive Power Engineering Services</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            From concept to completion, we provide end-to-end power engineering solutions tailored to your specific requirements and industry standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <CardContent className="p-8">
                <img 
                  src={service.image} 
                  alt={service.alt} 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-bold text-grid-dark-blue mb-4">{service.title}</h3>
                <ul className="text-gray-600 space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="link" className="text-grid-blue hover:text-grid-dark-blue font-semibold p-0">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <CardContent className="p-8">
                <img 
                  src={service.image} 
                  alt={service.alt} 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-bold text-grid-dark-blue mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="text-gray-600 space-y-1 text-sm mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
                <Button variant="link" className="text-grid-blue hover:text-grid-dark-blue font-semibold p-0">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

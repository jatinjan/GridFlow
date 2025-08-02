import { Card, CardContent } from "@/components/ui/card";
import { Building2, Hammer, Zap, Database, Factory, Truck } from "lucide-react";

const IndustriesWeServe = () => {
  const industries = [
    {
      icon: Building2,
      title: "Commercial",
      description: "Industrial automation and power distribution solutions for commercial buildings.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Hammer,
      title: "Mining",
      description: "Electrical automation and power distribution solutions for mining operations.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Zap,
      title: "Oil & gas",
      description: "Industrial automation and power distribution solutions for oil and gas facilities.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Database,
      title: "Data centres",
      description: "Industrial automation and power distribution solutions for data centers.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Industrial automation and power distribution solutions for manufacturing facilities.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Zap,
      title: "Utilities",
      description: "Industrial automation and power distribution solutions for manufacturing facilities.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Truck,
      title: "Transport",
      description: "Industrial automation and power distribution solutions for manufacturing facilities.",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-grid-dark-blue mb-4">Industries We Serve</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our expertise spans across multiple industries, delivering specialized power engineering solutions that meet unique sector requirements and regulatory standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {industries.slice(0, 4).map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Card key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${industry.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{industry.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.slice(4).map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Card key={index + 4} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${industry.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{industry.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
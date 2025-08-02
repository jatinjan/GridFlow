import { Button } from "@/components/ui/button";

const EngineeringConsulting = () => {
  return (
    <section className="py-20 bg-grid-light-gray" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-grid-dark-blue mb-6">Engineering Consulting</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Our expert team of power engineers combines decades of experience with cutting-edge technology to deliver comprehensive solutions for your electrical infrastructure needs. From initial concept through final implementation, we provide trusted engineering consulting that ensures optimal performance and reliability.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We specialize in power generation, transmission, distribution systems, and renewable energy integration. Our proven track record spans across industrial, commercial, and utility-scale projects.
            </p>
            <Button className="bg-grid-blue hover:bg-grid-dark-blue text-white">
              Read More
            </Button>
          </div>
          <div className="relative">
            {/* Oil pump jack silhouette against dramatic sunset sky */}
            <img 
              src="https://pixabay.com/get/ge3b244b066d61bc03cc4fa3c0623788e05884a3ce1d53715ba642f09dc6485f2ba1369c221a0a21d799728689d1d6c916847f1f4a83221eb85b13790db79dc42_1280.jpg" 
              alt="Oil pump jack at sunset representing power engineering infrastructure" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringConsulting;

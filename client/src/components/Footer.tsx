import { Facebook, Linkedin, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // GridFlow logo SVG component
  const GridFlowLogo = () => (
    <div className="flex items-center">
      <div className="relative">
        {/* Main logo circle with dots pattern */}
        <div className="w-16 h-16 relative">
          {/* Outer circle with dots */}
          <div className="absolute inset-0 rounded-full border-2 border-white">
            {/* Dots around the circle */}
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * 15}deg) translateY(-28px)`
                }}
              />
            ))}
          </div>
          {/* Inner content */}
          <div className="absolute inset-2 flex items-center justify-center">
            <div className="text-white font-bold text-lg">GF</div>
          </div>
        </div>
      </div>
      <div className="ml-3">
        <div className="text-white font-bold text-lg tracking-wider">GRIDFLOW</div>
        <div className="text-gray-300 text-xs tracking-wider">ENGINEERING SOLUTIONS</div>
      </div>
    </div>
  );

  // Aboriginal flag SVG
  const AboriginalFlag = () => (
    <div className="w-12 h-8 relative overflow-hidden rounded">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-black"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-red-600"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full"></div>
    </div>
  );

  return (
    <footer className="bg-slate-800 text-white">
      {/* Main footer content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left Column - Company Info */}
            <div className="md:col-span-1">
              <GridFlowLogo />
              <p className="text-gray-300 mt-6 text-sm leading-relaxed max-w-sm">
                GridFlow - Leading electrical engineering consultancy delivering innovative solutions across power systems, renewable energy, and industrial automation throughout Australia.
              </p>
              <div className="flex space-x-3 mt-6">
                <a 
                  href="#" 
                  className="w-9 h-9 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="w-9 h-9 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="w-9 h-9 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="w-9 h-9 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
                  aria-label="X (Twitter)"
                >
                  <FaXTwitter className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Center Column - Services */}
            <div>
              <h4 className="text-white font-semibold text-base mb-6">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Power Systems</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Renewable Energy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Industrial Automation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Electrical Safety</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Maintenance</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Consulting</a></li>
              </ul>
            </div>

            {/* Right Column - Company */}
            <div>
              <h4 className="text-white font-semibold text-base mb-6">Company</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    About Us
                  </button>
                </li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Our Team</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Case Studies</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">News</a></li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Grid Flow Engineering Solutions. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Policy & privacy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms & conditions</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Acknowledgement bar */}
      <div className="bg-slate-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-12 h-12 relative">
                {/* Smaller GridFlow logo */}
                <div className="absolute inset-0 rounded-full border border-gray-400">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-0.5 h-0.5 bg-gray-400 rounded-full"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) rotate(${i * 22.5}deg) translateY(-20px)`
                      }}
                    />
                  ))}
                </div>
                <div className="absolute inset-2 flex items-center justify-center">
                  <div className="text-gray-400 font-bold text-xs">GF</div>
                </div>
              </div>
            </div>
            
            <div className="text-center flex-1 mx-6">
              <p className="text-gray-300 text-sm">
                GridFlow acknowledges the Whadjuk people of the Noongar Nation, the Traditional Owners of the land on which we stand, 
                and we pay our respect to the Elders past, present and emerging. We acknowledge the Noongar peoples continuing 
                cultural connection to the land, waters, and community.
              </p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <AboriginalFlag />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

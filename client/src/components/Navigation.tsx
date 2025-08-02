import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - exactly as specified in requirements */}
          <div className="flex-shrink-0">
            <div className="text-xl font-bold text-grid-dark-blue">Grid Flow</div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/">
                <a className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-grid-blue' : 'text-grid-gray hover:text-grid-blue'
                }`}>
                  Home
                </a>
              </Link>
              <Link href="/services">
                <a className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/services') ? 'text-grid-blue' : 'text-grid-gray hover:text-grid-blue'
                }`}>
                  Services
                </a>
              </Link>
              <Link href="/about">
                <a className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/about') ? 'text-grid-blue' : 'text-grid-gray hover:text-grid-blue'
                }`}>
                  About
                </a>
              </Link>
              <Link href="/team">
                <a className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/team') ? 'text-grid-blue' : 'text-grid-gray hover:text-grid-blue'
                }`}>
                  Team
                </a>
              </Link>
              <Link href="/case-studies">
                <a className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/case-studies') ? 'text-grid-blue' : 'text-grid-gray hover:text-grid-blue'
                }`}>
                  Projects
                </a>
              </Link>
              <Link href="/news">
                <a className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/news') ? 'text-grid-blue' : 'text-grid-gray hover:text-grid-blue'
                }`}>
                  News
                </a>
              </Link>
              <Link href="/contact">
                <a className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/contact') ? 'text-grid-blue' : 'text-grid-gray hover:text-grid-blue'
                }`}>
                  Contact
                </a>
              </Link>
              <Link href="/contact">
                <Button className="bg-grid-blue text-white hover:bg-grid-dark-blue">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-grid-gray hover:text-grid-blue"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link href="/">
              <a 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium ${
                  isActive('/') ? 'text-grid-blue' : 'text-grid-gray hover:text-grid-blue'
                }`}
              >
                Home
              </a>
            </Link>
            <Link href="/services">
              <a 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium ${
                  isActive('/services') ? 'text-grid-blue' : 'text-grid-gray hover:text-grid-blue'
                }`}
              >
                Services
              </a>
            </Link>
            <Link href="/about">
              <a 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium ${
                  isActive('/about') ? 'text-grid-blue' : 'text-grid-gray hover:text-grid-blue'
                }`}
              >
                About
              </a>
            </Link>
            <Link href="/team">
              <a 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium ${
                  isActive('/team') ? 'text-grid-blue' : 'text-grid-gray hover:text-grid-blue'
                }`}
              >
                Team
              </a>
            </Link>
            <Link href="/case-studies">
              <a 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium ${
                  isActive('/case-studies') ? 'text-grid-blue' : 'text-grid-gray hover:text-grid-blue'
                }`}
              >
                Projects
              </a>
            </Link>
            <Link href="/news">
              <a 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium ${
                  isActive('/news') ? 'text-grid-blue' : 'text-grid-gray hover:text-grid-blue'
                }`}
              >
                News
              </a>
            </Link>
            <Link href="/contact">
              <a 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium ${
                  isActive('/contact') ? 'text-grid-blue' : 'text-grid-gray hover:text-grid-blue'
                }`}
              >
                Contact
              </a>
            </Link>
            <Link href="/contact">
              <Button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-left bg-grid-blue text-white hover:bg-grid-dark-blue mt-2"
              >
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

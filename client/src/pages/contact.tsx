import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock, MessageSquare, Users, Globe } from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectType: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message,
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        projectType: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const offices = [
    {
      city: "Sydney",
      address: "Level 42, Aurora Place\n88 Phillip Street\nSydney NSW 2000",
      phone: "+61 2 9247 1234",
      email: "sydney@gridflow.com.au",
      isHeadquarters: true
    },
    {
      city: "Melbourne",
      address: "Collins Square Tower 5\n727 Collins Street\nMelbourne VIC 3008",
      phone: "+61 3 9001 5678",
      email: "melbourne@gridflow.com.au"
    },
    {
      city: "Perth",
      address: "Central Park\n152-158 St Georges Terrace\nPerth WA 6000",
      phone: "+61 8 6365 9012",
      email: "perth@gridflow.com.au"
    }
  ];

  const contactOptions = [
    {
      icon: MessageSquare,
      title: "General Inquiries",
      description: "Questions about our services or capabilities",
      contact: "info@gridflow.com.au",
      action: "Send Email"
    },
    {
      icon: Users,
      title: "New Projects",
      description: "Discuss your upcoming power engineering needs",
      contact: "projects@gridflow.com.au",
      action: "Start Discussion"
    },
    {
      icon: Globe,
      title: "Partnerships",
      description: "Explore collaboration opportunities",
      contact: "partnerships@gridflow.com.au",
      action: "Partner With Us"
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
            Contact Us
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Ready to start your power engineering project? Our team of experts is here to help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-grid-dark-blue mb-4">How Can We Help?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Choose the best way to connect with our team based on your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <Card key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-grid-blue rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-grid-dark-blue mb-3">{option.title}</h3>
                    <p className="text-gray-600 mb-4">{option.description}</p>
                    <p className="text-grid-blue font-semibold mb-4">{option.contact}</p>
                    <Button className="bg-grid-blue hover:bg-grid-dark-blue text-white">
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-20 bg-grid-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white rounded-xl shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-grid-dark-blue mb-6">Get in Touch</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</Label>
                      <Input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="w-full"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</Label>
                      <Input
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="w-full"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full"
                      placeholder="john.doe@company.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="w-full"
                      placeholder="Company Name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">Project Type</Label>
                    <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Project Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="power-systems">Power Systems Engineering</SelectItem>
                        <SelectItem value="renewable-energy">Renewable Energy Integration</SelectItem>
                        <SelectItem value="industrial-automation">Industrial Automation</SelectItem>
                        <SelectItem value="electrical-safety">Electrical Safety & Compliance</SelectItem>
                        <SelectItem value="maintenance">Maintenance & Asset Management</SelectItem>
                        <SelectItem value="consulting">Engineering Consulting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Details</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={4}
                      className="w-full"
                      placeholder="Please describe your project requirements, timeline, and any specific challenges you're facing..."
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-grid-blue hover:bg-grid-dark-blue text-white"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-grid-dark-blue mb-6">Our Offices</h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <Card key={index} className="bg-white rounded-xl shadow-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-12 h-12 bg-grid-blue rounded-lg flex items-center justify-center mr-4">
                            <MapPin className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <h4 className="text-lg font-semibold text-grid-dark-blue">{office.city}</h4>
                              {office.isHeadquarters && (
                                <span className="ml-2 px-2 py-1 bg-grid-blue text-white text-xs rounded-full">
                                  Headquarters
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 text-sm mb-3 whitespace-pre-line">{office.address}</p>
                            <div className="space-y-1">
                              <div className="flex items-center text-sm text-gray-600">
                                <Phone className="h-4 w-4 mr-2" />
                                {office.phone}
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <Mail className="h-4 w-4 mr-2" />
                                {office.email}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <Card className="bg-white rounded-xl shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-grid-blue rounded-lg flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-grid-dark-blue mb-2">Business Hours</h4>
                      <div className="text-gray-600 text-sm space-y-1">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM (Sydney only)</p>
                        <p>Sunday: Closed</p>
                        <p className="mt-3 font-semibold text-grid-dark-blue">
                          24/7 Emergency Support Available
                        </p>
                        <p>Emergency Hotline: 1800 GRIDFLOW</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-grid-dark-blue mb-4">Find Us</h2>
            <p className="text-gray-600 text-lg">
              Visit our offices across Australia or connect with us virtually.
            </p>
          </div>
          
          {/* Placeholder for interactive map */}
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Interactive Map</h3>
              <p className="text-gray-500">
                Our offices in Sydney, Melbourne, and Perth
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
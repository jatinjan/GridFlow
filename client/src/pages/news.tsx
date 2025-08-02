import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight, Bookmark } from "lucide-react";

const News = () => {
  const featuredArticle = {
    id: 1,
    title: "Australia's Renewable Energy Transition: Challenges and Opportunities for Grid Integration",
    excerpt: "As Australia accelerates its renewable energy adoption, the integration of variable generation sources presents both technical challenges and unprecedented opportunities for innovation in grid management and storage technologies.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    category: "Industry Insights",
    author: "Dr. Sarah Mitchell",
    date: "January 15, 2025",
    readTime: "8 min read",
    featured: true
  };

  const articles = [
    {
      id: 2,
      title: "Grid Flow Completes Major Solar Integration Project in Queensland",
      excerpt: "Our team successfully connected a 200MW solar farm to the Queensland grid, implementing advanced voltage regulation and power quality management systems.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      category: "Company News",
      author: "Grid Flow Team",
      date: "January 10, 2025",
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "The Future of Industrial Automation: Trends Shaping Manufacturing",
      excerpt: "Exploring how Industry 4.0 technologies, AI-driven predictive maintenance, and advanced control systems are revolutionizing manufacturing efficiency and sustainability.",
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      category: "Technology",
      author: "Mark Thompson",
      date: "January 8, 2025",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "New AS/NZS Standards: What Power Engineers Need to Know",
      excerpt: "Overview of recent updates to Australian and New Zealand electrical standards and their implications for power system design and safety compliance.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      category: "Compliance",
      author: "Rachel Foster",
      date: "January 5, 2025",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Energy Storage Systems: Enabling the Clean Energy Transition",
      excerpt: "How battery energy storage systems are transforming grid stability, enabling renewable integration, and creating new opportunities for industrial energy management.",
      image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      category: "Innovation",
      author: "James Rodriguez",
      date: "January 3, 2025",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "Grid Flow Expands Team with Senior Automation Specialists",
      excerpt: "We're excited to welcome three new senior engineers to our automation team, strengthening our capabilities in industrial control systems and SCADA implementation.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      category: "Company News",
      author: "Grid Flow Team",
      date: "December 28, 2024",
      readTime: "3 min read"
    },
    {
      id: 7,
      title: "Electrical Safety in Mining Operations: Best Practices and Innovations",
      excerpt: "Comprehensive guide to implementing robust electrical safety protocols in mining environments, including arc flash protection and hazardous area considerations.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      category: "Safety",
      author: "Rachel Foster",
      date: "December 22, 2024",
      readTime: "10 min read"
    }
  ];

  const categories = ["All", "Industry Insights", "Company News", "Technology", "Innovation", "Safety", "Compliance"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-grid-dark-blue to-grid-blue">
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            News & Insights
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest developments in power engineering, industry trends, and Grid Flow company updates.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-grid-dark-blue mb-8">Featured Article</h2>
            <Card className="shadow-xl rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title} 
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-grid-blue text-white">{featuredArticle.category}</Badge>
                  </div>
                </div>
                
                <CardContent className="p-8 lg:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-grid-dark-blue mb-4">
                    {featuredArticle.title}
                  </h3>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-6 space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredArticle.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredArticle.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredArticle.readTime}
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="flex space-x-4">
                    <Button className="bg-grid-blue hover:bg-grid-dark-blue text-white">
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="border-grid-blue text-grid-blue hover:bg-grid-blue hover:text-white">
                      <Bookmark className="mr-2 h-4 w-4" /> Save for Later
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Article Categories */}
      <section className="py-8 bg-grid-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button 
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-grid-blue hover:bg-grid-dark-blue text-white" : "border-grid-blue text-grid-blue hover:bg-grid-blue hover:text-white"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge 
                      className={
                        article.category === "Company News" ? "bg-green-500 text-white" :
                        article.category === "Technology" ? "bg-purple-500 text-white" :
                        article.category === "Innovation" ? "bg-orange-500 text-white" :
                        article.category === "Safety" ? "bg-red-500 text-white" :
                        article.category === "Compliance" ? "bg-blue-500 text-white" :
                        "bg-grid-blue text-white"
                      }
                    >
                      {article.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-grid-dark-blue mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <div className="flex items-center text-xs text-gray-600 mb-3 space-x-3">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <Button variant="link" className="text-grid-blue hover:text-grid-dark-blue font-semibold p-0">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-grid-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-grid-dark-blue mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Subscribe to our newsletter for the latest industry insights, company updates, and power engineering innovations.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-grid-blue focus:border-transparent"
            />
            <Button className="bg-grid-blue hover:bg-grid-dark-blue text-white px-8 py-3">
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-grid-dark-blue mb-6">
            Have a Story to Share?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            We'd love to hear about your power engineering challenges, innovations, or industry insights. Get in touch with our editorial team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-grid-blue hover:bg-grid-dark-blue text-white px-8 py-3 text-lg">
              Submit Your Story
            </Button>
            <Button variant="outline" className="border-2 border-grid-blue text-grid-blue hover:bg-grid-blue hover:text-white px-8 py-3 text-lg">
              Media Inquiries
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
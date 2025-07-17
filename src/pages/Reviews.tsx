import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star, Heart, Filter } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Lady Pemberton",
      location: "Mumbai",
      pet: "Duchess Catherine (Persian Cat)",
      rating: 5,
      text: "Duchess Catherine has never been more radiant. Her coat gleams like silk, and she actually purrs during meal time now. This is luxury pet dining at its finest.",
      image: "https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Chef Antoine",
      location: "Bangalore",
      pet: "Prince Maximus (Persian Prince)",
      rating: 5,
      text: "A culinary revelation for my Persian prince. The ingredients are restaurant-quality, and the nutritional balance is impeccable. Maximus has never been healthier.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Miranda Shah",
      location: "Delhi",
      pet: "Bella & Oscar (Golden Retrievers)",
      rating: 5,
      text: "Simply the Hermès of pet cuisine. My Golden Retrievers literally dance at meal time now. The quality is unmatched, and the packaging feels like opening a luxury gift.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b3e8?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Dr. Rajesh Kumar",
      location: "Chennai",
      pet: "Bruno (Labrador)",
      rating: 5,
      text: "As a veterinarian, I'm incredibly selective about pet nutrition. Petique exceeds every standard. Bruno's energy levels and coat health have dramatically improved.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const stats = [
    { label: "Overall Rating", value: "4.9/5", icon: Star },
    { label: "Happy Pets", value: "50,000+", icon: Heart },
    { label: "5-Star Reviews", value: "94%", icon: Star },
    { label: "Repeat Customers", value: "96%", icon: Heart }
  ];

  return (
    <div className="min-h-screen cursor-paw">
      <Navigation />
      
      {/* Reviews Hero */}
      <section className="pt-32 pb-16 bg-gradient-royal relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-liquid-gold/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-pearl-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-champagne/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          {/* Floating stars */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-liquid-gold rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <Badge className="bg-gradient-gold text-midnight-purple font-display font-semibold mb-6 px-6 py-2 text-lg shadow-golden">
            Tales of Joy
          </Badge>
          <h1 className="font-display text-6xl md:text-7xl font-bold text-pearl-white mb-6 tracking-tight">
            Tales from Happy Tails
          </h1>
          <p className="font-body text-xl text-pearl-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Real Stories from Real Pet Parents (and Their Furry Critics)
          </p>
        </div>
      </section>

      {/* Rating Stats */}
      <section className="py-16 bg-gradient-ethereal">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="card-luxury text-center p-8">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-golden">
                  <stat.icon className="h-8 w-8 text-midnight-purple" />
                </div>
                <div className="font-display text-3xl font-bold text-gradient-royal mb-2">
                  {stat.value}
                </div>
                <div className="font-body text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Options */}
      <section className="py-12 bg-gradient-ethereal border-b border-white/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="royal" className="rounded-full">
              <Filter className="h-4 w-4 mr-2" />
              All Reviews
            </Button>
            <Button variant="ethereal" className="rounded-full">
              Cat Parents
            </Button>
            <Button variant="ethereal" className="rounded-full">
              Dog Parents
            </Button>
            <Button variant="ethereal" className="rounded-full">
              5 Stars Only
            </Button>
            <Button variant="ethereal" className="rounded-full">
              Recent Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 bg-gradient-ethereal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-gradient-royal mb-6">
              The Royal Court Speaks
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium testimonials from our most distinguished pet parents
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {reviews.map((review) => (
              <Card key={review.id} className="card-luxury p-8 hover:shadow-golden transform hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-start space-x-4 mb-6">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover shadow-ethereal"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {review.name}
                      </h3>
                      <div className="flex items-center space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-liquid-gold text-liquid-gold" />
                        ))}
                      </div>
                    </div>
                    <p className="font-body text-sm text-muted-foreground">
                      {review.location} • {review.pet}
                    </p>
                  </div>
                </div>
                
                <blockquote className="font-body text-foreground/90 leading-relaxed italic">
                  "{review.text}"
                </blockquote>
                
                <div className="mt-6 flex items-center justify-between">
                  <Badge variant="outline" className="bg-gradient-ethereal border-primary/20">
                    Verified Pet Parent
                  </Badge>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
                    <Heart className="h-4 w-4 mr-1" />
                    Helpful
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-16 bg-gradient-luxury">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-midnight-purple mb-6">
            Share Your Pet's Love Story
          </h2>
          <p className="font-body text-lg text-midnight-purple/80 max-w-2xl mx-auto mb-8">
            Join thousands of happy pet parents and tell us how Petique has transformed your furry friend's life
          </p>
          <Button variant="royal" size="xl" className="animate-glow">
            Write a Review
          </Button>
          <p className="font-body text-sm text-midnight-purple/60 mt-4">
            Get featured in our Hall of Fame + exclusive discount
          </p>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
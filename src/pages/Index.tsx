import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star, Heart, ShoppingBag, ChevronDown, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-pets.jpg";
import luxuryProducts from "@/assets/luxury-products.jpg";
import floatingIngredients from "@/assets/floating-ingredients.jpg";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featuredProducts = [
    {
      id: 1,
      name: "Le Saumon Royale",
      price: "$34.99",
      rating: 4.9,
      image: luxuryProducts,
      badge: "Most Loved"
    },
    {
      id: 2,
      name: "Médaillons de Poulet Doré", 
      price: "$32.99",
      rating: 4.8,
      image: luxuryProducts,
      badge: "New Arrival"
    },
    {
      id: 3,
      name: "Thon Précieux",
      price: "$36.99", 
      rating: 4.9,
      image: luxuryProducts,
      badge: "Limited Edition"
    }
  ];

  const ingredients = [
    "Premium Wild Salmon",
    "Free-Range Chicken",
    "Organic Vegetables", 
    "Superfood Herbs"
  ];

  return (
    <div className="min-h-screen cursor-paw overflow-x-hidden">
      <Navigation />
      
      {/* Cinematic Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <img 
            src={heroImage} 
            alt="Royal pets"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight-purple/60 via-transparent to-deep-amethyst/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-purple/80 via-transparent to-transparent"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-liquid-gold/20 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-pearl-white/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-1/3 w-12 h-12 bg-champagne/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-60 right-1/3 w-24 h-24 bg-rose-gold/15 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
          
          {/* Floating Paw Prints */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 opacity-30 animate-float"
              style={{
                left: `${20 + (i * 10)}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <div className="w-full h-full bg-liquid-gold rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <Badge className="bg-gradient-gold text-midnight-purple font-display font-semibold mb-8 px-8 py-3 text-lg shadow-golden animate-glow">
            ✨ Royal Pet Cuisine ✨
          </Badge>
          
          <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-bold text-pearl-white mb-8 tracking-tight leading-tight">
            <span className="block text-gradient-gold animate-shimmer bg-gradient-to-r from-liquid-gold via-champagne to-liquid-gold bg-[length:200%_100%]">
              Nourishment
            </span>
            <span className="block mt-2">
              Elevated to Art
            </span>
          </h1>
          
          <p className="font-body text-2xl text-pearl-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Where every meal becomes a moment of pure indulgence for your beloved companion
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="luxury" 
              size="xl" 
              className="group px-12 py-6 text-xl animate-glow"
              asChild
            >
              <Link to="/shop">
                <Sparkles className="h-6 w-6 mr-3 group-hover:animate-spin" />
                Enter the Experience
                <ChevronDown className="h-6 w-6 ml-3 group-hover:translate-y-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              variant="ethereal" 
              size="xl" 
              className="px-12 py-6 text-xl"
              asChild
            >
              <Link to="/about">
                Our Royal Story
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-pearl-white/70">
            <span className="font-body text-sm mb-2">Discover More</span>
            <ChevronDown className="h-6 w-6 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Sensory Journey Section */}
      <section className="py-24 bg-gradient-ethereal relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={floatingIngredients} alt="Floating ingredients" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-royal text-pearl-white font-display font-semibold mb-6 px-6 py-2 text-lg shadow-royal">
              🎵 Culinary Symphony 🎵
            </Badge>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-gradient-royal mb-8 tracking-tight">
              A Symphony of Flavors
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Each ingredient carefully orchestrated to create the perfect harmony of taste and nutrition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ingredients.map((ingredient, index) => (
              <Card key={index} className="card-luxury text-center p-8 group hover:shadow-golden">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-golden group-hover:animate-pulse">
                  <Sparkles className="h-10 w-10 text-midnight-purple" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  {ingredient}
                </h3>
                <div className="w-16 h-1 bg-gradient-gold rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Collection Showcase */}
      <section className="py-24 bg-gradient-luxury relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-royal text-pearl-white font-display font-semibold mb-6 px-6 py-2 text-lg shadow-royal">
              👑 The Petique Atelier 👑
            </Badge>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-midnight-purple mb-8 tracking-tight">
              Museum-Quality Collection
            </h2>
            <p className="font-body text-xl text-midnight-purple/80 max-w-3xl mx-auto leading-relaxed">
              Each product is a masterpiece, displayed with the reverence it deserves
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {featuredProducts.map((product, index) => (
              <Card key={product.id} className="card-product group bg-pearl-white/90 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-gradient-gold text-midnight-purple font-semibold shadow-golden">
                    {product.badge}
                  </Badge>
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating elements on hover */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <Button variant="ethereal" className="shadow-floating">
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Quick Add
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-liquid-gold text-liquid-gold" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">({product.rating})</span>
                    </div>
                    <Heart className="h-5 w-5 text-muted-foreground hover:text-accent hover:fill-accent transition-colors cursor-pointer" />
                  </div>
                  
                  <h3 className="font-display text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-bold text-gradient-gold">
                      {product.price}
                    </span>
                    <Button variant="golden" className="rounded-full px-6">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="royal" size="xl" className="px-12 animate-glow" asChild>
              <Link to="/shop">
                <ShoppingBag className="h-6 w-6 mr-3" />
                Explore Full Collection
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust & Love Section */}
      <section className="py-24 bg-gradient-ethereal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-gradient-royal mb-8 tracking-tight">
              Loved by 50,000+ Happy Tails
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Join the royal family of pet parents who trust Petique for their furry companions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="card-luxury text-center p-8">
              <div className="text-4xl font-display font-bold text-gradient-gold mb-2">4.9/5</div>
              <div className="font-body text-muted-foreground">Overall Rating</div>
            </Card>
            <Card className="card-luxury text-center p-8">
              <div className="text-4xl font-display font-bold text-gradient-royal mb-2">96%</div>
              <div className="font-body text-muted-foreground">Repeat Customers</div>
            </Card>
            <Card className="card-luxury text-center p-8">
              <div className="text-4xl font-display font-bold text-gradient-gold mb-2">24/7</div>
              <div className="font-body text-muted-foreground">Pet Support</div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="ethereal" size="xl" asChild>
              <Link to="/reviews">
                <Star className="h-5 w-5 mr-2 fill-liquid-gold text-liquid-gold" />
                Read Love Stories
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

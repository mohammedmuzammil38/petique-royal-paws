import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star, Filter, Grid, List } from "lucide-react";
import luxuryProducts from "@/assets/luxury-products.jpg";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Le Saumon Royale",
      price: "$34.99",
      category: "feline",
      rating: 4.9,
      image: luxuryProducts,
      description: "Premium wild-caught salmon for discerning felines",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Médaillons de Poulet Doré",
      price: "$32.99",
      category: "canine",
      rating: 4.8,
      image: luxuryProducts,
      description: "Golden chicken medallions for noble canines",
      badge: "New"
    },
    {
      id: 3,
      name: "Thon Précieux",
      price: "$36.99",
      category: "feline",
      rating: 4.9,
      image: luxuryProducts,
      description: "Precious tuna delicacy in royal sauce",
      badge: "Limited"
    }
  ];

  return (
    <div className="min-h-screen cursor-paw">
      <Navigation />
      
      {/* Shop Hero */}
      <section className="pt-32 pb-16 bg-gradient-ethereal relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-20 h-20 bg-liquid-gold/20 rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-deep-amethyst/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-rose-gold/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <Badge className="bg-gradient-gold text-midnight-purple font-display font-semibold mb-6 px-6 py-2 text-lg shadow-golden">
            The Royal Pet Pantry
          </Badge>
          <h1 className="font-display text-6xl md:text-7xl font-bold text-gradient-royal mb-6 tracking-tight">
            Curated Collections
          </h1>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            For Discerning Palates & Noble Hearts
          </p>
        </div>
      </section>

      {/* Filters & Categories */}
      <section className="py-12 bg-gradient-ethereal">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button variant="royal" className="rounded-full">
              <Filter className="h-4 w-4 mr-2" />
              For Feline Royalty
            </Button>
            <Button variant="golden" className="rounded-full">
              For Canine Nobility
            </Button>
            <Button variant="ethereal" className="rounded-full">
              Seasonal Delicacies
            </Button>
            <Button variant="ethereal" className="rounded-full">
              Treat Treasury
            </Button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-gradient-ethereal">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-display text-3xl font-bold text-gradient-royal">
              Premium Collection
            </h2>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Grid className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="card-product group">
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-gradient-gold text-midnight-purple font-semibold">
                    {product.badge}
                  </Badge>
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-liquid-gold text-liquid-gold" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">({product.rating})</span>
                    </div>
                    <span className="font-display text-2xl font-bold text-gradient-gold">
                      {product.price}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-muted-foreground font-body">
                    {product.description}
                  </p>
                  
                  <Button 
                    variant="luxury" 
                    className="w-full rounded-full font-display font-bold tracking-wider"
                  >
                    Add to Collection
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
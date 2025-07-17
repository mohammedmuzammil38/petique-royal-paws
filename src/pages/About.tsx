import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Heart, Award, Shield, Globe } from "lucide-react";
import petSilhouettes from "@/assets/pet-silhouettes.jpg";

const About = () => {
  return (
    <div className="min-h-screen cursor-paw">
      <Navigation />
      
      {/* About Hero */}
      <section className="pt-32 pb-16 bg-gradient-royal relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={petSilhouettes} alt="Pet silhouettes" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <Badge className="bg-gradient-gold text-midnight-purple font-display font-semibold mb-6 px-6 py-2 text-lg shadow-golden">
            Our Royal Heritage
          </Badge>
          <h1 className="font-display text-6xl md:text-7xl font-bold text-pearl-white mb-6 tracking-tight">
            Born from Belly Rubs
          </h1>
          <p className="font-body text-xl text-pearl-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Perfected by Science. Inspired by Tails That Never Stop Wagging.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-ethereal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-gradient-royal text-center mb-12">
              Our Story
            </h2>
            
            <Card className="card-luxury p-12">
              <div className="prose prose-lg max-w-none">
                <p className="font-body text-lg leading-relaxed text-foreground/90 mb-6">
                  Welcome to Petique, where pet food isn't just food — it's instinctive nourishment, served with love and a little bit of drool.
                </p>
                
                <p className="font-body text-lg leading-relaxed text-foreground/90 mb-6">
                  We began in Karnataka, India, not in a lab or a boardroom — but on a living room floor, surrounded by shedding fur, squeaky toys, and one very picky Labrador named Tofu. We were pet parents first, scientists second, and obsessed third (still are).
                </p>
                
                <p className="font-body text-lg leading-relaxed text-foreground/90 mb-6">
                  Fueled by late-night vet consultations and way too many treats, we decided: why settle for ordinary kibble when our pets deserve Michelin-star meals? So, we partnered with top veterinarians, animal nutritionists, and yes, the occasional stubborn cat, to build food that speaks fluent 'woof' and 'meow'.
                </p>
                
                <p className="font-body text-lg leading-relaxed text-foreground/90">
                  From our humble start to our growing family of pet lovers across India, one thing hasn't changed: We don't just feed pets. We feed joy.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 bg-gradient-luxury">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-midnight-purple mb-6">
              The Petique Promise
            </h2>
            <p className="font-body text-xl text-midnight-purple/80 max-w-2xl mx-auto">
              Uncompromising Nutrition. Unapologetic Love.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-luxury text-center p-8">
              <div className="w-16 h-16 bg-gradient-royal rounded-full flex items-center justify-center mx-auto mb-6 shadow-royal">
                <Shield className="h-8 w-8 text-pearl-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Scientifically Crafted
              </h3>
              <p className="font-body text-muted-foreground">
                Real health backed by veterinary science
              </p>
            </Card>

            <Card className="card-luxury text-center p-8">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-golden">
                <Heart className="h-8 w-8 text-midnight-purple" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Premium Ingredients
              </h3>
              <p className="font-body text-muted-foreground">
                No junk, no fillers, just pure nutrition
              </p>
            </Card>

            <Card className="card-luxury text-center p-8">
              <div className="w-16 h-16 bg-gradient-royal rounded-full flex items-center justify-center mx-auto mb-6 shadow-royal">
                <Award className="h-8 w-8 text-pearl-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Taste-Tested
              </h3>
              <p className="font-body text-muted-foreground">
                Approved by real pets with wagging tails
              </p>
            </Card>

            <Card className="card-luxury text-center p-8">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-golden">
                <Globe className="h-8 w-8 text-midnight-purple" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Love-Powered
              </h3>
              <p className="font-body text-muted-foreground">
                Backed by love, not preservatives
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-ethereal">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="card-luxury p-12">
              <h2 className="font-display text-3xl font-bold text-gradient-royal mb-6">
                Our Mission
              </h2>
              <p className="font-body text-lg text-foreground/90 leading-relaxed">
                To create a world where every pet eats like royalty — without needing a crown. We believe that exceptional nutrition should be accessible to all pets, regardless of their pedigree or postal code.
              </p>
            </Card>

            <Card className="card-luxury p-12">
              <h2 className="font-display text-3xl font-bold text-gradient-royal mb-6">
                Our Vision
              </h2>
              <p className="font-body text-lg text-foreground/90 leading-relaxed">
                To be the world's gold standard in instinctive pet nutrition — and the reason tails wag globally. We envision a future where every meal is a celebration of the bond between pets and their humans.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Paw-Note */}
      <section className="py-16 bg-gradient-royal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-pearl-white mb-6">
            A Final Paw-Note
          </h2>
          <p className="font-body text-lg text-pearl-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Every tail wag, every purr, every happy dance at meal time reminds us why we do what we do. We're not just a pet food company — we're a family of pet lovers, dedicated to making every moment with your furry friends a little more special.
          </p>
          <Button variant="golden" size="xl" className="animate-glow">
            Join the Petique Family
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
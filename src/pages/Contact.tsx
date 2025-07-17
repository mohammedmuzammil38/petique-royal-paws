import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, Clock, MapPin, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "24/7 Pet Parent Helpline",
      value: "+91-PETIQUE-LOVE",
      description: "Because pets don't follow schedules"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      value: "Instant Pet Advice",
      description: "Quick answers for urgent questions"
    },
    {
      icon: Mail,
      title: "Royal Email",
      value: "concierge@petique.com",
      description: "For detailed inquiries"
    },
    {
      icon: MapPin,
      title: "The Royal Kitchen",
      value: "Bangalore, Karnataka",
      description: "Our headquarters & innovation center"
    }
  ];

  const services = [
    {
      title: "Personal Pet Nutritionist",
      description: "One-on-one consultations with certified experts",
      time: "Available Mon-Fri 9AM-7PM IST"
    },
    {
      title: "Custom Meal Plans",
      description: "Tailored nutrition plans for your pet's unique needs",
      time: "48-hour turnaround"
    },
    {
      title: "White Glove Delivery",
      description: "Premium delivery service to your doorstep",
      time: "Same-day delivery in select cities"
    },
    {
      title: "Pet Birthday Celebrations",
      description: "Special occasion meals and treats",
      time: "Order 3 days in advance"
    }
  ];

  return (
    <div className="min-h-screen cursor-paw">
      <Navigation />
      
      {/* Contact Hero */}
      <section className="pt-32 pb-16 bg-gradient-royal relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-24 h-24 bg-liquid-gold/20 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-pearl-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-champagne/15 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <Badge className="bg-gradient-gold text-midnight-purple font-display font-semibold mb-6 px-6 py-2 text-lg shadow-golden">
            Royal Concierge Service
          </Badge>
          <h1 className="font-display text-6xl md:text-7xl font-bold text-pearl-white mb-6 tracking-tight">
            Your Personal Pet Concierge Awaits
          </h1>
          <p className="font-body text-xl text-pearl-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Because Every Royal Pet Deserves Royal Service
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gradient-ethereal">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="card-luxury text-center p-8 hover:shadow-golden">
                <div className="w-16 h-16 bg-gradient-royal rounded-full flex items-center justify-center mx-auto mb-6 shadow-royal">
                  <method.icon className="h-8 w-8 text-pearl-white" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="font-body text-accent font-semibold mb-2">
                  {method.value}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {method.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-luxury">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-bold text-midnight-purple mb-6">
                Royal Correspondence
              </h2>
              <p className="font-body text-lg text-midnight-purple/80 max-w-2xl mx-auto">
                Write to us like the royalty your pet is. Every message receives our personal attention.
              </p>
            </div>

            <Card className="card-luxury p-12">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-body font-medium text-foreground">Your Name</label>
                    <Input 
                      placeholder="Your Royal Name" 
                      className="bg-secondary/30 border-primary/20 focus:border-primary/40 h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-body font-medium text-foreground">Pet's Name & Type</label>
                    <Input 
                      placeholder="e.g., Princess Whiskers (Persian Cat)" 
                      className="bg-secondary/30 border-primary/20 focus:border-primary/40 h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-body font-medium text-foreground">Email Address</label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="bg-secondary/30 border-primary/20 focus:border-primary/40 h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-body font-medium text-foreground">Preferred Contact Method</label>
                    <Select>
                      <SelectTrigger className="bg-secondary/30 border-primary/20 focus:border-primary/40 h-12">
                        <SelectValue placeholder="Choose your preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone Call</SelectItem>
                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-body font-medium text-foreground">Urgency Level</label>
                  <Select>
                    <SelectTrigger className="bg-secondary/30 border-primary/20 focus:border-primary/40 h-12">
                      <SelectValue placeholder="How urgent is your request?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="casual">Casual Chat</SelectItem>
                      <SelectItem value="advice">Need Advice</SelectItem>
                      <SelectItem value="urgent">Pet Emergency</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="font-body font-medium text-foreground">Your Royal Request</label>
                  <Textarea 
                    placeholder="Tell us how we can serve you and your royal pet..."
                    className="bg-secondary/30 border-primary/20 focus:border-primary/40 min-h-32 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="royal" 
                  size="xl" 
                  className="w-full font-display font-bold tracking-wider"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Royal Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-20 bg-gradient-ethereal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-gradient-royal mb-6">
              Special Services
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium services for our most distinguished pet parents
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="card-luxury p-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-sm text-accent">
                  <Clock className="h-4 w-4 mr-2" />
                  {service.time}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Royal Hours */}
      <section className="py-16 bg-gradient-royal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-pearl-white mb-8">
            Royal Hours
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-display text-lg font-semibold text-liquid-gold mb-2">
                Customer Service
              </h3>
              <p className="font-body text-pearl-white/90">
                24/7 (because pets don't follow schedules)
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-liquid-gold mb-2">
                Veterinary Consultations
              </h3>
              <p className="font-body text-pearl-white/90">
                Mon-Fri 9AM-7PM IST
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-liquid-gold mb-2">
                Social Media
              </h3>
              <p className="font-body text-pearl-white/90">
                Always active (we never sleep when pets need us)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
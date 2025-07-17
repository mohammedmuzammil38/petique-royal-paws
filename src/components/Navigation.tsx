import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navigation = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About Us", path: "/about" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-royal backdrop-blur-xl border-b border-white/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="cursor-paw">
            <h1 className="font-display text-3xl font-bold text-gradient-gold tracking-wider hover:scale-105 transition-transform duration-300">
              Petique
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-body font-medium tracking-wide transition-all duration-300 hover:text-accent relative group ${
                  location.pathname === item.path 
                    ? "text-accent" 
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              {!isSearchOpen ? (
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                  className="hover:bg-white/10 cursor-paw"
                >
                  <Search className="h-5 w-5" />
                </Button>
              ) : (
                <div className="flex items-center space-x-2 animate-in slide-in-from-right-4 duration-300">
                  <Input
                    placeholder="Search for royal treats..."
                    className="w-64 bg-white/20 border-white/30 placeholder:text-white/60 text-foreground backdrop-blur-sm"
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
                  />
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setIsSearchOpen(false)}
                    className="hover:bg-white/10"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>

            {/* Shopping Cart */}
            <Button 
              variant="ghost" 
              size="icon"
              className="relative hover:bg-white/10 cursor-paw animate-paw-bounce"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-gradient-gold text-xs rounded-full h-5 w-5 flex items-center justify-center text-midnight-purple font-bold shadow-golden">
                3
              </span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/20 animate-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-body font-medium tracking-wide transition-colors duration-300 ${
                    location.pathname === item.path 
                      ? "text-accent" 
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
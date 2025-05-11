
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-sm backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="font-syne font-bold text-xl leading-tight md:text-2xl"
        >
          <div className="flex flex-col">
            <span>Stipendium</span>
            <span>Hungaricum</span>
            <span className="text-accent-orange">Simplified</span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/usat"
            className={`text-sm font-medium hover:text-deep-teal transition-colors ${
              location.pathname.includes('/usat') ? 'text-deep-teal' : ''
            }`}
          >
            USAT Guide
          </Link>
          <Button 
            variant="ghost" 
            size="icon"
            className="relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-deep-teal"></span>
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="flex md:hidden items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative h-8 w-8"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-deep-teal"></span>
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="h-8 w-8"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
};

export default Header;


import { useState } from 'react';
import { Bell, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Navigation from './Navigation';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-sm">
      {/* Mobile Top Banner */}
      <div className="md:hidden bg-accent-orange text-white p-2">
        <div className="container flex justify-between items-center text-xs">
          <span>🎓 Fully Funded</span>
          <span>🇭🇺 Study in Hungary</span>
          <span>🇵🇰 For Pakistani Students</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="font-syne font-bold text-2xl md:text-3xl leading-tight">
            <span className="block">Stipendium</span>
            <span className="block">Hungaricum</span>
            <span className="block text-accent-orange">Simplified</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Button variant="ghost" className="hover:text-accent-orange">USAT Guide</Button>
          <Button variant="ghost" className="hover:text-accent-orange">Join Group</Button>
          <Button variant="outline" className="hover:text-accent-orange">
            <Bell size={20} />
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <Navigation />
            </SheetContent>
          </Sheet>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <Bell size={16} />
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Menu size={16} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%]">
              <Navigation />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

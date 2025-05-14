
import React from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLocation } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  
  if (!isOpen) return null;

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "USAT Guide", path: "/usat" },
    { name: "University Finder", path: "/university-finder" },
    { name: "Apply for Scholarships", path: "/apply/tempus" },
    { name: "Seniors Section", path: "/seniors" },
    { name: "Visa Process", path: "/visa" },
    { name: "Document & Medical Guide", path: "/documents" },
    { name: "First Month in Hungary", path: "/first-month" },
    { name: "Alternative Scholarships", path: "/alternative-scholarships" },
  ];

  return (
    <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-8">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        <nav className="flex flex-col space-y-6">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`py-2 text-xl font-syne font-medium border-b border-gray-200 hover:text-deep-teal transition-colors ${
                location.pathname === item.path || location.pathname.startsWith(item.path + '/') ? 'text-deep-teal' : ''
              }`}
              onClick={onClose}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;


import React, { useState, createContext, useContext } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from 'lucide-react';

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

interface ExpandableSectionContextType {
  openSectionId: string | null;
  setOpenSectionId: (id: string | null) => void;
}

// Create a context to manage which section is currently open
export const ExpandableSectionContext = createContext<ExpandableSectionContextType>({
  openSectionId: null,
  setOpenSectionId: () => {}
});

export const ExpandableSectionProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [openSectionId, setOpenSectionId] = useState<string | null>(null);
  
  return (
    <ExpandableSectionContext.Provider value={{ openSectionId, setOpenSectionId }}>
      {children}
    </ExpandableSectionContext.Provider>
  );
};

let sectionCounter = 0;

const ExpandableSection: React.FC<ExpandableSectionProps> = ({ 
  title, 
  children, 
  defaultOpen = false,
  className = ''
}) => {
  // Generate a unique ID for this section
  const [sectionId] = useState(() => `section-${sectionCounter++}`);
  const { openSectionId, setOpenSectionId } = useContext(ExpandableSectionContext);
  
  // Check if this section should be open
  const isOpen = openSectionId === sectionId;
  
  const handleToggle = (open: boolean) => {
    if (open) {
      setOpenSectionId(sectionId);
    } else if (openSectionId === sectionId) {
      setOpenSectionId(null);
    }
  };

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={handleToggle}
      className={`border border-gray-200 rounded-lg overflow-hidden mb-4 ${className}`}
    >
      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left font-syne font-medium hover:bg-gray-50 transition-colors">
        {title}
        <ChevronDown 
          className={`h-5 w-5 text-accent-orange transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="p-4 pt-0 bg-white/50">
        <div className="pt-2">
          {children}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default ExpandableSection;

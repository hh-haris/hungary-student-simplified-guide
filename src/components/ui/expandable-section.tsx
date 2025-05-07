
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from 'lucide-react';

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const ExpandableSection: React.FC<ExpandableSectionProps> = ({ 
  title, 
  children, 
  defaultOpen = false 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="border border-gray-200 rounded-lg overflow-hidden"
    >
      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left font-syne font-medium">
        {title}
        <ChevronDown 
          className={`h-5 w-5 transition-transform duration-200 ${
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


import React, { useState, useEffect } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from 'lucide-react';

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
  groupId?: string;
}

// Global state to track open sections by group
const openSectionsMap = new Map<string, string>();

const ExpandableSection: React.FC<ExpandableSectionProps> = ({ 
  title, 
  children, 
  defaultOpen = false,
  className = '',
  groupId = 'default'
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const sectionId = React.useId();

  useEffect(() => {
    // On mount, register this section if it's open by default
    if (defaultOpen) {
      openSectionsMap.set(groupId, sectionId);
    }
    
    // Clean up when component unmounts
    return () => {
      if (openSectionsMap.get(groupId) === sectionId) {
        openSectionsMap.delete(groupId);
      }
    };
  }, []);

  const handleOpenChange = (open: boolean) => {
    if (open) {
      // Close other sections in the same group
      const currentlyOpenId = openSectionsMap.get(groupId);
      if (currentlyOpenId && currentlyOpenId !== sectionId) {
        // Notify other sections to close
        const event = new CustomEvent('section-opened', { 
          detail: { groupId, newOpenId: sectionId } 
        });
        document.dispatchEvent(event);
      }
      
      // Set this one as open in the map
      openSectionsMap.set(groupId, sectionId);
    } else {
      // Remove from map if it's closed and was the open one
      if (openSectionsMap.get(groupId) === sectionId) {
        openSectionsMap.delete(groupId);
      }
    }
    
    setIsOpen(open);
  };

  // Listen for events from other sections in the same group
  useEffect(() => {
    const handleSectionOpened = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail.groupId === groupId && detail.newOpenId !== sectionId) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('section-opened', handleSectionOpened);
    return () => {
      document.removeEventListener('section-opened', handleSectionOpened);
    };
  }, [groupId, sectionId]);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={handleOpenChange}
      className={`border border-gray-200 rounded-lg overflow-hidden ${className}`}
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

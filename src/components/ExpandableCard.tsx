
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface ExpandableCardProps {
  title: string;
  children: React.ReactNode;
  initialExpanded?: boolean;
  className?: string;
}

// Use the same context pattern from ExpandableSection
import { ExpandableSectionContext } from '@/components/ui/expandable-section';

let cardCounter = 1000; // Start with different ID range than sections

const ExpandableCard: React.FC<ExpandableCardProps> = ({
  title,
  children,
  initialExpanded = false,
  className = '',
}) => {
  // Generate a unique ID for this card
  const [cardId] = useState(() => `card-${cardCounter++}`);
  const { openSectionId, setOpenSectionId } = React.useContext(ExpandableSectionContext);
  
  // Check if this card should be open
  const isExpanded = openSectionId === cardId;
  
  // Effect to handle initial expanded state
  useEffect(() => {
    // Only set as open if initialExpanded is true and no other section is open
    if (initialExpanded && !openSectionId) {
      setOpenSectionId(cardId);
    }
  }, [initialExpanded, openSectionId, cardId, setOpenSectionId]); // Added all dependencies

  const toggleExpand = () => {
    if (isExpanded) {
      setOpenSectionId(null);
    } else {
      setOpenSectionId(cardId);
    }
  };

  return (
    <div className={`border border-gray-200 rounded-lg overflow-hidden mb-4 ${className}`}>
      <button
        onClick={toggleExpand}
        className="flex items-center justify-between w-full p-4 text-left font-syne font-medium hover:bg-gray-50 transition-colors"
      >
        <span>{title}</span>
        <ChevronDown 
          className={`h-5 w-5 text-accent-orange transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`} 
        />
      </button>
      
      {isExpanded && (
        <div className="p-4 pt-0 bg-white/50">
          <div className="pt-2">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpandableCard;

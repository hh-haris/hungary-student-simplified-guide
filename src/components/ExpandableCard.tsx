
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface ExpandableCardProps {
  title: string;
  children: React.ReactNode;
  initialExpanded?: boolean;
  className?: string;
  groupId?: string;
}

// Global state to track open cards by group
const openCardsMap = new Map<string, string>();

const ExpandableCard: React.FC<ExpandableCardProps> = ({
  title,
  children,
  initialExpanded = false,
  className = '',
  groupId = 'default',
}) => {
  const [isExpanded, setIsExpanded] = useState(initialExpanded);
  const cardId = React.useId();

  useEffect(() => {
    // On mount, register this card if it's open by default
    if (initialExpanded) {
      openCardsMap.set(groupId, cardId);
    }
    
    // Clean up when component unmounts
    return () => {
      if (openCardsMap.get(groupId) === cardId) {
        openCardsMap.delete(groupId);
      }
    };
  }, []);

  const toggleExpand = () => {
    const newExpandedState = !isExpanded;
    
    if (newExpandedState) {
      // Close other cards in the same group
      const currentlyOpenId = openCardsMap.get(groupId);
      if (currentlyOpenId && currentlyOpenId !== cardId) {
        // Notify other cards to close
        const event = new CustomEvent('card-expanded', { 
          detail: { groupId, newOpenId: cardId } 
        });
        document.dispatchEvent(event);
      }
      
      // Set this one as open in the map
      openCardsMap.set(groupId, cardId);
    } else {
      // Remove from map if it's closed and was the open one
      if (openCardsMap.get(groupId) === cardId) {
        openCardsMap.delete(groupId);
      }
    }
    
    setIsExpanded(newExpandedState);
  };

  // Listen for events from other cards in the same group
  useEffect(() => {
    const handleCardExpanded = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail.groupId === groupId && detail.newOpenId !== cardId) {
        setIsExpanded(false);
      }
    };
    
    document.addEventListener('card-expanded', handleCardExpanded);
    return () => {
      document.removeEventListener('card-expanded', handleCardExpanded);
    };
  }, [groupId, cardId]);

  return (
    <div className={`border border-gray-200 rounded-lg overflow-hidden ${className}`}>
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

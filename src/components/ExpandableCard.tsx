
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ExpandableCardProps {
  title: string;
  children: React.ReactNode;
  initialExpanded?: boolean;
  className?: string;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({
  title,
  children,
  initialExpanded = false,
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = useState(initialExpanded);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

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


import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface TimelineStepProps {
  title: string;
  description: string;
  linkTo: string;
  stepNumber?: number;
  date?: string; // Added date prop
}

const TimelineStep = ({ title, description, linkTo, stepNumber, date }: TimelineStepProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="relative">
      {/* Timeline Connector */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-accent-orange/20"></div>
      
      {/* Step Content */}
      <Link 
        to={linkTo}
        className="block pl-12 relative mb-8 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Circle Marker */}
        <div className="absolute left-4 -translate-x-1/2 w-8 h-8 rounded-full bg-accent-orange flex items-center justify-center text-white font-syne font-medium shadow-lg z-10 transition-all duration-300 transform">
          {stepNumber || ""}
        </div>
        
        {/* Content Card */}
        <div className="bg-white backdrop-blur-sm bg-white/70 border border-gray-100 hover:border-accent-orange/20 rounded-lg p-5 transition-all shadow-sm hover:shadow-md">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-syne font-bold text-lg text-deep-teal">{title}</h3>
              <p className="text-gray-600 mt-1">{description}</p>
              {date && (
                <p className="text-accent-orange text-sm mt-1 font-medium">
                  {date}
                </p>
              )}
            </div>
            <ChevronRight 
              className={`text-accent-orange transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TimelineStep;

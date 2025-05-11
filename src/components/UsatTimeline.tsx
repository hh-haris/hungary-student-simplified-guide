
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface UsatTimelineStep {
  id: string;
  title: string;
  date: string;
  details: {
    startDate?: string;
    endDate?: string;
    notes?: string;
  };
}

interface UsatTimelineProps {
  steps: UsatTimelineStep[];
}

const UsatTimeline = ({ steps }: UsatTimelineProps) => {
  const [expandedStep, setExpandedStep] = useState<string | null>(null);

  const toggleStep = (id: string) => {
    if (expandedStep === id) {
      setExpandedStep(null);
    } else {
      setExpandedStep(id);
    }
  };

  return (
    <div className="relative">
      {/* Timeline Connector */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-accent-orange/20"></div>
      
      <div className="space-y-0">
        {steps.map((step) => (
          <div key={step.id} className="relative">
            {/* Circle Marker */}
            <div className="absolute left-4 -translate-x-1/2 w-8 h-8 rounded-full bg-accent-orange flex items-center justify-center text-white font-syne font-medium shadow-lg z-10 transition-all duration-300 transform">
              {/* You can add a number or icon here if needed */}
            </div>
            
            {/* Content Card */}
            <div 
              className="block pl-12 relative mb-8 group cursor-pointer"
              onClick={() => toggleStep(step.id)}
            >
              <div className={`bg-white backdrop-blur-sm border ${expandedStep === step.id ? 'border-accent-orange/40' : 'border-gray-100'} hover:border-accent-orange/20 rounded-lg p-5 transition-all shadow-sm hover:shadow-md`}>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-syne font-bold text-lg text-deep-teal">{step.title}</h3>
                    <p className="text-gray-600 mt-1">{step.date}</p>
                  </div>
                  <ChevronRight 
                    className={`text-accent-orange transition-transform duration-300 ${expandedStep === step.id ? 'rotate-90' : ''}`} 
                  />
                </div>
                
                {expandedStep === step.id && (
                  <div className="mt-4 pt-4 border-t border-border animate-accordion-down">
                    {step.details.startDate && (
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Start Date:</span>
                        <span className="text-sm">{step.details.startDate}</span>
                      </div>
                    )}
                    {step.details.endDate && (
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">End Date:</span>
                        <span className="text-sm">{step.details.endDate}</span>
                      </div>
                    )}
                    {step.details.notes && (
                      <div className="text-sm mt-2 text-muted-foreground">
                        <span className="font-medium">Note:</span> {step.details.notes}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsatTimeline;


import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

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
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={step.id} className="relative pl-10">
            <div 
              className={`absolute left-2 -translate-x-1/2 w-4 h-4 rounded-full ${
                expandedStep === step.id ? 'bg-primary' : 'bg-primary/60'
              } transform transition-all duration-300 ${
                expandedStep === step.id ? 'scale-125' : ''
              }`}
            ></div>
            <Card 
              className={`bg-white rounded-lg transition-all duration-300 border ${
                expandedStep === step.id ? 'border-primary shadow-md' : 'border-border shadow-sm'
              }`}
              onClick={() => toggleStep(step.id)}
            >
              <CardContent className="p-4">
                <div className="flex justify-between items-center cursor-pointer">
                  <div>
                    <h3 className="font-syne font-bold text-lg mb-1">{step.title}</h3>
                    <p className="text-muted-foreground">{step.date}</p>
                  </div>
                  <ChevronDown 
                    className={`h-5 w-5 text-primary transition-transform duration-300 ${
                      expandedStep === step.id ? 'rotate-180' : ''
                    }`}
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
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsatTimeline;

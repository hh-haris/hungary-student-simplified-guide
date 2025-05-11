
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, AlertCircle } from "lucide-react";

interface StepProps {
  title: string;
  description: string;
  deadline: string;
  where: string;
  documents: string[];
  tips: string;
}

interface WhatToDoAfterArrivalProps {
  steps: StepProps[];
}

const WhatToDoAfterArrival = ({ steps }: WhatToDoAfterArrivalProps) => {
  return (
    <div className="space-y-6">
      {steps.map((step, index) => (
        <Card key={index} className="backdrop-blur-sm bg-white/70 border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-deep-teal/10 to-transparent p-4 border-b border-gray-100">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-deep-teal text-white flex items-center justify-center font-medium mr-3">
                  {index + 1}
                </div>
                <h3 className="font-syne font-bold text-lg text-deep-teal">{step.title}</h3>
              </div>
            </div>
            
            <div className="p-6">
              <p className="mb-4 text-gray-700">{step.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm font-medium text-gray-500">Deadline</p>
                  <p className="font-medium">{step.deadline}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm font-medium text-gray-500">Where to Go</p>
                  <p className="font-medium">{step.where}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">Required Documents:</h4>
                <ul className="list-none space-y-1">
                  {step.documents.map((doc, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent-orange mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {step.tips && (
                <div className="flex items-start mt-4 bg-blue-50 p-3 rounded-md">
                  <AlertCircle className="h-5 w-5 text-deep-teal mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-blue-800 text-sm">{step.tips}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default WhatToDoAfterArrival;

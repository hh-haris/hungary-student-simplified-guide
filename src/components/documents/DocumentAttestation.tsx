
import React from "react";
import ExpandableSection from "@/components/ui/expandable-section";
import { AlertCircle } from "lucide-react";

interface AttestationStep {
  title: string;
  description: string;
  fee: string;
  timeRequired: string;
  tips: string;
}

interface DocumentAttestationProps {
  steps: AttestationStep[];
}

const DocumentAttestation = ({ steps }: DocumentAttestationProps) => {
  return (
    <div className="space-y-6">
      {steps.map((step, index) => (
        <ExpandableSection key={index} title={step.title} defaultOpen={index === 0}>
          <p className="text-gray-700 mb-4">{step.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-sm font-medium text-gray-500">Fee</p>
              <p className="font-medium">{step.fee}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-sm font-medium text-gray-500">Time Required</p>
              <p className="font-medium">{step.timeRequired}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-accent-orange mr-2 mt-0.5 flex-shrink-0" />
            <p className="text-gray-600 text-sm">{step.tips}</p>
          </div>
        </ExpandableSection>
      ))}

      <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
        <p className="text-blue-800 text-center">
          <strong>Important:</strong> Start the attestation process at least 2 months before your expected application submission date.
        </p>
      </div>
    </div>
  );
};

export default DocumentAttestation;


import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExpandableCard from '@/components/ExpandableCard';
import { ExpandableSectionProvider } from '@/components/ui/expandable-section';

interface FAQ {
  question: string;
  answer: string;
}

interface DocumentFAQsProps {
  generalFaqs: FAQ[];
  technicalFaqs?: FAQ[];
}

const DocumentFAQs: React.FC<DocumentFAQsProps> = ({ generalFaqs }) => {
  return (
    <ExpandableSectionProvider>
      <div>
        <h2 className="font-syne font-semibold text-xl mb-4">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {generalFaqs.map((faq, index) => (
            <ExpandableCard key={index} title={faq.question}>
              <p className="text-gray-700">{faq.answer}</p>
            </ExpandableCard>
          ))}
        </div>
      </div>
    </ExpandableSectionProvider>
  );
};

export default DocumentFAQs;

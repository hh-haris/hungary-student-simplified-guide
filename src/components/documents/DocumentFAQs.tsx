
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExpandableSection from "@/components/ui/expandable-section";

interface FAQ {
  question: string;
  answer: string;
}

interface DocumentFAQsProps {
  generalFaqs: FAQ[];
  technicalFaqs: FAQ[];
}

const DocumentFAQs: React.FC<DocumentFAQsProps> = ({ generalFaqs, technicalFaqs }) => {
  return (
    <div>
      <h2 className="font-syne font-semibold text-xl mb-4">Frequently Asked Questions</h2>
      
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="technical">Technical</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <div className="space-y-4">
            {generalFaqs.map((faq, index) => (
              <ExpandableSection 
                key={`general-faq-${index}`} 
                title={faq.question}
                className="bg-white shadow-sm"
              >
                <p className="text-gray-700">{faq.answer}</p>
              </ExpandableSection>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="technical">
          <div className="space-y-4">
            {technicalFaqs.map((faq, index) => (
              <ExpandableSection 
                key={`technical-faq-${index}`} 
                title={faq.question}
                className="bg-white shadow-sm"
              >
                <p className="text-gray-700">{faq.answer}</p>
              </ExpandableSection>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DocumentFAQs;

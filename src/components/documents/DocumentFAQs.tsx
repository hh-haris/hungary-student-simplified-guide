
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ExpandableSection from "@/components/ui/expandable-section";

interface FAQ {
  question: string;
  answer: string;
}

interface DocumentFAQsProps {
  generalFaqs: FAQ[];
  technicalFaqs: FAQ[];
}

const DocumentFAQs = ({ generalFaqs, technicalFaqs }: DocumentFAQsProps) => {
  return (
    <>
      <h2 className="font-syne font-semibold text-xl mb-4">Frequently Asked Questions</h2>
      <Tabs defaultValue="general">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="technical">Technical</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4">
          {generalFaqs.map((faq, index) => (
            <ExpandableSection key={index} title={faq.question}>
              <p className="text-gray-700">
                {faq.answer}
              </p>
            </ExpandableSection>
          ))}
        </TabsContent>
        
        <TabsContent value="technical" className="space-y-4">
          {technicalFaqs.map((faq, index) => (
            <ExpandableSection key={index} title={faq.question}>
              <p className="text-gray-700">
                {faq.answer}
              </p>
            </ExpandableSection>
          ))}
        </TabsContent>
      </Tabs>
    </>
  );
};

export default DocumentFAQs;

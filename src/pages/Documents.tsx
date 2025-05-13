import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ExpandableCard from "@/components/ExpandableCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Documents = () => {
  const generalFaqs = [
    {
      question: "What documents are required for the Stipendium Hungaricum application?",
      answer: "You will typically need to provide copies of your academic transcripts, diplomas, language proficiency certificates, a motivation letter, a medical certificate, and a copy of your passport. Specific requirements may vary depending on your chosen program and university."
    },
    {
      question: "How should I prepare my academic documents?",
      answer: "Ensure that all your academic documents are officially translated into English or Hungarian. Notarized copies are often required. Check the specific requirements of your chosen university for any additional guidelines."
    },
    {
      question: "What should I include in my motivation letter?",
      answer: "Your motivation letter should clearly state your reasons for choosing the Stipendium Hungaricum program, your academic and professional goals, and how studying in Hungary will help you achieve them. Highlight your relevant skills and experiences."
    },
    {
      question: "Is there a specific format for the medical certificate?",
      answer: "Yes, the medical certificate must be issued by a licensed physician and should include the results of necessary medical examinations. It should state that you are free from any infectious diseases and are fit to study abroad. The certificate should not be older than 3 months at the time of visa application."
    },
    {
      question: "Do I need to provide proof of English proficiency?",
      answer: "Yes, you usually need to provide proof of English proficiency through standardized tests like IELTS or TOEFL. The minimum required score varies depending on the program and university. Check the specific requirements of your chosen program."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
        <h1 className="font-syne font-bold text-3xl md:text-4xl mb-6 text-deep-teal">Essential Documents Guide</h1>

        <section className="mb-8">
          <h2 className="font-syne font-semibold text-xl mb-4">Application Documents</h2>
          <p className="text-gray-700 mb-4">
            Preparing the necessary documents is a critical step in your Stipendium Hungaricum application. This guide provides detailed information on each document to ensure you meet all requirements.
          </p>

          <Tabs defaultValue="general" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="general" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">General Documents</TabsTrigger>
              {/* <TabsTrigger value="technical" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">Technical Documents</TabsTrigger> */}
            </TabsList>
            <TabsContent value="general">
              <div className="space-y-4">
                <ExpandableCard title="Academic Transcripts and Diplomas">
                  <p className="text-gray-700">
                    Provide certified copies of your academic transcripts and diplomas from all previously attended educational institutions. Ensure these documents are officially translated into English or Hungarian.
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-gray-700">
                    <li>High School Diploma and Transcripts</li>
                    <li>Bachelor's Degree and Transcripts (if applying for a Master's program)</li>
                    <li>Master's Degree and Transcripts (if applying for a PhD program)</li>
                  </ul>
                </ExpandableCard>

                <ExpandableCard title="Motivation Letter">
                  <p className="text-gray-700">
                    Write a compelling motivation letter that highlights your academic and professional goals, your reasons for choosing the Stipendium Hungaricum program, and how studying in Hungary will help you achieve your aspirations.
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-gray-700">
                    <li>Clearly state your purpose and objectives</li>
                    <li>Highlight relevant skills and experiences</li>
                    <li>Demonstrate your knowledge of Hungary and its culture</li>
                  </ul>
                </ExpandableCard>

                <ExpandableCard title="Language Proficiency Certificate">
                  <p className="text-gray-700">
                    Submit a valid English language proficiency certificate (IELTS or TOEFL) that meets the minimum score requirements of your chosen program.
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-gray-700">
                    <li>IELTS: Minimum score of 6.0 (varies by program)</li>
                    <li>TOEFL: Minimum score of 79 (iBT) (varies by program)</li>
                  </ul>
                </ExpandableCard>

                <ExpandableCard title="Medical Certificate">
                  <p className="text-gray-700">
                    Obtain a medical certificate from a licensed physician, confirming that you are in good health and free from any infectious diseases. The certificate should not be older than 3 months at the time of visa application.
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-gray-700">
                    <li>Include results of necessary medical examinations</li>
                    <li>State that you are fit to study abroad</li>
                    <li>Ensure the certificate is stamped and signed by the doctor</li>
                  </ul>
                </ExpandableCard>

                <ExpandableCard title="Copy of Passport">
                  <p className="text-gray-700">
                    Provide a clear copy of your passport's identification page. Ensure that your passport is valid for at least six months beyond your intended stay in Hungary.
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-gray-700">
                    <li>Passport must be valid</li>
                    <li>Ensure your personal details are clearly visible</li>
                  </ul>
                </ExpandableCard>
              </div>
            </TabsContent>
            {/* <TabsContent value="technical">
              <div className="space-y-4">
                <ExpandableCard title="Online Application Form">
                  <p className="text-gray-700">
                    Complete the online application form on the Stipendium Hungaricum website. Ensure all information provided is accurate and matches your supporting documents.
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-gray-700">
                    <li>Fill all required fields correctly</li>
                    <li>Upload all necessary documents in the specified format</li>
                  </ul>
                </ExpandableCard>

                <ExpandableCard title="Letter of Recommendation (if required)">
                  <p className="text-gray-700">
                    If your chosen program requires letters of recommendation, obtain them from professors or employers who can attest to your academic and professional abilities.
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-gray-700">
                    <li>Provide clear guidelines to your recommenders</li>
                    <li>Ensure letters are submitted before the deadline</li>
                  </ul>
                </ExpandableCard>
              </div>
            </TabsContent> */}
          </Tabs>
        </section>

        <section className="mb-8">
          <h2 className="font-syne font-semibold text-xl mb-4">Next Steps</h2>
          <p className="text-gray-700 mb-4">
            Once you have prepared all the necessary documents, the next steps involve submitting your application and preparing for the visa process.
          </p>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <Button asChild className="w-full md:w-auto bg-deep-teal hover:bg-deep-teal/90 text-white">
              <Link to="/apply/tempus">Tempus Application Portal</Link>
            </Button>
            <Button asChild className="w-full md:w-auto bg-accent-orange hover:bg-accent-orange/90 text-white">
              <Link to="/visa">Visa Application Guide</Link>
            </Button>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="font-syne font-semibold text-xl mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {generalFaqs.map((faq, index) => (
              <ExpandableCard key={index} title={faq.question}>
                <p className="text-gray-700">{faq.answer}</p>
              </ExpandableCard>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Documents;

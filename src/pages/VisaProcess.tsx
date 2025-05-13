
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExpandableCard from "@/components/ExpandableCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText, Calendar, MessageCircle, Briefcase, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import { ExpandableSectionProvider } from "@/components/ui/expandable-section";
import ExpandableSection from "@/components/ui/expandable-section";

const VisaProcess = () => {
  const visaSteps = [
    {
      title: "Application Submission",
      description: "Complete and submit the D-type visa application form online through the National Directorate-General for Aliens Policing (OIF) website.",
      requirements: [
        "Filled visa application form",
        "Valid passport (valid for at least 18 months)",
        "Two passport-sized photographs (3.5 × 4.5 cm)",
        "Letter of acceptance from Hungarian university",
        "Proof of accommodation in Hungary",
        "Proof of health insurance",
        "Proof of financial means (scholarship letter)"
      ],
      tips: "Start your visa application as soon as you receive your acceptance letter. The process can take 3-4 weeks."
    },
    {
      title: "Embassy Appointment",
      description: "Schedule an appointment with the Hungarian Embassy in Islamabad to submit your documents and provide biometric data.",
      requirements: [
        "Appointment confirmation",
        "Original and copy of all required documents",
        "Visa fee payment receipt (if applicable)"
      ],
      tips: "Schedule your appointment well in advance as slots fill up quickly. Double-check all documents before your appointment."
    },
    {
      title: "Visa Interview",
      description: "Attend the interview at the embassy where you'll discuss your study plans, program details, and future goals.",
      preparation: [
        "Research about your university and program",
        "Prepare to explain why you chose Hungary for your studies",
        "Be ready to discuss your future plans after graduation",
        "Know basic facts about Hungary and Hungarian education system"
      ],
      tips: "Dress professionally and arrive at least 30 minutes before your scheduled interview. Be confident and honest in your responses."
    },
    {
      title: "Visa Collection",
      description: "If approved, collect your visa from the embassy. This usually takes 2-3 weeks after your interview.",
      requirements: [
        "Original passport",
        "Visa collection slip provided during your application"
      ],
      tips: "Once you receive your visa, check all details for accuracy. Plan your travel to Hungary well in advance."
    }
  ];

  const commonInterviewQuestions = [
    "Why did you choose to study in Hungary?",
    "What do you know about your university and program?",
    "How will this program help your career goals?",
    "What are your plans after graduation?",
    "How do you plan to finance your studies and stay in Hungary?",
    "What do you know about Hungarian culture?",
    "How are your language skills? Do you plan to learn Hungarian?",
    "What do you know about the Stipendium Hungaricum scholarship?",
    "Have you ever travelled abroad before?",
    "Do you have any relatives or friends in Hungary or other EU countries?"
  ];

  const whatToBring = [
    "Passport with visa",
    "Acceptance letter from university",
    "Scholarship letter",
    "At least €500-1000 in cash for initial expenses",
    "Credit/debit card that works internationally",
    "Medical records and prescribed medications",
    "Accommodation details (address, contact person)",
    "Contact information of university coordinator",
    "Power adaptors (Hungary uses type F plugs, 230V)",
    "Passport-sized photographs for various registrations"
  ];

  const faqs = [
    {
      question: "How long does the visa process take?",
      answer: "The entire visa process typically takes 3-4 weeks from application submission to visa issuance. However, during peak seasons (July-August), it might take longer."
    },
    {
      question: "Do I need to pay a visa fee?",
      answer: "Stipendium Hungaricum scholarship holders are generally exempt from visa fees. Your scholarship letter serves as proof of this exemption."
    },
    {
      question: "What if my visa application is rejected?",
      answer: "If your visa is rejected, you will receive a written explanation. You can appeal the decision within 8 days. Contact your university international office for assistance with the appeal process."
    },
    {
      question: "Can I travel to other European countries with a Hungarian student visa?",
      answer: "Your Hungarian student visa allows you to enter Hungary. Once you obtain your residence permit in Hungary, you can travel within the Schengen Area for up to 90 days in a 180-day period."
    },
    {
      question: "Do I need to translate my documents for the visa application?",
      answer: "Yes, all non-English documents must be translated into English or Hungarian by a certified translator."
    }
  ];

  return (
    <ExpandableSectionProvider>
      <div className="min-h-screen flex flex-col bg-off-white">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
          <h1 className="font-syne font-bold text-3xl md:text-4xl mb-6 text-deep-teal">Visa Process Guide</h1>
          
          <div className="mb-12">
            <h2 className="font-syne font-semibold text-2xl mb-6">Step-by-Step Visa Guide</h2>
            
            <div className="space-y-6">
              {visaSteps.map((step, index) => (
                <ExpandableSection
                  key={index}
                  title={`${index + 1}. ${step.title}`}
                  className="border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all"
                >
                  <div>
                    <p className="mb-4 text-gray-700">{step.description}</p>
                    
                    {step.requirements && (
                      <div className="mb-4">
                        <h4 className="font-medium mb-2 flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-accent-orange" />
                          Requirements
                        </h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {step.requirements.map((req, i) => (
                            <li key={i} className="text-gray-700">{req}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {step.preparation && (
                      <div className="mb-4">
                        <h4 className="font-medium mb-2 flex items-center">
                          <MessageCircle className="h-4 w-4 mr-2 text-accent-orange" />
                          Interview Preparation
                        </h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {step.preparation.map((prep, i) => (
                            <li key={i} className="text-gray-700">{prep}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="flex items-start mt-4 bg-gray-50 p-3 rounded-md">
                      <AlertTriangle className="h-5 w-5 text-accent-orange mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 text-sm">{step.tips}</p>
                    </div>
                  </div>
                </ExpandableSection>
              ))}
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="font-syne font-semibold text-2xl mb-6">Interview Tips & Common Questions</h2>
            
            <Card className="backdrop-blur-sm bg-white/70 border border-gray-100 overflow-hidden shadow-sm">
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="font-syne font-semibold text-lg mb-4 flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2 text-deep-teal" />
                    Common Interview Questions
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {commonInterviewQuestions.map((question, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-accent-orange mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{question}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-4 bg-blue-50 border border-blue-100 rounded-md">
                  <h4 className="font-medium mb-2 text-blue-800">Interview Preparation Tips</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li className="text-blue-700">Research about Hungary and its education system</li>
                    <li className="text-blue-700">Know your program curriculum and career prospects</li>
                    <li className="text-blue-700">Practice your English speaking skills</li>
                    <li className="text-blue-700">Prepare a concise introduction about yourself</li>
                    <li className="text-blue-700">Be honest and consistent with your answers</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mb-12">
            <h2 className="font-syne font-semibold text-2xl mb-6">What to Carry to Hungary</h2>
            
            <Card className="backdrop-blur-sm bg-white/70 border border-gray-100 overflow-hidden shadow-sm">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="font-syne font-semibold text-lg mb-4 flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-deep-teal" />
                    Essential Items Checklist
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {whatToBring.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-accent-orange mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mb-12">
            <h2 className="font-syne font-semibold text-2xl mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <ExpandableCard key={index} title={faq.question} initialExpanded={false}>
                  <p className="text-gray-700">{faq.answer}</p>
                </ExpandableCard>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-deep-teal/10 to-accent-orange/10 rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="font-syne font-semibold text-lg">Next Step: Prepare for Hungary</h3>
                <p className="text-gray-700">Learn what to expect in your first month in Hungary</p>
              </div>
              <Button asChild className="bg-deep-teal hover:bg-deep-teal/90 text-white">
                <Link to="/first-month">
                  First Month Guide <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ExpandableSectionProvider>
  );
};

export default VisaProcess;
